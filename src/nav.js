import React, { useState } from "react";
import styles from "./nav.module.css";
import { Frame } from "framer";

export default function Nav({
    setProjects,
    setBackGround,
    setColor,
    setHome,
    setContact,
}) {
    const [navColor, setNavColor] = useState("#8d99ae");
    const home = () => {
        setProjects(false);
        setHome(true);
        setContact(false);
        setBackGround("#282D42");
        setColor("#8D99AE");
        setNavColor("#8D99AE");
    };
    const projects = () => {
        setProjects(true);
        setHome(false);
        setContact(false);
        setBackGround("#BFD1E5");
        setColor("#31081F");
        setNavColor("#31081F");
    };
    const contact = () => {
        setContact(true);
        setProjects(false);
        setHome(false);
        setBackGround("#2E294E");
        setColor("#B4A0E5");
        setNavColor("#B4A0E5");
    };
    return (
        <div className={styles.nav}>
            <Frame
                background={"none"}
                style={{
                    position: "fixed",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "baseline",
                    width: "100%",
                }}
                animate={{ color: navColor }}
                transition={{
                    duration: 5,
                }}
            >
                <p onClick={home} className={styles.home}>
                    Home
                </p>
                <p onClick={projects} className={styles.projects}>
                    Projects
                </p>
                <p onClick={contact} className={styles.contact}>
                    Contact
                </p>
            </Frame>
        </div>
    );
}
