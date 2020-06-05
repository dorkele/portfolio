import React from "react";
import "./App.css";
import Home from "./home.js";
import Pointer from "./pointer.js";

function App() {
    return (
        <div className="background">
            <Pointer />
            <Home />
        </div>
    );
}

export default App;
