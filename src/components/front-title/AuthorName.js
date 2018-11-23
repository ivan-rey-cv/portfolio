import React from 'react'

import styled from 'styled-components'
const AuthorDivContainer = styled.div`
	font-size: 3.5rem;
	line-height: 150%;
	/* font-family: 'Lora', serif; */

	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

function AuthorName(props) {
	return (
		<AuthorDivContainer>
			<h1>IVAN</h1>
			<h2>REY</h2>
			<h1>C V</h1>
		</AuthorDivContainer>
	)
}

export default React.memo(AuthorName)
