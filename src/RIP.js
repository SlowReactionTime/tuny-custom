import React from 'react'
import styled from 'styled-components';
import r1 from './assets/r1.jpg'
import r2 from './assets/r2.jpg'
import r3 from './assets/r3.png'
import r5 from './assets/dt6.jpg'

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

	a {
		font-size: 1.5em;
	}
`;

export const RIP = () => (
	<Styles>
		{ window.scrollTo(0, 0) }
	  <div>
	    <h2>RIP Shirts</h2>
	    <h3>Our experience in designing and making memorial t-shirts will help you to remember your family, friends and the ones you love.</h3>
	  	<p class="disclaimer">We have 10 years experiences in designing and making memorial t-shirts.</p>
	  	<p class="disclaimer">We do special for memorial shirts.  Let us help you to remember the ones you love and miss.</p>
	  	<p class="disclaimer">If you need certain quantity and to rush (ex.  50 shirts in 2-3 days), don’t call us - just walk in!!!</p>
	  </div>

	  <h3>Samples</h3>
		<div>
			<img src={r1} alt="r1" class="rotate90"/>
			<img src={r2} alt="r2" class="rotate90"/>
			<img src={r3} alt="r3" />
		</div>
		<div>
			<img src={r5} alt="r5" class="rotate90"/>
			<img src={r5} alt="r5" class="rotate90"/>
			<img src={r3} alt="r3" />
		</div>
	</Styles>

)