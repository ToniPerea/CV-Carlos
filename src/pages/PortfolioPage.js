import Portfolio from "../components/Portfolio";
import NavBarComponent from "../components/NavBar";
import Shuffle from "../components/Shuffle";
import FooterComponent from "../components/Footer";

const PortfolioPage = (props) =>{
    return(
        <>
        <NavBarComponent/>
        <Portfolio/>
        <FooterComponent></FooterComponent>
        </>
    );
}


export default PortfolioPage;