import React from 'react'
import styled from 'styled-components';
import sp1 from './assets/sp1.png'
import sp2 from './assets/sp2.png'
import sp3 from './assets/4.jpg'
import sp4 from './assets/sp4.jpg'
import sp5 from './assets/sp5.jpg'


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
		 padding: 70px 10px 70px 10px;
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

	a {
		font-size: 1.5em;
	}
`;

export const ScreenPrinting = () => (
	<Styles>
		{ window.scrollTo(0, 0) }
		
	  <div>
	    <h2>Screen Printing</h2>
	    <h3>Silk screen printing is an ideal method for large quantity orders with limited colored design for cost saving and durability.</h3>
	  	<p class="disclaimer">Minimum Quantity : 20 pieces</p>
	  	<p class="disclaimer">Number of Colors per Location : upto 4 colors</p>
	  	<p class="disclaimer">Turnaround Time : 5 – 10 business days</p>
	  </div>

	  <h3>Samples</h3>
			<div>
				<img src={sp1} alt="sp1" />
				<img src={sp2} alt="sp2" />
				<img src={sp3} alt="sp3" class="rotate90"/>
			</div>
			<div>
				<img src={sp4} alt="sp4" class="rotate90" />
				<img src={sp5} alt="sp5" class="rotate90" />
				<img src={sp3} alt="sp3" class="rotate90"/>
			</div>
	</Styles>

)