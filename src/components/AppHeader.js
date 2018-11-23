import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(102, 51, 153, 0.9);
`
const Nav = styled.nav`
  margin: 0 auto;
  max-width: 800px;

  display: flex;
  font-size: 1.25rem;
  padding: 0.5rem 0.25rem 0.25rem 0.25rem;
`
const Item = styled(Link)`
  margin: 0 0.25rem;
  padding: 0 0.5rem;
  cursor: pointer;
  color: lightgray;
  text-decoration: none;

  &.active {
    border-bottom: 4px solid rgba(255, 255, 255, 0.9);
    color: white;
  }

  :hover {
    background-color: rgba(234, 234, 234, 0.5);
  }
  :active {
    transform: scale(0.95);
  }
`

function AppHeader(props) {
  return (
    <Header>
      <Nav>
        <Item
          activeClass="active"
          to="Home"
          spy
          smooth
          offset={-100}
          duration={500}
        >
          Home
        </Item>
        <Item
          activeClass="active"
          to="Projects"
          spy
          smooth
          offset={-100}
          duration={500}
        >
          Projects
        </Item>
        <Item
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          About
        </Item>
      </Nav>
    </Header>
  )
}

export default React.memo(AppHeader)
