import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  FaFacebookSquare,
  FaTwitter,
  FaTiktok,
  FaPinterestSquare,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const headerRouting = (route) => {
    navigate(route);
  };

  return (
    <div>
      <Container fluid className="bigBox">
        <Row>
          <Col className="controlSmallBox">
            <h4>Customer Care</h4>
            <p onClick={() => headerRouting('/contact-us')}>Contact Us</p>
            <p>Track an Order</p>
            <p>Corporate Gifts</p>
          </Col>

          {/* //second row  */}
          <Col className="controlSmallBox">
            <h4>About WineShop.com</h4>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Investors</p>
          </Col>

          {/* //third row  */}

          <Col className="controlSmallBox">
            <h4>Join Our Email List</h4>
            <div>
              <form>
                <input type="text" />
                <input type="submit" />
              </form>
            </div>
            <div className="socialMedia">
              <a href="">
                <FaFacebookSquare />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaTiktok />
              </a>
              <a href="">
                <FaPinterestSquare />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
