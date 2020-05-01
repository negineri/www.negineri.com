import React, { Children } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ComponentsLayoutQuery } from "../../types/graphql-types"
import { Link } from "gatsby-plugin-intl"

const Component: React.FC = ({ children }) => {
  const data: ComponentsLayoutQuery = useStaticQuery(
    graphql`
      query ComponentsLayout{
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <header>
        <Link to="/"><strong>{data.site?.siteMetadata?.title}</strong></Link>
      </header>
      <hr/>
      {children}
    </div>
  )
}

export default Component