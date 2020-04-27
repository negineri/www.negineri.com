import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { IndexQueryQuery } from "../../types/graphql-types"

// ______________________________________________________
//
type Props = {
  data: IndexQueryQuery
}
// ______________________________________________________
//

const Component: React.FC<Props> = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>
      Welcome to your new{" "}
      <strong>{data.site?.siteMetadata?.title}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default Component