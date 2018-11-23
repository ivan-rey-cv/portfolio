import React from 'react'

import styled from 'styled-components'
const Span = styled.span`
	height: 1rem;
	padding: 0 0.4rem;
	font-size: 0.75rem;
	font-weight: 600;
	text-transform: uppercase;
	color: white;
	border-radius: 2px;

	${props => (props.color ? { backgroundColor: props.color } : null)};
`

const tags = {
	vue: '#47b881',
	responsive: '#14b5d0',
	purple: '#735dd0',
	react: '#425A70',
	blue: '#1070ca'
}

function Tag(props) {
	return <Span color={tags[props.tag]}>{props.tag}</Span>
}

export default React.memo(Tag)
