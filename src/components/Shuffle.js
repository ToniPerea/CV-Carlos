import { Image, Container } from "react-bootstrap";

const Shuffle = (props) => {
  function shuffleProject() {
    alert("Vamos a un proyecto aleatorio");
  }

  return (
    <>
      <Container
        style={{ paddingTop: "150px", paddingBottom: "150px" }}
        onClick={shuffleProject}
      >
        <Image className="d-block m-auto" src="img/random.png" />
      </Container>
    </>
  );
}

export default Shuffle;