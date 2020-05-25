import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import InFinance_2017 from "../InFinance_2017.png";
import InFinance_2018 from "../InFinance_2018.png";

export default function Recognition () {
    return(
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={InFinance_2017} rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={InFinance_2018} />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail />
                </Col>
            </Row>
        </Container>
    );
}