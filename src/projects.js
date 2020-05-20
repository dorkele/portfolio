import React from "react";
import styles from "./projects.module.css";

export default function Projects() {
    return (
        <div id="projects" className={styles.container}>
            <div className={styles.circle}>
                <img
                    src="/images/fullmoon_PS.png"
                    alt="fullmoon"
                    className={styles.fullmoon}
                />
                <img
                    src="/images/open_book.png"
                    alt="open book"
                    className={styles.book}
                />
                <img
                    src="/images/can-you-sea-me.jpg"
                    alt="sea"
                    className={styles.sea}
                />
                <img
                    src="/images/bubble-icon.png"
                    alt="bubble"
                    className={styles.bubble}
                />
                <img
                    src="/images/stones.png"
                    alt="stones"
                    className={styles.stones}
                />
            </div>
        </div>
    );
}
