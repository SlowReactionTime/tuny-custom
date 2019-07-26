import React from 'react'
import styled from 'styled-components';
import v1 from './assets/v1.jpg'
import v2 from './assets/v2.jpg'
import v3 from './assets/v3.png'
import v4 from './assets/v4.png'
import v5 from './assets/v5.png'
import v6 from './assets/v6.jpg'
import v7 from './assets/v7.jpg'

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

	.rotate-90 {
	    -webkit-transform: rotate(-90deg);
	    -moz-transform: rotate(-90deg);
	    -o-transform: rotate(-90deg);
	    -ms-transform: rotate(-90deg);
	    transform: rotate(-90deg);
	}

	.rotate90 {
	    -webkit-transform: rotate(90deg);
	    -moz-transform: rotate(90deg);
	    -o-transform: rotate(90deg);
	    -ms-transform: rotate(90deg);
	    transform: rotate(90deg);
	}
`;

export const Vinyl = () => (
	<Styles>
	  <div>
	    <h2>Vinyl</h2>
	    <h3>If you would like to put your design on your colored shirts or you need metallic ink, without minimum quantity requirement, we do 1 – 2 color printing with Vinyl Heat Press.</h3>
	  	<p class="disclaimer">Turnaround Time : 1-5 business days (1-2 business days for the order of 5 or less shirts using our stock shirts)</p>
	  </div>

	  <h3>Samples</h3>
			<div>
				<img src={v1} alt="v1" class="rotate-90"/>
				<img src={v2} alt="v2" class="rotate90" />
				<img src={v3} alt="v3" />
			</div>
			<div>
				<img src={v1} alt="v1" class="rotate-90" />
				<img src={v6} alt="v6" class="rotate90" />
				<img src={v7} alt="v7" class="rotate90" />
			</div>
	</Styles>

)