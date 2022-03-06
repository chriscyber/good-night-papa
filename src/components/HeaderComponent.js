import { Jumbotron, Container, Row, Col } from "reactstrap";
import NavBarComponent from "./NavBarComponent";

const Header = () => {
  return (
    <Jumbotron fluid className="m-0 p-1 header border-bottom">
      <Container fluid>
        <Row className="align-items-center">
        <Col className="text-left col-12 col-sm-7 col-md-7 col-lg-8">
            <img src='assets/logo.png' alt="goodnightpapa logo"></img>
        </Col>
        <Col className="col-12 col-md-5 col-lg-4">
            <NavBarComponent />
        </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Header;
