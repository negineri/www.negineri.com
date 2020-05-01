import React from 'react'
import messages from "./messages"
import { useIntl } from "react-intl"
import { Link } from "gatsby-plugin-intl"

const Component: React.FC = () => {
  const intl = useIntl()
  const t = intl.formatMessage
  return(
    <div>
      <h1>{t(messages.title)}</h1>
      <p>{t(messages.description)}</p>
      <ul>
        <li>plugins</li>
        <li>spec</li>
      </ul>
      <p>Address: <strong>minecraft.negineri.com</strong></p>
    </div>
  )
}

export default Component