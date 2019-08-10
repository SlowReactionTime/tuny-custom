import React from 'react'
import styled from 'styled-components';
import e1 from './assets/e1.jpg';
import e2 from './assets/e2.jpg';
import e3 from './assets/e3.jpg';
import e4 from './assets/e4.png';
import e5 from './assets/5.jpg';
import e6 from './assets/e6.jpg';
import e7 from './assets/e7.jpg';
import e8 from './assets/e8.jpg';
import e9 from './assets/e9.jpg';
import e10 from './assets/e10.jpg';

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

	table {

		background-color: #f2f2f2;	
		width: 90%;
		text-align: center;
		margin-left:auto;
		margin-right:auto;
		font-size: 1.5em;
	}

	th {
	  background-color: #f7c52f;
	  color: black;
	}

	th, td {
		padding: 5px;
	}

	img {
		 border-radius: 20px;
		 width: 20%
		 height: 20%;
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

export const Embroidery = () => (
	<Styles>
		{ window.scrollTo(0, 0) }
		
	 	<div>
		    <h2>Embroidery</h2>
		    <p>Embroidery provides classic and professional looking for your garment and it lasts long.  We do monogram, logo, and / or personalize design on various fabrics including uniforms, vests, hats, bags and patch, etc..  We do not charge setup / digitizing fee. (exception: complicated design with quantity less than 10)</p>
		  	<h3>Monogram / Simple Letters on Left Chest (3,000 or less stitches)</h3>
		  	<table>
			  <tr>
			    <th>1 ~ 9</th>
			    <th>10 ~ 24</th> 
			    <th>25 ~ 50</th>
			    <th>50 ~ 100</th>
			  </tr>
			  <tr>
			    <td>$8</td>
			    <td>$7</td> 
			    <td>$6</td>
			    <td>$5</td>
			  </tr>
			</table>

			<div>
				<p class="disclaimer">Logo, Hat, or Bag: Additional $2.00</p>
				<p class="disclaimer">Over 3,000 Stitches: Additional $1.00 and $1.00 increase / 2,000 stitches</p>
			</div>

			<h3>Samples</h3>
			<div>
				<img src={e1} alt="e1" class="rotate90" />
				<img src={e2} alt="e2" class="rotate90" />
				<img src={e3} alt="e3" class="rotate90" />
				<img src={e6} alt="e6" class="rotate90" />
				<img src={e7} alt="e7" />
			</div>
			<div>
				<img src={e4} alt="e4" />
				<img src={e8} alt="e8" />
				<img src={e5} alt="e5" />
				<img src={e9} alt="e9" class="rotate90" />
				<img src={e10} alt="e10" class="rotate90" />

			</div>
		 </div>
	</Styles>
)