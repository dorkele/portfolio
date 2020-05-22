import React from "react";
import styles from "./home.module.css";

export default function Home() {
    return (
        <div id="home" className={styles.container}>
            <h1 className={styles.hello}></h1>
        </div>
    );
}
