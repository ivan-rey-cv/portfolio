import React from 'react'
import ProjectCard from './ProjectCard'

import styled from 'styled-components'
const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;

  &.reversed {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .divider {
    width: 3rem;
    height: 6rem;
  }
`

function Project(props) {
  return (
    <Li className={props.reversed && 'reversed'}>
      <ProjectCard reversed={props.reversed} project={props.project} />
      <div className="divider" />
    </Li>
  )
}

export default React.memo(Project)
