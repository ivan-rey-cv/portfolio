import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: relative;
  line-height: 1.25rem;
  z-index: 1;

  h2 {
    /* add position: relative to have same heirarchy with 'blocks'*/
    position: relative;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    z-index: 2;
    opacity: 0;
  }

  .block-top {
    position: absolute;
    top: 0;
    /* left/right will be added below */
    height: 2rem;
    width: 3rem;
    background-color: #ffd400;
    z-index: 1;
  }

  .block-bottom {
    opacity: 0;
    position: absolute;
    top: 0.75rem;
    /* left/right will be added below */
    height: 1.75rem;
    width: 100%;
    background-color: rgba(164, 242, 164, 0.6);
  }

  /* frame animations */
  &.animate {
    h2 {
      animation: title-animation 500ms 1000ms cubic-bezier(0.8, -0.5, 0.2, 1.8)
        forwards;
    }
    .block-top {
      animation: block-top-animation 1000ms cubic-bezier(0.8, -0.5, 0.2, 1.8)
        forwards;
    }
    .block-bottom {
      animation: block-bottom-animation 500ms 500ms ease-in-out forwards;
    }
  }

  @keyframes block-top-animation {
    from {
      opacity: 0;
      transform: translateY(-150%);
    }
    to {
      opacity: 1;
      transform: translate(0);
    }
  }
  @keyframes block-bottom-animation {
    from {
      opacity: 1;
      transform: scaleX(0);
    }
    to {
      opacity: 1;
      transform: scaleX(100%);
    }
  }
  @keyframes title-animation {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  ${props => {
    return props.reversed
      ? css`
          h2 {
            padding-left: 1.25rem;
            padding-right: 0.25rem;
          }

          .block-top {
            right: 0;
          }
          .block-bottom {
            right: 10%;
            transform-origin: 0 0;
          }
        `
      : css`
          h2 {
            padding-left: 0.25rem;
            padding-right: 1.25rem;
          }

          .block-top {
            left: 0;
          }
          .block-bottom {
            left: 10%;
            transform-origin: 100% 100%;
          }
        `
  }}
`

function ProjectTitle(props) {
  return (
    <Container
      reversed={props.reversed}
      className={props.toAnimate && 'animate'}
    >
      <h2>{props.title}</h2>
      <div className="block-top" />
      <div className="block-bottom" />
    </Container>
  )
}

export default React.memo(ProjectTitle)
