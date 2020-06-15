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
        <div className={styles.container}>
            <p className={styles.iks} onClick={closeModal}>
                X
            </p>
            <div className={styles.imgs}>
                {/* <p className={styles.navig} onClick={countDecrease}>
                    &lt;
                </p> */}
                {/* {randomXArray.map((val, index) => {
                    return (
                        <FoldedPaper
                            key={index}
                            randomX={randomXArray[index]}
                            randomY={randomYArray[index]}
                        />
                    );
                })} */}
                {data[id].images.map((val, index) => {
                    return (
                        <img
                            src={data[id].images[index]}
                            alt="screenshot"
                            className={styles.image}
                        />
                    );
                })}

                {/* <p className={styles.navig} onClick={countIncrease}>
                    &gt;
                </p> */}
            </div>
            <div className={styles.text}>
                <h1>{data[id].title}</h1>
                <div>{data[id].description}</div>
                <div>STACK: {data[id].stack}</div>
            </div>
        </div>
    );
}
