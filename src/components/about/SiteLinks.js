import React from 'react'
import styled from 'styled-components'

import DevtoSVG from '../../assets/icons/devto'
import FreecodecampSVG from '../../assets/icons/freecodecamp'
import GithubSVG from '../../assets/icons/github'
import GmailSVG from '../../assets/icons/gmail'
import HackerrankSVG from '../../assets/icons/hackerrank'

const Container = styled.div`
  margin: 1rem auto 0 auto;
  padding: 1rem;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #373849;
    fill: #373849;

    &:hover {
      transform: scale(1.1);
      color: black;
      fill: #603063;
    }
    &:active {
      transform: scale(0.8);
    }

    svg {
      height: 2rem;
      width: 2rem;
    }
  }
`
const links = [
  {
    name: 'gmail',
    svg: GmailSVG,
    link: 'mailto:ivan.rey.c.v+portfolio@gmail.com',
  },
  {
    name: 'github',
    svg: GithubSVG,
    link: 'https://github.com/ivan-rey-c-v',
  },
  {
    name: 'fcc',
    svg: FreecodecampSVG,
    link: 'https://www.freecodecamp.org/ivan-rey-c-v',
  },
  {
    name: 'dev.to',
    svg: DevtoSVG,
    link: 'https://dev.to/ivanreycv',
  },
  {
    name: 'hackerrank',
    svg: HackerrankSVG,
    link: 'https://www.hackerrank.com/ivan_rey_c_v',
  },
]

function SiteLinks(props) {
  return (
    <Container>
      {links.map(Link => (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={Link.link}
          key={Link.name}
        >
          <Link.svg />
          <p>{Link.name}</p>
        </a>
      ))}
    </Container>
  )
}

export default React.memo(SiteLinks)
