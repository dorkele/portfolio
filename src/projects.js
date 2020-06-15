import React, { useState } from "react";
import styles from "./projects.module.css";
import Project from "./project.js";

export default function Projects() {
    let [id, setId] = useState("");
    function openModal(id) {
        setId(id);
    }
    function closeModal() {
        setId("");
    }
    return (
        <div id="projects" className={styles.container}>
            <p
                className={styles.fullmoon}
                onClick={() => {
                    openModal(1);
                }}
            >
                Connect Four
            </p>
            <p
                className={styles.book}
                onClick={() => {
                    openModal(2);
                }}
            >
                Petition: Found in Translation
            </p>
            <p
                className={styles.sea}
                onClick={() => {
                    openModal(3);
                }}
            >
                Imageboard: Can You Sea Me?
            </p>
            <p
                className={styles.bubble}
                onClick={() => {
                    openModal(4);
                }}
            >
                Social Network: Bubbles
            </p>
            <p
                className={styles.stones}
                onClick={() => {
                    openModal(5);
                }}
            >
                Scrollytelling: Apocalypse Dreams
            </p>
            {id && <Project id={id} closeModal={closeModal} />}
        </div>
    );
}
