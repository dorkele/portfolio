import React from "react";
import styles from "./project.module.css";

export default function Project() {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <p className={styles.navig}>X</p>
                <div className={styles.img_arrows}>
                    <p className={styles.navig}>&lt;</p>
                    <img
                        src="/images/connect.png"
                        alt="screenshot"
                        className={styles.image}
                    />
                    <p className={styles.navig}>&gt;</p>
                </div>
                <h1>Connect Four Game</h1>
                <div>
                    Simple game of connect four reimagined as a classic battle
                    between light and dark.
                </div>
                <div>STACK: HTML5, CSS3, jQuery</div>
            </div>
        </div>
    );
}
