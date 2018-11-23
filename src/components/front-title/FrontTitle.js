import React from 'react'
import AuthorName from './AuthorName'
import WebDev from './WebDev'

import styled from 'styled-components'
const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 400px;

	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 5rem 0.1rem 2rem 1rem;
	position: relative;

	border: 1px solid lightgray;
`
const Portfolio = styled.div`
	font-size: 2rem;
	color: #d3c1dd;
`

const Remote = styled.div`
	position: absolute;
	top: 3rem;
	left: -0.75rem;
	transform-origin: 50 50;
	transform: rotate(90deg);

	color: #ffb293;
	border: 1px solid #ffb293;
	padding: 0 0.25rem 0.25rem 0.25rem;
`

function PortfolioTitle(props) {
	return (
		<Container id="Home">
			<Portfolio>
				<h2>PORTFOLIO</h2>
			</Portfolio>
			<AuthorName />
			<WebDev />
			<Remote>REMOTE</Remote>
		</Container>
	)
}

export default React.memo(PortfolioTitle)
