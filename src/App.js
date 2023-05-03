import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import HeaderBox from './component/Header/Header';
import Grid from './component/GridBox/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Page2Region from './component/Page2Region/Page2Region';

function App() {
  return (
    <Router>
      <div className="mainBox">
        <NavBar />

        <HeaderBox />
        {/* <Grid />
        <Page2Region /> */}

        <Routes>
          <Route exact path="/card" element={<Grid />}></Route>
          <Route exact path="/region" element={<Page2Region />}></Route>
          {/* <Route exact path="/discover" element={}></Route> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
