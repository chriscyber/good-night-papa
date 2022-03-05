import HomeComponentCards from '../components/shared/HomeComponentCards'; 
import {Card, CardBody, CardTitle, CardText, Col, Row, Container} from 'reactstrap';

const HomeOptionsComponent = () => {
    return (
        <Container fluid>
            <Row>

            {HomeComponentCards.map((element) => {
                return (
                <Col>
                    <Card>
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