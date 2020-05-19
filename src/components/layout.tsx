/** @jsx jsx */
import { jsx, useColorMode, Button, Flex, Box } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ComponentsLayoutQuery } from "types/graphql-types"
import { Link } from "gatsby-plugin-intl"
import Head from "src/components/head"
import { IconContext } from "react-icons"
import { MdBrightness4, MdBrightness7 } from "react-icons/md"
import "focus-visible"

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
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div
    >
      <Head />
      <header
        sx={{
          backgroundColor: "primary",
          padding: 3,
          color: "white",
          boxShadow: "0 2px 5px rgba(0,0,0,0.26)"
        }}
      >
        <Flex
          sx={{
            lineHeight: "100%",
            alignItems: "center",
          }}
        >
          <Box>
          <Link
            to="/"
            activeClassName='active'
            sx={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <strong>{data.site?.siteMetadata?.title}</strong>
          </Link>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
          <Button
            onClick={e => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}
            sx={{
              height: "32px",
              width: "32px",
              borderRadius: '50%',
              padding: "0px",
            }}
          >
            <IconContext.Provider value={{ size: "24px" }}>
              {colorMode === 'default'
                ? <MdBrightness4 />
                : <MdBrightness7 />
              }
            </IconContext.Provider>
          </Button>
          </Box>
        </Flex>
      </header>
      <Box sx={{
        padding: [1, 3, 3],
        '& div': {
          overflow: 'hidden'
        },
        '&>div': {
          width: [null, null, '784px'],
          marginX: [null, null, 'auto']
        },
        '& a':{
          textDecoration: 'none',
          color: 'secondary'
        },
        '& a:hover': {
          textDecoration: 'underline'
        },
        '& h1':{
          marginY: 2
        },
        '& h2': {
          marginY: 2
        },
        '& p': {
          marginY: 1
        },
        '& .gatsby-code-title': {
          display: 'block',
          position: 'relative',
          background: '#2d2d2d',
          width: '100%',
          top: '10px',
          borderTopLeftRadius: '0.3em',
          borderTopRightRadius: '0.3em'
        },
        '& .gatsby-code-title span': {
          display: "inline",
          position: "relative",
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          color: "#eee",
          background: "#777",
          borderTopLeftRadius: "0.3em",
          borderBottomRightRadius: "0.3em",
          padding: "3px",
          top: "1px",
        }
      }}
      >
        {children}
      </Box>
    </div>
  )
}

export default Component