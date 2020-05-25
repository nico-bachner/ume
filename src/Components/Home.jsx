import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Home () {
    return(
        <Jumbotron fluid="true" className="text-center">
            <h1>ume</h1>
            <h5>
                The ume platform connects investment managers and their fund distributors, <br /> automating the exchange and evaluation of due diligence information
            </h5>
            <p style={{margin: "5vh 0 0"}}>
                <Button variant="primary">Go to ume platform</Button>
            </p>
        </Jumbotron>
    );
}