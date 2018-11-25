import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import ProjectTitle from './ProjectTitle'
import Tag from '../Tag'
import WebsiteSVG from '../../assets/icons/website'
import GitSVG from '../../assets/icons/git'

/* intersection observer polyfill for unsupported browsers*/
import('intersection-observer')

const Description = styled.div`
  padding: 1rem 0 0.5rem 0;
`
const ProjectLink = styled.a`
  margin: 0 0.75rem;
  cursor: pointer;
  color: rgb(128, 109, 147);

  svg {
    height: 0.75rem;
    width: 0.75rem;
    margin-right: 0.25rem;
    fill: blue;
  }

  :hover {
    color: orangered;

    svg {
      fill: orange;
    }
  }
`

function ProjectCard(props) {
  let projectNode = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(arg => {
    // if (IntersectionObserver) {
    //   const animateNode = function(entries, observer) {
    //     entries.forEach(entry => {
    //       entry.isIntersecting ? setInView(true) : setInView(false)
    //     })
    //   }
    //   const options = {
    //     root: null,
    //     threshold: [0, 0.9, 1],
    //   }
    //   const observer = new IntersectionObserver(animateNode, options)
    //   observer.observe(projectNode)
    // }
  }, [])

  return (
    <div ref={e => (projectNode = e)}>
      <ProjectTitle
        title={props.project.title}
        reversed={props.reversed}
        toAnimate={inView}
      />
      <Description>
        {props.project.tags.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
      </Description>
      <div>
        <ProjectLink target="_blank" href={props.project.website}>
          <WebsiteSVG />
          website
        </ProjectLink>
        <ProjectLink target="_blank" href={props.project.repo}>
          <GitSVG />
          repo
        </ProjectLink>
      </div>
    </div>
  )
}

export default React.memo(ProjectCard)
