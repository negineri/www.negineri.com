import path from "path"
import { Actions, CreatePagesArgs } from "gatsby"
import { QueryContentfulMinecraftPluginArgs } from "src/../types/graphql-types"

type Result = {
  allContentfulMinecraftPlugin: {
    nodes: QueryContentfulMinecraftPluginArgs[]
  }
}

type McPlugin = {
  [key: string]: QueryContentfulMinecraftPluginArgs
}

export type McPluginContext = {
  contents: McPlugin
}

export type McPluginsContext = {
  contents: McPlugins
}

type McPlugins = {
  [key: string]: McPlugin
}

const query = `
{
  allContentfulMinecraftPlugin {
    nodes {
      title
      slug
      description {
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      node_locale
      contentful_id
    }
  }
}
`
type Props = {
  graphql: CreatePagesArgs["graphql"]
  actions: {
    createPage: Actions["createPage"]
  }
}
type CreatePages = ({}: Props) => void

export const createPages: CreatePages = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<Result>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { allContentfulMinecraftPlugin } = result.data
  if (!allContentfulMinecraftPlugin || !allContentfulMinecraftPlugin.nodes) {
    throw new Error("undefined posts")
  }
  let mcPlugins: McPlugins = {}
  for (let post of allContentfulMinecraftPlugin.nodes) {
    if (!mcPlugins[post.contentful_id as string]) {
      mcPlugins[post.contentful_id as string] = {}
    }
    if (!post.contentful_id || !post.title) {
      continue
    }
    let locale: string
    switch (post.node_locale) {
      case "ja-JP":
        locale = "ja"
        break
      case "en-US":
        locale = "en"
        break
      default:
        continue
    }
    mcPlugins[post.contentful_id as string][locale] = post
  }

  for (let [key, plugin] of Object.entries(mcPlugins)) {
    if (plugin) {
      createPage<McPluginContext>({
        path: `/minecraft/plugins/${plugin.ja.slug}/`,
        component: path.resolve("src/templates/minecraft/plugins/plugin.tsx"),
        context: { contents: plugin },
      })
    }
  }
  createPage<McPluginsContext>({
    path: `/minecraft/plugins/`,
    component: path.resolve("src/templates/minecraft/plugins/index.tsx"),
    context: { contents: mcPlugins },
  })
}
