import { Jumbotron, Container, Row, Col } from "reactstrap";
import NavBarComponent from "./NavBarComponent";

const Header = () => {
  return (
    <Jumbotron fluid className="m-0 p-1 header border-bottom">
      <Container fluid>
        <Row className="align-items-center">
        <Col className="text-left col-8 col-sm-8 col-md-7">
            <img src='assets/logo.png' alt="goodnightpapa logo"></img>
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
