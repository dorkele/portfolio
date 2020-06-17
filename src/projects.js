import React, { useState } from "react";
import styles from "./projects.module.css";
import Project from "./project.js";

export default function Projects() {
    let [id, setId] = useState("");
    let [visible, setVisible] = useState(false);
    const [count, setCount] = useState(0);

    function openModal(id) {
        setCount(0);
        setId(id);
        setVisible(true);
    }
    function closeModal() {
        setVisible(false);
        // setId("");
    }
    return (
        <React.Fragment>
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
            </div>
            {id && (
                <Project
                    id={id}
                    closeModal={closeModal}
                    visible={visible}
                    setVisible={setVisible}
                    count={count}
                    setCount={setCount}
                />
            )}
        </React.Fragment>
    );
}
