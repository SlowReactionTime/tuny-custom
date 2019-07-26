import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pic1 from './assets/1.jpg';
import pic2 from './assets/2.jpg';
import pic3 from './assets/3.jpg';
import pic4 from './assets/4.jpg';
import pic5 from './assets/e7.jpg';
import pic6 from './assets/r1.jpg';
import embroidery from './assets/embroidery.jpg';


const Styles = styled.div`
	h2 {
		text-align: center;
		padding-bottom: 30px;
	}
	.gallery {
		color: #f7c52f;
		padding: 60px 0px 30px 0px;
	}
	img {
		border-radius: 50%;
		max-width: 50%;
		height: auto;
		padding: 10px 20px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.list {
		width: 50%;
		font-size: 2em;
		font-style: Georgia;
		font-style: italic;
		color: black;
		border: 5px solid #f7c52f;

		display: -webkit-flex; /* Safari */
		-webkit-align-items: center; /* Safari 7.0+ */
		display: flex;
		align-items: center;

		&:hover {
      		-webkit-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
   		 -moz-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  	 	 -o-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
   		 box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
   		 }
	}

	.rotate90 {
	    -webkit-transform: rotate(90deg);
	    -moz-transform: rotate(90deg);
	    -o-transform: rotate(90deg);
	    -ms-transform: rotate(90deg);
	    transform: rotate(90deg);
	}
`;

export const Home = () => (
	<Styles>
	  <div>
	    <h2>What We Do:</h2>
	    <div class="center">
		    <Link to="/embroidery" class="list">Embroidery</Link><br /> 
		    <Link to="/dtg" class="list">Direct to Garment (DTG)</Link><br /> 
		    <Link to="/digitalPrinting" class="list">Digital Printing (Full Color)</Link><br /> 
		    <Link to="/vinyl" class="list">Vinyl Heat Press</Link><br /> 
		    <Link to="/screenPrinting" class="list">Screen Printing</Link><br /> 
		    <Link to="/rip" class="list">RIP Shirts</Link><br /> 
		    <Link to="/banner" class="list">Banner / Yard Sign </Link><br /> 
	    </div>
	    
	    <h2 class="gallery">Come Visit Us!</h2>
	    <p>This is a test</p>
	    <div>
	    	<img src={pic1} alt="pic1" />
	    	<img src={pic6} alt="pic6" class="rotate90" />
	    	<img src={pic3} alt="pic3" />
	    	<img src={pic4} alt="pic4" class="rotate90"/>
	    	<img src={pic5} alt="pic5" />
	    	<img src={pic2} alt="pic2" />
	    </div>
	  </div>
	</Styles>
)
