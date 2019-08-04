import React from 'react'
import styled from 'styled-components';
import dp1 from './assets/dp1.jpg'
import dp2 from './assets/dp2.jpg'
import dp3 from './assets/dp3.png'
import dp4 from './assets/dp4.jpg'
import r1 from './assets/r1.jpg'
import r2 from './assets/r2.jpg'

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

	img {
		 border-radius: 20px;
		 width: 33%
		 height: 33%;
		 padding: 10ox 10px 10px 10px;
		 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #f7c52f;
	}

	.disclaimer {
		font-style: oblique;
		text-align: center;
	}

	p {
		font-size: 1.5em;
	}

	.rotate90 {
	    -webkit-transform: rotate(90deg);
	    -moz-transform: rotate(90deg);
	    -o-transform: rotate(90deg);
	    -ms-transform: rotate(90deg);
	    transform: rotate(90deg);
	}
`;

export const DigitalPrinting = () => (
	<Styles>
	  <div>
	    <h2>Digital Printing</h2>
	    <h3>We do full color printing on most of fabrics with all colors using digital printing method.  It is durable and provides vibrant color expression.</h3>
	  	<p class="disclaimer">Minimum Quantity per Order : 10</p>
	  	<p class="disclaimer">Turnaround Time : 1-5 business days (1-2 business days for the order of 5 or less shirts using our stock shirts)</p>
	  </div>

	  <h3>Samples</h3>
			<div>
				<img src={dp1} alt="dp1" class="center rotate90" />
				<img src={dp2} alt="dp2" class="center rotate90" />
				<img src={dp3} alt="dp3" class="center" />
			</div>
			<div>
				<img src={dp4} alt="dp4" class="center" />
				<img src={r2} alt="r2" class="center rotate90" />
				<img src={r1} alt="r1" class="center rotate90" />
			</div>
	</Styles>

)