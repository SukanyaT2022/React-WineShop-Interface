import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import HeaderBox from './component/Header/Header';
import Grid from './component/GridBox/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="mainBox">
      <NavBar />

      <HeaderBox />
      <Grid />
    </div>
  );
}

export default App;
