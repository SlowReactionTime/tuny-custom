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

	.disclaimer {
		font-style: oblique;
		text-align: center;
	}


	p {
		font-size: 1.5em;
	}
`;

export const Contact = () => (
	<Styles>
		<h2>Tuny Custom</h2>
		<Container>
		 <Row>
		 	<Col>		  
			  	<p><b>Contact:</b></p>
			  	<p>(678) 431-6988</p>
			  	<p>334tuny@gmail.com</p>
		  	</Col>
		  	<Col>
			  	
			  	<p><b>Address:</b></p>
			  	<p>6136 Atlanta Hwy</p>
			  	<p>Montgomery, Alabama 36117</p>
			  	<p>United States</p>

		  	</Col>
		  	<Col>
			  	<p><b>Business Hours:</b></p>
			  	<p>Mon: 10:00 AM ~ 8:00 PM</p>
			  	<p>Tue: 10:00 AM ~ 8:00 PM</p>
			  	<p>Wed: 10:00 AM ~ 8:00 PM</p>
			  	<p>Thu: 10:00 AM ~ 8:00 PM</p>
			  	<p>Fri: 10:00 AM ~ 8:00 PM</p>
			  	<p>Sat: 10:00 AM ~ 5:00 PM</p>
			  	<p>Sun: Close</p>
		  	</Col>
		 </Row>
		</Container>
	</Styles>
)
