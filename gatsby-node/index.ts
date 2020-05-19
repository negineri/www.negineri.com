import path from "path"
import { GatsbyNode } from "gatsby"
import { QueryContentfulBlogPost1Args } from "src/../types/graphql-types"
import { ECDH } from "crypto"
import Component from "src/components/head"

type Result = {
  allContentfulBlogPost1: {
    nodes: QueryContentfulBlogPost1Args[]
  }
}

type BlogPost = {
  [key: string]: QueryContentfulBlogPost1Args;
}

export type BlogPostContext = {
  post: BlogPost;
}

export type BlogPostsContext = {
  blogPosts: BlogPosts
}

type BlogPosts = {
  [key: string]: BlogPost;
}

const query = `
{
  allContentfulBlogPost1 {
    nodes {
      id
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      node_locale
      contentful_id
      createdAt
    }
  }
}
`
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => {
  const result = await graphql<Result>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { allContentfulBlogPost1 } = result.data
  if (!allContentfulBlogPost1 || !allContentfulBlogPost1.nodes ) {
    throw new Error("undefined posts")
  }
  let blogPosts: BlogPosts = {}
  for (let post of allContentfulBlogPost1.nodes) {
    if (!blogPosts[post.contentful_id as string]) {
      blogPosts[post.contentful_id as string] = {}
    }
    if (!post.contentful_id || !post.title) {
      continue;
    }
    let locale: string
    switch (post.node_locale) {
      case "ja-JP":
        locale = "ja"
        break;
      case "en-US":
        locale = "en"
        break;
      default:
        continue;
    }
    blogPosts[post.contentful_id as string][locale] = post
  }
  
  for (let [key, post] of Object.entries(blogPosts)) {
    if (post) {
      createPage<BlogPostContext>({
        path: `/blog/posts/${post.ja.contentful_id}/`,
        component: path.resolve("src/templates/post.tsx"),
        context: { post }
      })
    }
  }
  createPage<BlogPostsContext>({
    path: `/blog/posts/`,
    component: path.resolve("src/templates/blog/posts/index.tsx"),
    context: { blogPosts }
  })
}