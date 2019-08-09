import React from 'react'
import styled from 'styled-components'
import { ProductsFrom } from './components/ProductsFrom.js';
import dt1 from './assets/dt1.jpg'
import dt2 from './assets/dt2.png'
import dt3 from './assets/dt3.png'
import dt4 from './assets/dt4.jpg'
import dt5 from './assets/dt5.jpg'
import dt6 from './assets/dt6.jpg'
import dt7 from './assets/dt7.jpg'

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
		tr:nth-child(even) {background-color: #e8e8e8;}	
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
		 width: 25%
		 height: 25%;
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

export const DTG = () => (
	<Styles>
	  <div>
	    <h2>Direct to Garment (DTG)</h2>
	    <p>DTG  is a direct full color print on white or light colored shirts.  This gives very soft feeling on the printed surface without sense of difference with the fabric material.</p>
	  	<table>
			  <tr>
			  	<th>T-Shirts' Color</th>
			    <th>1 ~ 4</th>
			    <th>5 ~ 9</th> 
			    <th>10 ~ 24</th>
			    <th>25 ~ 49</th>
			    <th>50 ~ 78</th> 
			    <th>79 ~ 149</th>
			    <th>150 ~ 300</th>
			  </tr>
			  <tr>
			  	<th>White</th>
			    <td>$15</td>
			    <td>$13</td> 
			    <td>$10</td>
			    <td>$9</td>
			    <td>$8</td> 
			    <td>$7</td>
			    <td>$6</td>
			  </tr>
			  <tr>
			  	<th>Colored</th>
			    <td>$16</td>
			    <td>$14</td> 
			    <td>$11</td>
			    <td>$10</td>
			    <td>$9</td> 
			    <td>$8</td>
			    <td>$7</td>
			  </tr>
			</table>
			<p class="disclaimer">*Price per added location varies*</p>
	 	 </div>

		<h3>Samples</h3>
			<div class="center">
				<img src={dt1} alt="dt1" class="rotate90" />
				<img src={dt2} alt="dt2" />
				<img src={dt3} alt="dt3" />
				<img src={dt4} alt="dt4" class="rotate90" />
			</div>
			<div class="center">
				<img src={dt5} alt="dt5" class="rotate90" />
				<img src={dt6} alt="dt6" class="rotate90" />
				<img src={dt7} alt="dt7" />
				<img src={dt4} alt="dt4" class="rotate90" />
			</div>
			<ProductsFrom />
	</Styles>
)