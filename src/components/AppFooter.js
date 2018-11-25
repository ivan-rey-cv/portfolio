import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  height: 3.5rem;
  width: 100%;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: rgb(104, 99, 107);
  background-color: rgb(229, 229, 229);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function AppFooter(props) {
  return (
    <Footer>
      <p>Ivan Rey C.V. ©️ 2018 </p>
      <p>Made 🤟🏽 with Gatsby.js | Netlify </p>
    </Footer>
  )
}

export default React.memo(AppFooter)
