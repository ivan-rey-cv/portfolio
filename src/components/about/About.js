import React from 'react'
import styled from 'styled-components'
import SiteLinks from './SiteLinks'

const Container = styled.div`
  margin: 6rem auto 0 auto;
  max-width: 900px;
  padding: 3rem 0 10rem 0;
`
const AboutInfo = styled.div`
  display: flex;
  padding: 2rem 0;
  font-size: 1.25rem;

  .greeting {
    flex: 1;
    min-width: 5rem;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;

    h2 {
      padding-top: 0.4rem;
      border-top: 2px solid black;
      font-family: 'Righteous', serif;
    }
  }

  .info {
    flex: 4;
    min-width: 200px;
    max-width: 500px;
  }
`
const Talk = styled.div`
  margin: 4rem auto 0 auto;
  max-width: 800px;
  font-size: calc(4vw + 2vh);
  text-align: center;
  font-family: 'Righteous', serif;
`

function About(props) {
  return (
    <Container id="About">
      <AboutInfo>
        <div className="greeting">
          <h2>Hi!</h2>
        </div>
        <div className="info">
          <p>
            Ivan Rey C.V. is a self taught software programmer and currently
            available for remote work. Has passion for Javascript, React, Vue
            and Firebase.
          </p>
        </div>
      </AboutInfo>

      <Talk>
        <h1>Let's Talk</h1>
      </Talk>

      <SiteLinks />
    </Container>
  )
}

export default React.memo(About)
