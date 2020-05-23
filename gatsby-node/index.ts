import { GatsbyNode } from "gatsby"
import * as BlogPosts from "./blog-posts"
import * as MinecraftPlugins from "./minecraft-pugins"

export type BlogPostContext = BlogPosts.BlogPostContext
export type BlogPostsContext = BlogPosts.BlogPostsContext
export type McPluginContext = MinecraftPlugins.McPluginContext
export type McPluginsContext = MinecraftPlugins.McPluginsContext

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
}) => {
  await BlogPosts.createPages({ graphql, actions: { createPage } })
  await MinecraftPlugins.createPages({ graphql, actions: { createPage } })
}
