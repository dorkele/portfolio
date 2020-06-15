import React, { useState } from "react";
import styles from "./nav.module.css";
import { Frame } from "framer";

export default function Nav({
    setProjects,
    setBackGround,
    setColor,
    setHome,
    setContact,
    setOpacity,
}) {
    const [navColor, setNavColor] = useState("#C297B8");
    const home = () => {
        setProjects(false);
        setHome(true);
        setContact(false);
        setBackGround("#190B28");
        setColor("#FDCFF3");
        setNavColor("#C297B8");
        setOpacity(1);
    };
    const projects = () => {
        setProjects(true);
        setHome(false);
        setContact(false);
        setBackGround("#402C77");
        setColor("#7BC950");
        setNavColor("#7BC950");
        setOpacity(0.1);
    };
    const contact = () => {
        setContact(true);
        setProjects(false);
        setHome(false);
        setBackGround("#2E294E");
        setColor("#B4A0E5");
        setNavColor("#B4A0E5");
        setOpacity(1);
    };
    return (
        <div className={styles.nav}>
            <Frame
                background={"none"}
                style={{
                    position: "fixed",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "baseline",
                    width: "100%",
                }}
                animate={{ color: navColor }}
                transition={{
                    duration: 5,
                }}
            >
                <p onClick={home} className={styles.home}>
                    home
                </p>
                <p onClick={projects} className={styles.projects}>
                    projects
                </p>
                <p onClick={contact} className={styles.contact}>
                    contact
                </p>
            </Frame>
        </div>
    );
}
