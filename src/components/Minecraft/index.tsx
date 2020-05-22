/** @jsx jsx */
import { jsx, Heading, Text, Flex, Box } from "theme-ui"
import React from "react"
import messages from "./messages"
import { useIntl } from "react-intl"
import { Link } from "gatsby-plugin-intl"

const Component: React.FC = () => {
  const intl = useIntl()
  const t = intl.formatMessage
  const H = <Heading></Heading>
  return (
    <Box>
      <Heading as="h1">{t(messages.title)}</Heading>
      <p>{t(messages.description)}</p>
      <Heading>Version</Heading>
      <Text>PaperMC 1.15.2</Text>
      <Heading>Plugins</Heading>
      <ul>
        <li></li>
      </ul>
      <Heading>Address</Heading>
      <Flex>
        <Text>IP Address:</Text>
        <Text marginLeft="2">minecraft.negineri.com</Text>
      </Flex>
    </Box>
  )
}

export default Component
