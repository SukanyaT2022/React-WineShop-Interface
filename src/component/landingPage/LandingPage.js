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
<h5>AAAAAAAaAAA Valley</h5>
<p> AAAAAA Valley</p>
<p>2 years in French Oak</p>

<div className='controlRatingSection'>
<p>Rating 4.0</p>
<div className='targetOnlyStar'>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaRegStar/>
</div>
 <p>$29.99</p>
</div>

</div>
<div className='leftBoxImage'>
<img src="/Users/tiparpron/Desktop/ReactProject/Apr3-interface/my-app/src/asset/image/wineBottle-BGremove.png"/>
</div>
</div>



<div className='rightBox'>
<div className='rightBoxImage'>

</div>

<div className='rightBoxText'>

</div>
</div>



</div>
    </div>
)};

export default LandingPage;
