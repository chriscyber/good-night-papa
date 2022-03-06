import { Container, Row, Col } from 'reactstrap';

const HeroComponent = () => {
    return (
        <Container fluid className="herocontainer">
            <Row>
                <Col className="col-8">
                <img className="img-fluid" src="assets/bird_on_moon.png" alt="bird on the moon" />
                </Col>
                <Col className="mt-5 mb-3 text-left">
                    <h1 className="mt-5">Mindfulness activities for kids</h1>
                    <p>Cupcake ipsum dolor sit amet. Pastry ice cream lollipop carrot cake lemon drops danish. Cake oat cake tiramisu icing gummies lemon drops cheesecake.
                    </p>
                </Col>
            </Row>
        </Container>
      );
}
 
export default HeroComponent;