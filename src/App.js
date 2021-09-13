import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import FooterComponent from './components/Footer';
import Fotos from './components/Fotos';

function App() {
  return (
    <>
    <NavBarComponent/>
    <Fotos></Fotos>
    <FooterComponent/>
    </>
  );
}

export default App;
