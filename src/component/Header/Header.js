import './Header.css';
import { FaWineGlassAlt } from 'react-icons/fa';
import { MdWineBar } from 'react-icons/Md';

function Header() {
  return (
    <div>
      <div className='mainBigHero'>
      <div className='text'>
        <h3>All in one place</h3>
        <hr className='line'></hr>
        <p>This is wineShop.com country</p>
      </div>
   {/* button */}

      <div className='main-buttonIcon'>

<a href=""><div className="smallButton">
  <div className='controlIconRed'><FaWineGlassAlt/></div>
  <h5>Red</h5>
</div></a>


<a href=""><div className="smallButton">
  <div className='controlIconWhite'><MdWineBar/></div>
  <h5>White</h5>
</div></a>


<a href=""><div className="smallButton">
  <div className='controlIconSpark'><FaWineGlassAlt/></div>
  <h5>Sparkling</h5>
</div></a>


<a href=""><div className="smallButton">
  <div className='controlIconRose'><FaWineGlassAlt/></div>
  <h5>Rose</h5>
</div></a>


<a href=""><div className="smallButton">
  <div className='controlIconGift'><FaWineGlassAlt/></div>
  <h5>Gifts</h5>
</div></a>


      </div>
      </div>
    </div>
  );
}

export default Header;
