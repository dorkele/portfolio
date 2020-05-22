import React, { useState } from "react";
import styles from "./project.module.css";
import data from "./projects.json";

export default function Project({ id, closeModal }) {
    const [count, setCount] = useState(0);
    const countDecrease = () => {
        if (count === 0) {
            setCount(data[id].images.length - 1);
        } else {
            setCount(count - 1);
        }
    };
    const countIncrease = () => {
        if (count === data[id].images.length - 1) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    };
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <p className={styles.navig} onClick={closeModal}>
                    X
                </p>
                <div className={styles.img_arrows}>
                    <p className={styles.navig} onClick={countDecrease}>
                        &lt;
                    </p>

                    <img
                        src={data[id].images[count]}
                        alt="screenshot"
                        className={styles.image}
                    />
                    <p className={styles.navig} onClick={countIncrease}>
                        &gt;
                    </p>
                </div>
                <h1>{data[id].title}</h1>
                <div>{data[id].description}</div>
                <div>STACK: {data[id].stack}</div>
            </div>
        </div>
    );
}
