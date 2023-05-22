import React from 'react';
import './landingPage.css';
import { FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa';

function LandingPage() {
  return (
    <div className="wrapper">
      {/* start welcome section */}
      <div className="mainbox-welcome">
        <div className="imageBox-welcome">
          <img
            src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB3aW55YXJkJTIwd2luZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="farmerPiconTop"
          />
        </div>
        <div className="rightBox-welcome">
          <h4>Welcome to wineShop.com</h4>
          <h3>Support independent winemakers.</h3>
          <p>
            With the support of 400,000 wine drinkers, we fund talented,
            independent winemakers up front. This way, they get to spend all
            their attention on making you the best wine possible.
          </p>

          <a>
            <input
              type="button"
              value="Get Started"
              className="button-welcome"
            />
          </a>
        </div>
      </div>

      {/* end welcome section */}

      <div className="section1-onlytext">
        <h5>BETTER WINE</h5>
        <h3>HOW our wines stack up to traditional retail</h3>
      </div>

      <div className="section1-controlLeftRight">
        <div className="leftBox">
          <div className="leftBoxText">
            <p>WineShop.com</p>
            <h5 className="targetSizeH5">AAAAAAAaAAA Valley</h5>
            <p> AAAAAA Valley</p>
            <p className="targetSizeSmall">2 years in French Oak</p>

            <div className="controlRatingSection">
              <p>Rating 4.0</p>
              <div className="targetOnlyStar">
                <a href="">
                  <FaStar />
                </a>
                <a href="">
                  <FaStar />
                </a>
                <a href="">
                  <FaStar />
                </a>
                <a href="">
                  <FaStar />
                </a>
                <a href="" className="targetLaststar">
                  <FaRegStar />
                </a>
              </div>
            </div>
            <p>$29.99</p>
          </div>
          <div className="leftBoxImage">
            {/* //--./mean we are in public folder when put image*/}
            <img src="./asset/image/wineBottle-BGremove.png" />
          </div>
        </div>

        <div className="rightBox">
          <div className="rightBoxImage">
            <img src="./asset/image/wineBottle-BGremove.png" />
          </div>

          <div className="rightBoxText">
            <p>WineShop.com</p>
            <h5 className="targetSizeH5">AAAAAAAaAAA Valley</h5>
            <p> AAAAAA Valley</p>
            <p className="targetSizeSmall">2 years in French Oak</p>

            <div className="controlRatingSection">
              <p>Rating 4.0</p>
              <div className="targetOnlyStar">
                <a href="">
                  <FaStar />
                </a>
                <a href="">
                  <FaStar />
                </a>
                <a href="">
                  <FaStar />
                </a>
                <a href="">
                  <FaStar />
                </a>
                <a href="" className="targetLaststar">
                  <FaRegStar />
                </a>
              </div>
            </div>
            <p>$29.99</p>
          </div>
        </div>
      </div>

      {/* start---what people say section */}
      <div className="mainBox-peopleSaySection">
        <div className="heading-peopleSaySection">
          <h5>ON THE GRAPE VINE</h5>
          <h4>What people like about WineShop.com</h4>
        </div>

     
        <div className="mainGridBox-peopleSaySection">

              {/* start card 1*/}
          <div className="card-peopleSay">
            <img src="https://images.unsplash.com/photo-1553682544-4ccf2778c9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=800&q=60" />
        <span><FaQuoteLeft/></span>
     
            {/* &ldquo; means " " or quotationon the box */}

            <p>
              The customer service was unbelievably awesome, we were so
              impressed!”
            </p>
            <small>Cooper K</small>
          </div>
 {/* end card */}

   {/* start card 2*/}
   <div className="card-peopleSay">
            <img src="https://images.unsplash.com/photo-1553682544-4ccf2778c9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=800&q=60" />
            <span><FaQuoteLeft/></span>
            {/* &ldquo; means " " on the box */}

            <p>
              The customer service was unbelievably awesome, we were so
              impressed!”
            </p>
            <small>Cooper K</small>
          </div>
 {/* end card */}

   {/* start card 3*/}
   <div className="card-peopleSay">
            <img src="https://images.unsplash.com/photo-1553682544-4ccf2778c9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=800&q=60" />
            <span><FaQuoteLeft/></span>
            {/* &ldquo; means " " on the box */}

            <p>
              The customer service was unbelievably awesome, we were so
              impressed!”
            </p>
            <small>Cooper K</small>
          </div>
 {/* end card */}
  {/* start card 4*/}
  <div className="card-peopleSay">
            <img src="https://images.unsplash.com/photo-1553682544-4ccf2778c9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=800&q=60" />
            <span><FaQuoteLeft/></span>
            {/* &ldquo; means " " on the box */}

            <p>
              The customer service was unbelievably awesome, we were so
              impressed!”
            </p>
            <small>Cooper K</small>
          </div>
 {/* end card */}







        </div>
  

      </div>
      {/* end--what people say section */}
    </div>
  );
}

export default LandingPage;
