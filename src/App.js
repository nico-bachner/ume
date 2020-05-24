import React from 'react';
import NavBar from './NavBar'
import Contact from './Contact'

export default function App() {
    return (
        <div className="App">
            <nav>
                <NavBar />
            </nav>

            <header className="App-header">

            </header>
            <section>
                <Contact />
            </section>
        </div>
    );
}