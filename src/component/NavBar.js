import React from 'react';
import './NavBar.css';
import { FaSearch, FaWineBottle, FaWineGlassAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { SlBasket } from 'react-icons/sl';

const NavBar = () => {
  return (
    <div className="mainNavBar">
      <div className="flashSale">Get 10% off your 6 + free shipping.</div>
      <div className="logo">
        <FaWineBottle className="logoIcon" />
        <h4>WineShop.Com</h4>
      </div>
      <div className="mainBelow">
        <div className="navLink">
          <h3>Varietal</h3>
          <h3>Region</h3>
          <h3>Discover</h3>
          <h3>Gifts</h3>
        </div>

        <div className="searchBox">
        <div className='searchBoxSize'>
          <input type="search" placeholder ="wineShop.com" className='inputBoxNav'/>
          <FaSearch className='searchIconNav'/>
          </div> 
{/* //dropdown menu */}
        <div class='dropDown'>
          <select className='dropdownSelect'>
         <option>NY</option>
         <option>CT</option>
         <option>NJ</option>
         <option>FL</option>

          </select>
         </div>

       </div>


        <div className="basket">
          <a href=""><FaWineGlassAlt /></a>
          < a href=""><BsFillPersonFill /></a>
          < a href=""><SlBasket /></a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
