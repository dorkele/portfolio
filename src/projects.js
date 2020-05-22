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
            <div className={styles.circle}>
                <img
                    src="/images/fullmoon_PS.png"
                    alt="fullmoon"
                    className={styles.fullmoon}
                    onClick={() => {
                        openModal(1);
                    }}
                />
                <img
                    src="/images/open_book.png"
                    alt="open book"
                    className={styles.book}
                    onClick={() => {
                        openModal(2);
                    }}
                />
                <img
                    src="/images/can-you-sea-me.jpg"
                    alt="sea"
                    className={styles.sea}
                    onClick={() => {
                        openModal(3);
                    }}
                />
                <img
                    src="/images/bubble-icon.png"
                    alt="bubble"
                    className={styles.bubble}
                    onClick={() => {
                        openModal(4);
                    }}
                />
                <img
                    src="/images/stones.png"
                    alt="stones"
                    className={styles.stones}
                    onClick={() => {
                        openModal(5);
                    }}
                />
            </div>
            {id && <Project id={id} closeModal={closeModal} />}
        </div>
    );
}
