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
    }
    return (
        <React.Fragment>
            <div id="projects" className={styles.container}>
                <p
                    className={styles.project}
                >
                    Coming Soon!
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
