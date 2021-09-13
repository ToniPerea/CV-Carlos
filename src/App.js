import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import FooterComponent from './components/Footer';
import Fotos from './components/Fotos';
import Shuffle from './components/Shuffle';

function App() {
  return (
    <>
    {/* <div class="vl"></div> */}
    <NavBarComponent/>
    <Fotos></Fotos>
    <Shuffle ></Shuffle>
    <FooterComponent/>
    </>
  );
}

export default App;
