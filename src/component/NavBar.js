import React from 'react';
import './NavBar.css';

import { FaSearch, FaWineBottle, FaWineGlassAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { SlBasket } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  const navigate = useNavigate();
  //useNavigation() is function of react
  //work as routing from one page to another page
  const headerRouting = (route) => {
    navigate(route);
  };

  return (
    <div className="mainNavBar">
      <div className="flashSale">Get 10% off your 6 + free shipping.</div>
      <div className="logo">
        <FaWineBottle className="logoIcon" />
        <h4 onClick={() => headerRouting('/')}> WineShop.Com</h4>
      </div>
      <div className="mainBelow">
        {/* lines below responsible to hold all page together in nav bar
        (card)(region)(discover ) need to match on app.js line 24-26 */}
        {/* <div className="navLink">
          <h3 onClick={() => headerRouting('/card')}>Varietal</h3>
          <h3 onClick={() => headerRouting('/region')}>Region</h3>
          <h3 onClick={() => headerRouting('/discover')}>Discover</h3>
          <h3 onClick={() => headerRouting('/gifts')}>Gifts</h3>
        </div> */}

        <Navbar collapseOnSelect expand="sm">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link onClick={() => headerRouting('/card')}>
                  Varietal
                </Nav.Link>
                <Nav.Link onClick={() => headerRouting('/region')}>
                  Region
                </Nav.Link>
                <Nav.Link onClick={() => headerRouting('/discover')}>
                  Discover
                </Nav.Link>
                <Nav.Link onClick={() => headerRouting('/gifts')}>
                  Gifts
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="searchBox">
          <div className="searchBoxSize">
            <input
              type="search"
              placeholder="wineShop.com"
              className="inputBoxNav"
            />
            <FaSearch className="searchIconNav" />
          </div>
          {/* //dropdown menu */}
          <div class="dropDown">
            <select className="dropdownSelect">
              <option>NY</option>
              <option>CT</option>
              <option>NJ</option>
              <option>FL</option>
            </select>
          </div>
        </div>

        <div className="basket">
          <a href="">
            <FaWineGlassAlt />
          </a>
          <a href="">
            <BsFillPersonFill />
          </a>
          <a href="">
            <SlBasket />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
