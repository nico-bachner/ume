import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Laurent from "../Laurent.jpg";
import Rolf from "../Rolf.jpg";
import Oleksiy from "../Oleksiy.jpg";

export default function Team () {
    return(
        <Container>
            <Card>
                <Card.Header>Our Team</Card.Header>
                <Card.Body>
                    <CardDeck>
                        <Card className="text-center">
                            <Card.Header>CEO</Card.Header>
                            <Card.Img variant="top" src={Laurent} />
                            <Card.Body>
                                <Card.Title>Laurent Denayer</Card.Title>
                                <Card.Text>
                                    Test text
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 20 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>COO</Card.Header>
                            <Card.Img variant="top" src={Rolf} />
                            <Card.Body>
                                <Card.Title>Rolf Bachner</Card.Title>
                                <Card.Text>
                                    Test text
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 days ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>CTO</Card.Header>
                            <Card.Img variant="top" src={Oleksiy} />
                            <Card.Body>
                                <Card.Title>Oleksiy Shostak</Card.Title>
                                <Card.Text>
                                    Test text
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 1 year ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Card.Body>
            </Card>
        </Container>
    );
}