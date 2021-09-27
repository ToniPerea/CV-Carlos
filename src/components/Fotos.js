import { Container, Image, Navbar, Row } from "react-bootstrap";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Fotos = (props) => {
    return (
      <>
        <AwesomeSlider>
          <div data-src={`/img/${props.name}`}/>
          <div data-src="/img/proyect1/Aquadella_Libreta.png"/>
          <div data-src="/img/proyect1/Aquadella_Poemario.png"/>
          <div data-src="/img/proyect1/Aquadella_Poster.png"/>
        </AwesomeSlider>
      </>
    );
}

export default Fotos;