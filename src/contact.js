import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
    return (
        <div id="contact" className={styles.container}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/dorkele"
            >
                GitHub
            </a>
            <p>dora_tominic@hotmail.com</p>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dora-tominic/"
            >
                LinkedIn
            </a>
        </div>
    );
}
