import React from 'react';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team';
import Recognition from './Components/Recognition';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <nav>
                <NavBar />
            </nav>

            <header id="home" >
                <Home />
            </header>

            <section id="about" >
                <About />
            </section>

            <section id="team" >
                <Team />
            </section>

            <section id="recognition" >
                <Recognition />
            </section>

            <section id="contact" >
                <Contact />
            </section>
            
            <footer>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Library</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    <p>Copyright 2020 ume</p>
                </Breadcrumb>
            </footer>
        </div>
    );
}