import React from 'react'
import styled from 'styled-components';
import b1 from './assets/b1.png';
import b2 from './assets/b2.png';
import b3 from './assets/b3.jpg';


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

	a {
		font-size: 1.5em;
	}
`;

export const Banner = () => (
	<Styles>
	 	<div>
		    <h2>Banner, Yard Sign & Decal</h2>
		    <p>We do more!!!  We provide the same good quality on your signs and banners!!!</p>
		  	<h3>Banner (Width: 2 feet)</h3>
		  	<table>
			  <tr>
			    <th>4 feet</th>
			    <th>6 feet</th> 			  
			  </tr>
			  <tr>
			    <td>$50</td>
			    <td>$70</td> 			    
			  </tr>
			</table>

			<h3>Sticker</h3>
			<table>
			  <tr>
			    <th>Quantity</th>
			    <th>30 ea</th> 
			    <th>50 ea</th>
			    <th>100 ea</th>
			    <th>250 ea</th>
			    <th>500 ea</th> 
			    <th>1000 ea</th>
			    <th>2000 ea</th>
			  </tr>
			  <tr>
			    <th>2 x 2 in</th>
			    <td>$25</td> 
			    <td>$35</td>
			    <td>$45</td>
			    <td>$65</td>
			    <td>$95</td> 
			    <td>$120</td>
			    <td>$235</td>
			  </tr>
			  <tr>
			    <th>2.5 x 2.5 in</th>
			    <td>$35</td> 
			    <td>$45</td>
			    <td>$65</td>
			    <td>$95</td>
			    <td>$140</td> 
			    <td>$180</td>
			    <td>$270</td>
			  </tr>
			  <tr>
			    <th>3 x 3 in</th>
			    <td>$45</td> 
			    <td>$60</td>
			    <td>$75</td>
			    <td>$130</td>
			    <td>$195</td> 
			    <td>$250</td>
			    <td>$375</td>
			  </tr>
			  <tr>
			    <th>3.5 x 3.5 in</th>
			    <td>$55</td> 
			    <td>$70</td>
			    <td>$80</td>
			    <td>$170</td>
			    <td>$260</td> 
			    <td>$330</td>
			    <td>$500</td>
			  </tr>
			  <tr>
			    <th>4 x 4 in</th>
			    <td>$65</td> 
			    <td>$80</td>
			    <td>$100</td>
			    <td>$220</td>
			    <td>$335</td> 
			    <td>$425</td>
			    <td>$640</td>
			  </tr>
			</table>

			<h3>Full Color Yard Sign or Poster (18 x 24 in)</h3>
			<table>
			  <tr>
			    <th>Quantity</th>
			    <th>1 ea</th> 
			    <th>2 ea</th>
			    <th>3 ea</th>
			    <th>4 ea</th>
			    <th>5 ea</th> 
			    <th>10 ea</th>
			    <th>20 ea</th>
			    <th>30 ea</th>
			    <th>50 ea</th> 
			    <th>100 ea</th>
			  </tr>
			  <tr>
			    <th>1 Side</th>
			    <td>$29</td> 
			    <td>$48</td>
			    <td>$60</td>
			    <td>$76</td>
			    <td>$90</td> 
			    <td>$170</td>
			    <td>$240</td>
			    <td>$270</td>
			    <td>$375</td> 
			    <td>$600</td>
			  </tr>
			   <tr>
			    <th>2 Sides</th>
			    <td>$45</td> 
			    <td>$72</td>
			    <td>$81</td>
			    <td>$96</td>
			    <td>$115</td> 
			    <td>$210</td>
			    <td>$320</td>
			    <td>$390</td>
			    <td>$575</td> 
			    <td>$1000</td>
			  </tr>
			</table>

			<h3>Samples</h3>
			<div>
				<img src={b1} alt="b1" />
				<img src={b2} alt="b2" />
				<img src={b3} alt="b3" />
			</div>
		 </div>
	</Styles>

)