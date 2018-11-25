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
    position: absolute;
    top: 0.75rem;
    /* left/right will be added below */
    height: 1.75rem;
    width: 100%;
    background-color: rgba(164, 242, 164, 0.6);
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
          }
        `
  }}
`

function ProjectTitle(props) {
  return (
    <Container reversed={props.reversed}>
      <h2>{props.title}</h2>
      <div className="block-top" />
      <div className="block-bottom" />
    </Container>
  )
}

export default React.memo(ProjectTitle)
