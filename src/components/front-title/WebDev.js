import React from 'react'

import styled from 'styled-components'
const Container = styled.div`
	align-self: center;
	margin-top: 3rem;

	font-size: 1.5rem;
	font-weight: 600;
	border: 1px solid #836b91;
	border-radius: 2px;

	span {
		display: inline-block;
		padding: 0.25rem 1rem;
	}

	.web {
		color: #836b91;
	}
	.dev {
		color: white;
		background-color: #836b91;
	}
`

function WebDev(props) {
	return (
		<Container>
			<span className="web">WEB</span>
			<span className="dev">DEV</span>
		</Container>
	)
}

export default React.memo(WebDev)
