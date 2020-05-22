import React from "react";
import "./App.css";
import Nav from "./nav.js";
import Home from "./home.js";
import Projects from "./projects.js";
import Contact from "./contact.js";

function App() {
    return (
        <div className="background">
            <Nav />
            <Home />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
