import React from 'react'
import Tag from '../Tag'
import styled from 'styled-components'

const Card = styled.div`
  flex: 1;
  max-width: 22rem;
  display: flex;
  flex-direction: column;
`
const TopSection = styled.div`
  height: 15rem;
  padding: 0.5rem;
  background-color: rgba(232, 244, 244, 0.25);
  /* background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v2h-6v6h6v8H8v-6H2v6H0V0zm4 4h2v2H4V4zm8 8h2v2h-2v-2zm-8 0h2v2H4v-2zm8-8h2v2h-2V4z' fill='%239356ae' fill-opacity='0.50' fill-rule='evenodd'/%3E%3C/svg%3E"); */
`
const ImageDiv = styled.div`
	width: 100%;
	height: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	/* background-image: url(${props => `images/${props.image}`}); */
`
const TagContainer = styled.div`
  padding: 0.25rem 1rem;
`
const ProjectTitle = styled.div`
  font-family: 'Righteous', serif;
  padding: 0.2rem 0;
  font-weight: 600;
`
const Link = styled.a`
  margin: 0 0.75rem;
  color: blue;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;

  :hover {
    opacity: 0.9;
  }
`

function ProjectCard(props) {
  return (
    <Card>
      <TopSection>
        <ImageDiv image={props.project.image} />
      </TopSection>

      <div>
        <TagContainer>
          {props.project.tags.map(tag => (
            <Tag tag={tag} key={tag} />
          ))}
        </TagContainer>
        <ProjectTitle>
          <h1>{props.project.title}</h1>
        </ProjectTitle>
        <div>
          <Link href={props.project.website}>Website</Link>
          <Link href={props.project.repo}>Repo</Link>
        </div>
      </div>
    </Card>
  )
}

export default React.memo(ProjectCard)
