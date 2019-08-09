import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import store from './assets/1.jpg';
import pic1 from './assets/5.jpg';
import pic2 from './assets/2.jpg';
import pic3 from './assets/3.jpg';
import pic4 from './assets/4.jpg';
import pic5 from './assets/e7.jpg';
import pic6 from './assets/r1.jpg';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import icon5 from './assets/icon5.png';
import icon6 from './assets/icon6.png';
import icon7 from './assets/icon7.png';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`

	h2 {
		font-size: 3em;
		text-align: center;
		padding-top: 30px;
		padding-bottom: 30px;
	}

	.sample {
		border-radius: 50%;
		max-width: 50%;
		height: auto;
		padding: 10px 20px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.storeImg {
		border-radius: 20px;
		 max-width: 80%;
		 display: block;
		 margin-left: auto;
		 margin-right: auto;
		 padding: 10ox 10px 10px 10px;
		 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #f7c52f;
	}

	.icon {
		height: 40px;
		width: 40px;
		padding: 0px 5px 0px 0px;
	}

	.list {
		width: 50%;
		font-size: 2em;
		font-style: Georgia;
		font-style: italic;
		font-weight: bold;
		color: #474747;
		border: 5px solid #f7c52f;

		display: -webkit-flex; /* Safari */
		-webkit-align-items: center; /* Safari 7.0+ */
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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

	p {
		font-size: 1.5em;
	}

	.padHorizontal {
		padding: 60px 0px 60px 0px;
	}

	.disclaimer {
		font-style: oblique;
		text-align: center;
	}

`;

export const Home = () => (
	<Styles>
	  <div>
	   	<img src={store} alt="store" class="storeImg"/>

	   	<div class="padHorizontal"><Container>
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
		  	</Col>
		  	<Col>
			  	<p><b>Business Hours:</b></p>
			  	<p>Mon ~ Fri: 10:00 AM ~ 8:00 PM</p>
			  	<p>Sat: 10:00 AM ~ 5:00 PM</p>
			  	<p>Sun: Close</p>
		  	</Col>
		 </Row>
		</Container></div>

	    <h2>What We Do:</h2>
	    <div>
		    <Link to="/embroidery" class="list"><img src={icon1} class="icon" alt="icon1" />Embroidery</Link><br /> 
		    <Link to="/dtg" class="list"><img src={icon2} class="icon" alt="icon2" />Direct to Garment (DTG)</Link><br /> 
		    <Link to="/digitalPrinting" class="list"><img src={icon3} class="icon" alt="icon3" />Digital Printing (Full Color)</Link><br /> 
		    <Link to="/vinyl" class="list"><img src={icon4} class="icon" alt="icon4" />Vinyl Heat Press</Link><br /> 
		    <Link to="/screenPrinting" class="list"><img src={icon5} class="icon" alt="icon5" />Screen Printing</Link><br /> 
		    <Link to="/rip" class="list"><img src={icon6} class="icon" alt="icon6" />RIP Shirts</Link><br /> 
		    <Link to="/banner" class="list"><img src={icon7} class="icon" alt="icon7" />Banner / Yard Sign</Link><br /> 
	    </div>
	    
	    <h2 class="gallery">Come Visit Us!</h2>
	    
	    <div>
	    	<img src={pic1} alt="pic1" class="sample"/>
	    	<img src={pic6} alt="pic6" class="rotate90 sample" />
	    	<img src={pic3} alt="pic3" class="sample"/>
	    	<img src={pic4} alt="pic4" class="rotate90 sample"/>
	    	<img src={pic5} alt="pic5" class="sample"/>
	    	<img src={pic2} alt="pic2" class="sample"/>
	    </div>
	  </div>

	  <div class="disclaimer">
	  	<p>Icon made by <a href="https://www.flaticon.com/" target="_blank">Freepik</a> and <a href="https://www.flaticon.com/search?search-type=icons&word=Nikita+Golubev&license=&color=&stroke=&current_section=&author_id=&pack_id=&family_id=&style_id=&category_id=" target="_blank">Nikita Golubev</a> from <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a></p>
	  </div>
	</Styles>
)
