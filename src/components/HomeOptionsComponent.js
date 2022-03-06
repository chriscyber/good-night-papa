import HomeComponentCards from '../components/shared/HomeComponentCards'; 
import {Card, CardBody, CardTitle, CardText, Col, Row, Container} from 'reactstrap';

const HomeOptionsComponent = () => {
    return (
        <Container fluid className="homecarddeck">
            <Row>
            {HomeComponentCards.map((element) => {
                return (
                <Col key={element.id}>
                    <Card className="mt-3 mb-3">
                    <CardBody>
                    <CardTitle tag="h5">{element.title}</CardTitle>
                    </CardBody>
                    <img width="100%" src={element.src} alt={element.alt} />
                    <CardBody>
                    <CardText>{element.about}</CardText>
                    </CardBody>
                </Card>
              </Col>
                )
            })}
            </Row>
        </Container>
      );
}
 
export default HomeOptionsComponent;