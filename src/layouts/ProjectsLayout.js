import React from 'react'

import styled from 'styled-components'
const Section = styled.section`
  margin: 4rem auto 0 auto;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
`

function ProjectsLayout(props) {
  return <Section {...props}>{props.children}</Section>
}

export default React.memo(ProjectsLayout)
