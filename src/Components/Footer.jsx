import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';

export default function Footer () {

    const footerStyle = {
        backgroundColor: '#121416',
        height: '20vh',
        padding: '5vh'
    }

    const footerMenu = {
        color: 'white',
        textAlign: 'center'
    }

    const footerLegal = {
        color: '#a6a6a6',
        textAlign: 'center'
    }

    return(
        <div style={footerStyle} >
            <Container>
                <p style={footerMenu} >Home / About / Team / Recognition / Contact</p>
                <p style={footerLegal} >Copyright 2020 ume</p>
            </Container>
        </div>
    );
}