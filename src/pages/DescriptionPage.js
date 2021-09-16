import Description from "../components/Description";
import FooterComponent from "../components/Footer";
import NavBarComponent from "../components/NavBar";
import Shuffle from "../components/Shuffle";

const DescriptionPage = (props) => {
    return(
        <>
        <NavBarComponent></NavBarComponent>
        <Description></Description>
        <Shuffle></Shuffle>
        <FooterComponent></FooterComponent>
        </>
    );
}

export default DescriptionPage;