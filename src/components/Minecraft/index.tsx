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
      <Heading>{t(messages.rule)}</Heading>
      <p>{t(messages.ruleDescription1)}</p>
      <p>{t(messages.ruleDescription2)}</p>
      <p>{t(messages.ruleDescription3)}</p>
      <Heading>{t(messages.prohibitedMatters)}</Heading>
      <ul>
        <li>{t(messages.prohibitedMatters1)}</li>
        <li>{t(messages.prohibitedMatters2)}</li>
      </ul>
      <Heading>{t(messages.version)}</Heading>
      <Text>PaperMC 1.15.2</Text>
      <Heading>{t(messages.plugins)}</Heading>
      <Link to="/minecraft/plugins/">{t(messages.pluginsList)}</Link>
      <Heading>{t(messages.address)}</Heading>
      <Flex>
        <Text>IP Address:</Text>
        <Text marginLeft="2">minecraft.negineri.com</Text>
      </Flex>
      <Heading>{t(messages.map)}</Heading>
      <a href="https://dynmap.negineri.com/">Dynmap</a>
    </Box>
  )
}

export default Component
