import React, { useState } from "react";
import styles from "./home.module.css";
import { Frame } from "framer";
import Projects from "./projects.js";
import Contact from "./contact.js";
import Nav from "./nav.js";
import pdf from "./documents/d.tominic-cv.pdf";

export default function Home() {
    const [home, setHome] = useState(true);
    const [projects, setProjects] = useState(false);
    const [contact, setContact] = useState(false);
    const [backGround, setBackGround] = useState("#190B28");
    const [color, setColor] = useState("#FDCFF3");
    const [opacity, setOpacity] = useState(1);

    return (
        <React.Fragment>
            <Frame
                background={"none"}
                id="home"
                className={styles.container}
                size={"100%"}
                animate={{
                    background: backGround,
                    color: color,
                }}
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
                    setOpacity={setOpacity}
                />
                {contact && <Contact />}

                {projects && <Projects />}
                <div className={styles.subtitles}>
                    {home && (
                        <>
                            <p className={styles.fullstack}>
                                front-end web developer with creative background
                                and a special interest in words and storytelling
                                on the web
                            </p>
                            <a
                                className={styles.fullstack}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={pdf}
                            >
                                Curriculum Vitae
                            </a>
                        </>
                    )}
                </div>
                <Frame
                    background={"none"}
                    size={"100%"}
                    animate={{
                        opacity: opacity,
                    }}
                    transition={{
                        duration: 2,
                    }}
                    className={styles.title}
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                    }}
                >
                    dora tominic
                </Frame>
            </Frame>
        </React.Fragment>
    );
}
