import React from "react";
import styles from "./nav.module.css";

export default function Nav() {
    const home = () => {
        let home = document.getElementById("home");
        home.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };
    const projects = () => {
        let projects = document.getElementById("projects");
        projects.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };
    const contact = () => {
        let contact = document.getElementById("contact");
        contact.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };
    return (
        <div className={styles.nav}>
            <p onClick={home} className={styles.home}>
                Home
            </p>
            <p onClick={projects} className={styles.projects}>
                Projects
            </p>
            <p onClick={contact} className={styles.contact}>
                Contact
            </p>
        </div>
    );
}
