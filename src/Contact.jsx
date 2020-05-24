import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default function Contact () {
    return(
        <Container>
            <Card body>
                <Card.Title>Contact us</Card.Title>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>First Name (Optional)</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder="Ask us something" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}