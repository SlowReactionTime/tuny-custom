import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
	h2 {
		text-align: center;
		padding-top: 30px;
		padding-bottom: 30px;
	}

	h3 {
		text-align: center;
		color: #f7c52f;
		padding: 30px 0px 30px 0px;
	}

	.disclaimer {
		font-style: oblique;
		text-align: center;
	}
`;

export const About = () => (
	<Styles>
		<h2>Tuny Custom</h2>
		<div>
			Coming soon.
		</div>
	</Styles>
)
