import './Header.css';
import { FaWineGlassAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWineGlass,
  faWineGlassEmpty,
  faChampagneGlasses,
  faGift,
} from '@fortawesome/free-solid-svg-icons';
// import { MdWineBar } from 'react-icons/Md';

function Header() {
  return (
    <div>
      <div className="mainBigHero">
        <div className="text">
          <h3>All in one place</h3>
          <hr className="line"></hr>
          {/* <p>This is wineShop.com country</p> */}
        </div>
        {/* button */}

        <div className="main-buttonIcon">
          <a href="">
            <div className="smallButton">
              <div className="controlIconRed">
                {/* <FaWineGlassAlt /> */}
                <FontAwesomeIcon icon={faWineGlass} />
              </div>
              <h5>Red</h5>
            </div>
          </a>

          <a href="">
            <div className="smallButton">
              <div className="controlIconWhite">
                <FontAwesomeIcon icon={faWineGlassEmpty} />
              </div>
              <h5>White</h5>
            </div>
          </a>

          <a href="">
            <div className="smallButton">
              <div className="controlIconSpark">
                <FontAwesomeIcon icon={faChampagneGlasses} />
              </div>
              <h5>Sparkling</h5>
            </div>
          </a>

          <a href="">
            <div className="smallButton">
              <div className="controlIconRose">
                <FaWineGlassAlt />
              </div>
              <h5>Rose</h5>
            </div>
          </a>

          <a href="">
            <div className="smallButton">
              <div className="controlIconGift">
                <FontAwesomeIcon icon={faGift} />
              </div>
              <h5>Gifts</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

// for slider bigHero

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slider-smallBox");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
