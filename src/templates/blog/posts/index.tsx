/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui"
import { BlogPostsContext } from "src/../gatsby-node"
import { useIntl } from "react-intl"
import Layout from "src/components/layout"
import { Link } from "gatsby-plugin-intl"
import messages from "./messages"

type Props = {
  pageContext: BlogPostsContext
}

const Component: React.FC<Props> = ({ pageContext }) => {
  const intl = useIntl()
  const t = intl.formatMessage
  let posts = []
  for (let [key, post] of Object.entries(pageContext.blogPosts)) {
    if (!post[intl.locale]){
      continue
    }
    posts.push(
      <li>
        <Box>
          <Heading sx={{fontSize: 3, margin: 0}}><Link to={'/blog/posts/'+key+'/'}>{post[intl.locale].title}</Link></Heading>
          <Text>date:{post[intl.locale].createdAt}</Text>
        </Box>
      </li>
    )
  }
  return(
    <Layout>
      <Box
        sx={{
          '& a': {
            color: 'text'
          }
        }}
      >
        <Heading>{t(messages.title)}</Heading>
        <ul
          sx={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {posts}
        </ul>
      </Box>
    </Layout>
  )
}

export default Component