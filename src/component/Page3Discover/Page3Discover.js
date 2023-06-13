import React from 'react';
import './Page3Discover.css';

function Page3Discover() {
  return (
    <>
    {/* begin extrabox */}
<div className="main-extraBox" >
<div className='extraBox-TextLeft'>
  <h3>Wine under $25</h3>
</div>
<div className='extraBox-picRightDiscover'>

</div>
</div>
{/* end extra box2 */}

    <div id="discover">
      {/* <h2 className="moveH2">Wine under $25</h2> */}
      <div className="bigBoxPage2 my-5">
        <div className="picSide-left">
          <img src="https://images.pexels.com/photos/12859328/pexels-photo-12859328.jpeg?auto=compress&cs=tinysrgb&w=800" />

          <div className="textNext2Pic">
            <h4>Red wine from Tuscany discover</h4>
            <p>Region in central Italy</p>
          </div>
        </div>

        <div className="priceSide-right">
          <div className="priceDiscount">
            {/* del is cross for discount cross line for delete */}

            <p>
              $20<sup>99</sup>
            </p>
          </div>
          <div className="cart">
            <input type="number" value="1" />
            <input type="button" value="Add to Cart" />
          </div>
        </div>
      </div>

      {/* box2 */}

      <div className="bigBoxPage2">
        <div className="picSide-left">
          <img src="https://images.unsplash.com/photo-1600492847790-80d2daa56c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmluZXlhcmQlMjB3aW5lJTIwYXVzdHJhbGlhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />

          <div className="textNext2Pic">
            <h4>Penfolds from Australia</h4>
            <p>Region in Western Australia</p>
          </div>
        </div>

        <div className="priceSide-right">
          <div className="priceDiscount">
            {/* del is cross for discount cross line for delete */}

            <p>
              $15<sup>99</sup>
            </p>
          </div>
          <div className="cart">
            <input type="number" value="1" />
            <input type="button" value="Add to Cart" />
          </div>
        </div>
      </div>

      {/* box3 */}

      <div className="bigBoxPage2">
        <div className="picSide-left">
          <img src="https://images.unsplash.com/photo-1600492847790-80d2daa56c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmluZXlhcmQlMjB3aW5lJTIwYXVzdHJhbGlhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />

          <div className="textNext2Pic">
            <h4>Penfolds from Australia</h4>
            <p>Region in Western Australia</p>
          </div>
        </div>

        <div className="priceSide-right">
          <div className="priceDiscount">
            {/* del is cross for discount cross line for delete */}

            <p>
              $12<sup>99</sup>
            </p>
          </div>
          <div className="cart">
            <input type="number" value="1" />
            <input type="button" value="Add to Cart" />
          </div>
        </div>
      </div>

      {/* box4 */}

      <div className="bigBoxPage2">
        <div className="picSide-left">
          <img src="https://images.unsplash.com/photo-1600492847790-80d2daa56c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmluZXlhcmQlMjB3aW5lJTIwYXVzdHJhbGlhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />

          <div className="textNext2Pic">
            <h4>Penfolds from Australia</h4>
            <p>Region in Western Australia</p>
          </div>
        </div>

        <div className="priceSide-right">
          <div className="priceDiscount">
            {/* del is cross for discount cross line for delete */}

            <p>
              $18<sup>99</sup>
            </p>
          </div>
          <div className="cart">
            <input type="number" value="1" />
            <input type="button" value="Add to Cart" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Page3Discover;
