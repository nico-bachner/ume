import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import InFinance_2017 from "../InFinance_2017.png";
import InFinance_2018 from "../InFinance_2018.png";
import RegTech100 from "../RegTech100.png";

export default function Recognition () {
    return(
        <Container>
            <Card>
                <Card.Header>Our Awards</Card.Header>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={InFinance_2017} fluid />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={InFinance_2018} fluid />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={RegTech100} fluid />
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}