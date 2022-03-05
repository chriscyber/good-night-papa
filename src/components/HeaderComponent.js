import { Jumbotron, Container, Row, Col } from "reactstrap";
import NavBarComponent from "./NavBarComponent";

const Header = () => {
  return (
    <Jumbotron fluid className="m-0 p-1 header border-bottom">
      <Container fluid>
        <Row className="align-items-center">
        <Col className="text-left col-8 col-sm-8 col-md-7">
            <h5>Good Night Papa</h5>
        </Col>
        <Col>
            <NavBarComponent />
        </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Header;
