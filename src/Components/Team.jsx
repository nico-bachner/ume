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
                                    Laurent left EY in 2017 to found ume. <br /> He was the EY Global Fund Distribution Leader and lead the partner, risk and and regulatory advisory services.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Founded ume in 2017</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.linkedin.com/in/larent-denayer">LinkedIn</Card.Link>
                                <Card.Link href="#">Twitter</Card.Link>
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
                                    Rolf joined from BNY Mellon where he was global head of digital product management for the bank’s asset servicing division.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Joined ume in 2019</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.linkedin.com/in/rolf-bachner">LinkedIn</Card.Link>
                                <Card.Link href="#">Twitter</Card.Link>
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
                                    Oleksiy is an experienced software developer and architect with more than 20 years of experience in wide range of technologies and industries.​
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>With ume since 2017</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.linkedin.com/in/oleksiy-shostak">LinkedIn</Card.Link>
                                <Card.Link href="#">Twitter</Card.Link>
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