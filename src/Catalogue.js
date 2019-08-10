import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

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

	p {
		font-size: 1.5em;
	}

	a {
		color: #f7c52f;
		font-size: 1.2em;
	}
`;

export const Catalogue = () => (
	<Styles>
		<h2>Our Catalogue</h2>
		<Container>
		 <Row>
		 	<Col>		  
			  	<p><a href="https://www.sanmar.com" target="_blank"><b>Catalogue #1:</b></a></p>
		  	</Col>
		  	<Col>
			  	<p><a href="https://www.alphabroder.com" target="_blank"><b>Catalogue #2</b></a></p>
		  	</Col>
		  	<Col>
			  	<p><a href="https://www.augustasportswear.com" target="_blank"><b>Sportswear</b></a></p>
		  	</Col>
		 </Row>
		</Container>
	</Styles>
)