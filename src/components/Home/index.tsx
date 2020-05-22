/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import React from "react"
import messages from "./messages"
import { useIntl } from "react-intl"
import { Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import { ComponentsHomeIndexQuery } from "types/graphql-types"

const Component: React.FC = () => {
  const data: ComponentsHomeIndexQuery = useStaticQuery(
    graphql`
      query ComponentsHomeIndex {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const intl = useIntl()
  const t = intl.formatMessage
  return (
    <div>
      <Heading as="h1">{data.site.siteMetadata.title}</Heading>
      <p>{t(messages.description)}</p>
      <Heading>{t(messages.services)}</Heading>
      <ul>
        <li>
          <Link to="/minecraft/">Minecraft</Link>
        </li>
      </ul>
      <Heading>{t(messages.blog)}</Heading>
      <ul>
        <li>
          <Link to="/blog/posts/">{t(messages.blogPosts)}</Link>
        </li>
      </ul>
    </div>
  )
}

export default Component
