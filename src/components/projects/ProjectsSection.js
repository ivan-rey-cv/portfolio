import React from 'react'
import ProjectsLayout from '../../layouts/ProjectsLayout'
import Project from './Project'

import projectList from '../../data/projectList'

import styled from 'styled-components'
const UnorderedList = styled.ul`
  list-style: none;
  width: 100%;
  overflow: hidden;

  > li {
    &:first-of-type {
      margin-top: 2rem;
    }
    margin-top: 5rem;
  }
`
const Title = styled.h1`
  font-size: 3rem;
  color: #565656;
`

function ProjectsSection(props) {
  return (
    <ProjectsLayout id="Projects">
      <Title>Projects</Title>
      <UnorderedList>
        {projectList.map((project, index) => (
          <Project
            reversed={index % 2 === 0 ? false : true}
            key={`project-${index}`}
            project={project}
          />
        ))}
      </UnorderedList>
    </ProjectsLayout>
  )
}

export default React.memo(ProjectsSection)
