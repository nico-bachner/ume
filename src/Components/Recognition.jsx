import React from 'react';
import { Container, Card, CardColumns, ListGroup, ListGroupItem } from 'react-bootstrap'
import InFinance_2017 from "../InFinance_2017.png";
import InFinance_2018 from "../InFinance_2018.png";
import RegTech100 from "../RegTech100.png";
import FintechEurope from "../FintechEurope.png";

const RegTech100Style = {
    backgroundColor: "#90B0D0"
};

export default function Recognition () {
    return(
        <Container>
            <h1>Our Recognition</h1>
            <h2>ume awards</h2>
            <CardColumns>
                <Card>
                    <Card.Img src={ InFinance_2017 } />
                </Card>
                <Card body style={ RegTech100Style }>
                    <Card.Img src={ RegTech100 } />
                </Card>
                <Card>
                    <Card.Img src={ InFinance_2018 } />
                </Card>
            </CardColumns>

            <h2>ume in the press</h2>
            <CardColumns>
                <Card>
                    <Card.Img src={ InFinance_2017 } />
                    <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img style={ RegTech100Style } src={ RegTech100 } />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src={ InFinance_2018 } />
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    );
}