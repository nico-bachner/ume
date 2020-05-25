import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Product () {
    return(
        <Container>
            <Card>  
                <Card.Header> About the Platform </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card body>
                                More and more investment management companies use ume to automatically collect and evaluate distributor due diligence information. ume has the largest due diligence database, now covering fund distributors in more than 80 countries. Save time and effort; contact ume if you want due diligence information from your other distributors.
                            </Card>
                        </Col>

                        <Col>
                            <Card body>
                                We designed and developed the ume platform to respond to the asset management industry’s demands for a solution that digitalise the due diligence on fund distributors. We materially facilitate the exchange of information between investment management companies and fund distributors, and automate the assessment of the information. Our approach has proven to be not only the most innovative, as shown by all the industry awards we received, but also the most effective as demonstrated by our list of clients and by the largest database of due diligence questionnaires in the industry. ​
                            </Card>
                        </Col>

                        <Col>
                            <Card body>
                                ume is now acknowledged as one of the most innovative RegTech companies in the world.  We are the clear market leader for fund distribution due diligence. Most of the largest investment managers in the world work with ume.​
                            </Card>
                            
                            <Card body>
                                Stop wasting your time chasing DDQs. We have them on our platform.
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}