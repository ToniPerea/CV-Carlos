import About from "../components/About";
import FooterComponent from "../components/Footer";
import NavBarComponent from "../components/NavBar";

const AboutPage = (props) =>{
    return(
        <>
        <NavBarComponent/>
        <About/>
        <FooterComponent/>
        </>
    );
}

export default AboutPage;