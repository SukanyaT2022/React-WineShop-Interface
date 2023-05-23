import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import HeaderBox from './component/Header/Header';
import Grid from './component/GridBox/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Page2Region from './component/Page2Region/Page2Region';
import Page3Discover from './component/Page3Discover/Page3Discover';
import Page4Gift from './component/Page4Gift/Page4Gift';
import LandingPage from './component/landingPage/LandingPage';
import ContactUs from './component/footer/ContactUs';

function App() {
  return (
    <Router>
      <div className="mainBox">
        <NavBar />

        <HeaderBox />
        {/* <Grid />
        <Page2Region /> */}
        {/* <Page3Discover/> */}
        {/* whatever that in the middle on the body put on route below /beside navbar header and footer */}
        <Routes>
          <Route exact path="" element={<LandingPage />}></Route>
          <Route exact path="/card" element={<Grid />}></Route>
          <Route exact path="/region" element={<Page2Region />}></Route>
          <Route exact path="/discover" element={<Page3Discover />}></Route>
          <Route exact path="/gifts" element={<Page4Gift />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
