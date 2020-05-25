import React from 'react';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Product from './Components/Product';
import About from './Components/About';
import Team from './Components/Team';
import Recognition from './Components/Recognition';
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <nav>
                <NavBar />
            </nav>

            <header id="about" >
                <About />
            </header>

            <section id="product" >
                <Product />
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

            </footer>
        </div>
    );
}