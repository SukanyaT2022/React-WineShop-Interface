import React from 'react';
import './landingPage.css';
import { FaRegStar, FaStar } from 'react-icons/fa';

function LandingPage() {
  return(
  
  <div className='wrapper'>
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
