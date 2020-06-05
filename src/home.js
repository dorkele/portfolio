import React, { useState } from "react";
import styles from "./home.module.css";
import { Frame } from "framer";
import Projects from "./projects.js";
import Contact from "./contact.js";
import Nav from "./nav.js";

export default function Home() {
    const [home, setHome] = useState(true);
    const [projects, setProjects] = useState(false);
    const [contact, setContact] = useState(false);
    const [backGround, setBackGround] = useState("#282D42");
    const [color, setColor] = useState("palevioletred");

    return (
        <React.Fragment>
            <Frame
                background={"none"}
                id="home"
                className={styles.container}
                size={"100%"}
                animate={{ background: backGround, color: color }}
                transition={{
                    duration: 5,
                }}
            >
                <Nav
                    setProjects={setProjects}
                    setHome={setHome}
                    setBackGround={setBackGround}
                    setColor={setColor}
                    setContact={setContact}
                />
                {projects && <Projects />}
                {contact && <Contact />}
                <div className={styles.subtitles}>
                    {home && (
                        <p className={styles.fullstack}>
                            Fullstack web developer with creative background and
                            a special interest in words and storytelling on the
                            Web.
                        </p>
                    )}
                    <p className={styles.title}>DORA TOMINIC</p>
                </div>
            </Frame>
        </React.Fragment>
    );
}
