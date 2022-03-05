import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
import NavBarComponent from "./NavBarComponent";

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <Row>
          <Col>
            <NavBarComponent />
          </Col>
          <Col className="text-left">
            <h5>Good Night Papa</h5>
          </Col>
          <Col>
            <Button>Log In</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Header;
