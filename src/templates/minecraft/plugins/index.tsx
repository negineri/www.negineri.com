/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui"
import { McPluginsContext } from "src/../gatsby-node"
import { useIntl } from "react-intl"
import Layout from "src/components/layout"
import { Link } from "gatsby-plugin-intl"
import messages from "./messages"

type Props = {
  pageContext: McPluginsContext
}

const Component: React.FC<Props> = ({ pageContext }) => {
  const intl = useIntl()
  const t = intl.formatMessage
  let contents = []
  for (let [key, content] of Object.entries(pageContext.contents)) {
    if (!content[intl.locale]) {
      continue
    }
    contents.push(
      <li>
        <Box>
          <Heading sx={{ fontSize: 3, margin: 0 }}>
            <Link to={"/minecraft/plugins/" + content[intl.locale].slug + "/"}>
              {content[intl.locale].title}
            </Link>
          </Heading>
          <Text>{content[intl.locale].description.description}</Text>
        </Box>
      </li>
    )
  }
  return (
    <Layout>
      <Box
        sx={{
          "& a": {
            color: "text",
          },
        }}
      >
        <Heading>{t(messages.title)}</Heading>
        <ul
          sx={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {contents}
        </ul>
      </Box>
    </Layout>
  )
}

export default Component
