import React, { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'

import styled from 'styled-components'
const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;

  &.reversed {
    flex-direction: row-reverse;
    justify-content: space-between;

    &.slide-animation {
      animation: slide-left 1000ms ease-in;
    }
  }

  .divider {
    width: 3rem;
    height: 6rem;
  }

  &.slide-animation {
    animation: slide-right 1000ms ease-in;
  }

  @keyframes slide-right {
    from {
      transform: translateX(-200px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-left {
    from {
      transform: translateX(200px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

function Project(props) {
  let projectRef = useRef(null)

  // useEffect(args => {
  // 	if (projectRef) {
  // 		const animateNode = function(entries, observer) {
  // 			entries.forEach(entry => {
  // 				if (entry.isIntersecting) {
  // 					entry.target.classList.add('slide-animation')
  // 				} else {
  // 					entry.target.classList.remove('slide-animation')
  // 				}
  // 			})
  // 		}
  // 		const options = {
  // 			root: null,
  // 			threshold: [0, 0.9, 1]
  // 		}
  // 		const observer = new IntersectionObserver(animateNode, options)

  // 		observer.observe(projectRef)
  // 	}
  // })

  return (
    <Li className={props.reversed && 'reversed'} ref={e => (projectRef = e)}>
      <ProjectCard reversed={props.reversed} project={props.project} />
      <div className="divider" />
    </Li>
  )
}

export default React.memo(Project)
