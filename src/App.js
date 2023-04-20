import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import HeaderBox from './component/Header/Header';
import Grid from './component/GridBox/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="mainBox">
        <NavBar />

        <HeaderBox />
        <Grid />
        <Footer />
      </div>

      <Routes>
        <Route exact path="/footer" element={<Footer />}></Route>
        <Route exact path="/card" element={<Grid />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
