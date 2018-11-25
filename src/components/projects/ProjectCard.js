import React from 'react'
import styled from 'styled-components'
import ProjectTitle from './ProjectTitle'
import Tag from '../Tag'
import WebsiteSVG from '../../assets/icons/website'
import GitSVG from '../../assets/icons/git'

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
  return (
    <div>
      <ProjectTitle title={props.project.title} reversed={props.reversed} />
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
