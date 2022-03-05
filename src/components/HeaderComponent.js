import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
import NavBarComponent from "./NavBarComponent";

const Header = () => {
  return (
    <Jumbotron fluid className="m-0 p-1">
      <Container fluid>
        <Row className="align-items-center">
        <Col className="text-left">
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
