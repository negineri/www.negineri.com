import React from 'react'
import messages from "./messages"
import { useIntl } from "react-intl"
import { Link } from "gatsby-plugin-intl"

const Component: React.FC = () => {
  const intl = useIntl()
  const t = intl.formatMessage
  return(
    <div>
      <h2>{t(messages.services)}</h2>
      <ul>
        <li><Link to="/minecraft/">Minecraft</Link></li>
        <li><Link to="/factorio/">Factorio</Link></li>
      </ul>
    </div>
  )
}

export default Component