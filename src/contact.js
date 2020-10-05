import React from "react";
import styles from "./contact.module.css";
import pdf from "./documents/d.tominic-cv.pdf";

export default function Contact() {
    return (
        <div id="contact" className={styles.container}>
            <p>dora_tominic@hotmail.com</p>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/dorkele"
            >
                Github
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dora-tominic/"
            >
                Linkedin
            </a>
            <a target="_blank" rel="noopener noreferrer" href={pdf}>
                Resume
            </a>
        </div>
    );
}
