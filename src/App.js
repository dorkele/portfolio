import React from "react";
import "./App.css";
import Nav from "./nav.js";
import Home from "./home.js";
import Projects from "./projects.js";
import Contact from "./contact.js";
import Project from "./project.js";

function App() {
    return (
        <div className="background">
            <Nav />
            <Home />
            <Projects />
            <Contact />
            <Project />
        </div>
    );
}

export default App;
