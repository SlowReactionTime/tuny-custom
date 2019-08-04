import React from 'react'
import styled from 'styled-components';
import { Accordion, Card } from 'react-bootstrap';

const Styles = styled.div`
	h2 {
		font-size: 2em;
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

	.accordion {
		font-size: 2em;
		align-items: center;
	}

	.goldColor {
		color: #f7c52f;
	}
`;

export const FAQ = () => (
	<Styles>
		<h2>Frequently Asked Questions</h2>
	
		<Accordion class="accordion">
		  <Card>
		    <Card.Header>
		      <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" class="goldColor">
		        Payment
		      </Accordion.Toggle>
		    </Card.Header>
		    <Accordion.Collapse eventKey="0">
		      <Card.Body>
		      	<p>+When do I need to pay?</p>
		      	<h3>-Everything needs to be paid at front when the order is confirmed.</h3>
		      	<p>+What payment type do you accept?</p>
		      	<h3>-You can pay with cash or debit/credit card.  We do not accept personal checks.</h3>
		      	<p>+Do you charge setup fee?</p>
		      	<h3>-No, we do not charge any setup/design fee.</h3>
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Card.Header>
		      <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" class="goldColor">
		      	Order
		      </Accordion.Toggle>
		    </Card.Header>
		    <Accordion.Collapse eventKey="1">
		      <Card.Body>
		      	<p>+Do you need minimum quantity for each order?</p>
		      	<h3>-Normally we do not require minimum quantity, but there are some exceptions depending on printing method.</h3>
		      	<p>+Can I order on the phone?</p>
		      	<h3>-We do not accept phone or online orders. We do service for walk in customers only.</h3>
		      	<p>+Can I bring my own shirts?</p>
		      	<h3>-Yes, you can!</h3>
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Card.Header>
		      <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" class="goldColor">
		      	Time
		      </Accordion.Toggle>
		    </Card.Header>
		    <Accordion.Collapse eventKey="2">
		      <Card.Body>
		      	<p>+Do you do same day service?</p>
		      	<h3>-Usually not for new design.  We do same day service for simple letters and numbers for small quantity.  It also depends on the time of the order and our work load.</h3>
		      	<p>+What is your turnaround time or how long does it take?</p>
		      	<h3>-Since the order is confirmed and artwork is approved, it takes 1 - 10 business days depending on the production method and quantity.  If you use our stock shirts and quantity is 5 or less, it normally takes 1-2 business days.</h3>

		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		</Accordion>
	</Styles>
)