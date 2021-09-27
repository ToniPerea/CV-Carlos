import Fotos from "../components/Fotos";
import NavBarComponent from "../components/NavBar";
import Shuffle from "../components/Shuffle";
import FooterComponent from "../components/Footer";

const Home = (props) =>{
    return (
      <>
        <NavBarComponent/>
        <Fotos name="proyect1/Aquadella_Especimen.png"></Fotos>
        <Shuffle></Shuffle>
        <FooterComponent />
      </>
    );
}


export default Home;