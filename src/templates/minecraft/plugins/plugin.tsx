/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui"
import { McPluginContext } from "src/../gatsby-node"
import { useIntl } from "react-intl"
import Layout from "src/components/layout"

type Props = {
  pageContext: McPluginContext
}

const Component: React.FC<Props> = ({ pageContext }) => {
  const intl = useIntl()
  if (!pageContext.contents[intl.locale]) {
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
        <Heading>{pageContext.contents[intl.locale].title}</Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: pageContext.contents[intl.locale].body.childMarkdownRemark
              .html as string,
          }}
        />
      </Box>
    </Layout>
  )
}

export default Component
