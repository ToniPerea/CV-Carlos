import { Container, Image, Navbar, Row } from "react-bootstrap";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Media from 'react-media';


const images = [
  {src:"/img/proyect1/Aquadella_Especimen.png"},
  {src:"/img/proyect1/Aquadella_Especimen.png"},
];


const Fotos = (props) => {
  
    return (
      <>
        {/* <AwesomeSlider>
          <div data-src={`/img/${props.name}`}/>
          <div data-src="/img/proyect1/Aquadella_Libreta.png"/>
          <div data-src="/img/proyect1/Aquadella_Poemario.png"/>
          <div data-src="/img/proyect1/Aquadella_Poster.png"/>
        </AwesomeSlider>  */}

        {/* EL PRIMER MATCH ES PARA CUANDO ES MENOR A 780(MOVIL) Y EL SEGUNDO CUANDO ES MAYOR(ORDENADOR) */}
        <Media query={{ maxWidth: 780 }}>
          {(matches) =>
            matches ? (
              <Carousel
                className="framed-carousel"
                images={images}
                index={2}
                isMaximized={false}
                hasSizeButton={false}
                hasMediaButton={false}
                hasIndexBoard={false}
                hasLeftButton={false}
                hasRightButton={false}
                hasCaptionsAtMax="top"
                hasDotButtonsAtMax="bottom"
                hasThumbnails={false}
                hasThumbnailsAtMax={true}
                thumbnailWidth={"15%"}
                thumbnailHeight={"15%"}
                // shouldMaximizeOnClick={true}
                // shouldMinimizeOnClick={true}
                canAutoPlay={true}
                isAutoPlaying={true}
              />
            ) : (
              <Carousel
                className="framed-carousel"
                images={images}
                index={2}
                isMaximized={false}
                hasSizeButton={false}
                hasMediaButton={false}
                hasIndexBoard={false}
                hasLeftButton={false}
                hasRightButton={false}
                hasCaptionsAtMax="top"
                hasDotButtonsAtMax="bottom"
                hasThumbnails={false}
                hasThumbnailsAtMax={true}
                thumbnailWidth={"15%"}
                thumbnailHeight={"15%"}
                // shouldMaximizeOnClick={true}
                // shouldMinimizeOnClick={true}
                canAutoPlay={true}
                isAutoPlaying={true}
                style={{ height: "85vh" }}
              />
            )
          }
        </Media>
        {/* <Carousel
          className="framed-carousel"
          images={images}
          index={2}
          isMaximized={false}
          hasSizeButton={false}
          hasMediaButton={false}
          hasIndexBoard={false}
          hasLeftButton={false}
          hasRightButton={false}
          hasCaptionsAtMax="top"
          hasDotButtonsAtMax="bottom"
          hasThumbnails={false}
          hasThumbnailsAtMax={true}
          thumbnailWidth={"15%"}
          thumbnailHeight={"15%"}
          // shouldMaximizeOnClick={true}
          // shouldMinimizeOnClick={true}
          canAutoPlay={true}
          isAutoPlaying={true}
          style={{ height: "85vh" }}
        /> */}
      </>
    );
}

export default Fotos;