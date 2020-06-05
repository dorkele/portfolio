import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
    return (
        <div id="contact" className={styles.container}>
            <p className={styles.email}>dora_tominic@hotmail.com</p>
            <p className={styles.github}>
                <a href="https://github.com/dorkele">Github</a>
            </p>
            <p className={styles.linkedin}>
                <a href="https://www.linkedin.com/in/dora-tominic/">Linkedin</a>
            </p>
        </div>
    );
}
