import './Page2Region.css';
import { useState, React } from 'react';

function Page2Region() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    // let i = count;
    setCount(count++);
  };

  return (
    <div>
{/* begin extrabox */}
<div className="main-extraBox" >
<div className='extraBox-TextLeft'>
  <h3>Filter the World's Largest Wine Store</h3>
</div>
<div className='extraBox-picRightIMG'>

</div>
</div>
{/* end extra box2 */}


      <div className="bigBoxPage2 my-5">
        <div className="picSide-left">
          <img src="https://images.pexels.com/photos/12859328/pexels-photo-12859328.jpeg?auto=compress&cs=tinysrgb&w=800" />

          <div className="textNext2Pic">
            <h4>Red wine from Tuscany</h4>
            <p>Region in central Italy</p>
          </div>
        </div>

        <div className="priceSide-right">
          <div className="priceDiscount">
            {/* del is cross for discount cross line for delete */}
            <p>
              <del>$45</del>
            </p>
            <p>
              $41<sup>99</sup>
            </p>
          </div>
          <div className="cart">
            <input
              type="number"
              value={count}
              onChange={() => setCount(count++)}
            />
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
              <del>$35</del>
            </p>
            <p>
              $30<sup>99</sup>
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
          <img src="https://images.unsplash.com/photo-1543418219-44e30b057fea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmluZXlhcmQlMjB3aW5lJTIwZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />

          <div className="textNext2Pic">
            <h4> Louis Roederer (Champagne) from France</h4>
            <p>Region in Reims, France</p>
          </div>
        </div>

        <div className="priceSide-right">
          <div className="priceDiscount">
            {/* del is cross for discount cross line for delete */}
            <p>
              <del>$55</del>
            </p>
            <p>
              $39<sup>99</sup>
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
          <img src="https://images.unsplash.com/photo-1464036388609-747537735eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmluZXlhcmQlMjB3aW5lJTIwY2FsaWZvcm5pYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />

          <div className="textNext2Pic">
            <h4>Sonoma Coast Pinot Noir</h4>
            <p> Sonoma County, California</p>
          </div>
        </div>

        <div className="priceSide-right">
          <div className="priceDiscount">
            {/* del is cross for discount cross line for delete */}
            <p>
              <del>$44</del>
            </p>
            <p>
              $40<sup>99</sup>
            </p>
          </div>
          <div className="cart">
            <input type="number" value="1" />
            <input type="button" value="Add to Cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2Region;
