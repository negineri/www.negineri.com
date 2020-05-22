/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui"
import { BlogPostContext } from "src/../gatsby-node"
import { useIntl } from "react-intl"
import Layout from "src/components/layout"

type Props = {
  pageContext: BlogPostContext
}

const Component: React.FC<Props> = ({ pageContext }) => {
  const intl = useIntl()
  if (!pageContext.post[intl.locale]) {
    return (
      <Layout>
        <Box>
          <Heading>Untranslated</Heading>
        </Box>
      </Layout>
    )
  }
  return (
    <Layout>
      <Box>
        <Heading>{pageContext.post[intl.locale].title}</Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: pageContext.post[intl.locale].body.childMarkdownRemark
              .html as string,
          }}
        />
      </Box>
    </Layout>
  )
}

export default Component
