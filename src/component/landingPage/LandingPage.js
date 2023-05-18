import React from 'react';
import './landingPage.css';
import { FaRegStar, FaStar } from 'react-icons/fa';

function LandingPage() {
  return(
  
  <div className='wrapper'>
{/* start welcome section */}
<div className='mainbox-welcome'>
    <div className='imageBox-welcome'>
      
<img src="https://images.unsplash.com/photo-1667227254248-b4169ead3c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmluZXlhcmRzJTIwaGFydmVzdCUyMGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt='farmerPiconTop'/>
    </div>
    <div className='rightBox-welcome'>
<h4>Welcome to wineShop.com</h4>
<h3>Support independent winemakers.<br/> Get better wine in return</h3>
  <p>With the support of 300,000 wine drinkers, we fund talented, independent winemakers up front. This way, they get to spend all their attention on making you the best wine possible.</p>

  <a><input type="button" value = "Get Started"/></a>
  
  
    </div>

</div>

{/* end welcome section */}


    <div className='section1-onlytext'>
<h5>BETTER WINE</h5>
<h3>HOW our wines stack up to traditional retail</h3>
    </div>

<div className='section1-controlLeftRight'>
    
<div className='leftBox'>
<div className='leftBoxText'>
<p>WineShop.com</p>
<h5 className='targetSizeH5'>AAAAAAAaAAA Valley</h5>
<p> AAAAAA Valley</p>
<p className='targetSizeSmall'>2 years in French Oak</p>

<div className='controlRatingSection'>
<p>Rating 4.0</p>
<div className='targetOnlyStar'>
<a href=''><FaStar/></a>
<a href=''><FaStar/></a>
<a href=''><FaStar/></a>
<a href=''><FaStar/></a>
<a href='' className='targetLaststar'><FaRegStar/></a>
</div>
</div>
 <p>$29.99</p>

</div>
<div className='leftBoxImage'>
    {/* //--./mean we are in public folder when put image*/}
<img src="./asset/image/wineBottle-BGremove.png"/>

</div>
</div>


<div className='rightBox'>
<div className='rightBoxImage'>
<img src="./asset/image/wineBottle-BGremove.png"/>
</div>

<div className='rightBoxText'>
<p>WineShop.com</p>
<h5 className='targetSizeH5'>AAAAAAAaAAA Valley</h5>
<p> AAAAAA Valley</p>
<p className='targetSizeSmall'>2 years in French Oak</p>

<div className='controlRatingSection'>
<p>Rating 4.0</p>
<div className='targetOnlyStar'>
<a href=''><FaStar/></a>
<a href=''><FaStar/></a>
<a href=''><FaStar/></a>
<a href=''><FaStar/></a>
<a href='' className='targetLaststar'><FaRegStar/></a>
</div>
</div>
 <p>$29.99</p>

</div>
</div>



</div>
    </div>
)};

export default LandingPage;
