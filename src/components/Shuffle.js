import { Image, Container } from "react-bootstrap";
import Media from 'react-media';

const Shuffle = (props) => {
  function shuffleProject() {
    alert("Vamos a un proyecto aleatorio");
  }

  return (
    <>
      <Media query={{ maxWidth: 780 }}>
        {(matches) =>
          matches ? (
            <Container
              style={{ paddingTop: "80px", paddingBottom: "80px" }}
              onClick={shuffleProject}
            >
              <Image className="d-block m-auto" src="img/random.png" style={{width:"50px"}}/>
            </Container>
          ) : (
            <Container
              style={{ paddingTop: "150px", paddingBottom: "150px" }}
              onClick={shuffleProject}
            >
              <Image className="d-block m-auto" src="img/random.png" />
            </Container>
          )
        }
      </Media>
    </>
  );
}

export default Shuffle;