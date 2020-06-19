import React, { useState, useEffect } from "react";
import styles from "./project.module.css";
import data from "./projects.json";
import { Frame } from "framer";

export default function Project({
    id,
    closeModal,
    visible,
    setVisible,
    count,
    setCount,
}) {
    const variants = {
        slideIn: {
            y: 0,
        },
        slideOut: {
            y: "100%",
        },
    };
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
        <Frame
            className={styles.container}
            size="100%"
            y="100%"
            variants={variants}
            animate={visible ? "slideIn" : "slideOut"}
            transition={{ duration: 2.5 }}
            background="white"
            style={{
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                zIndex: 50,
            }}
        >
            <div className={styles.box}>
                <div className={styles.img_arrows}>
                    <p className={styles.navig} onClick={countDecrease}>
                        &lt;
                    </p>
                    <img
                        src={data[id].images[count]}
                        alt="screenshot"
                        className={styles.imgs}
                    />
                    <p className={styles.navig} onClick={countIncrease}>
                        &gt;
                    </p>
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>{data[id].title}</div>
                    <div>{data[id].description}</div>
                    <div>STACK: {data[id].stack}</div>
                    {data[id].link && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={data[id].link}
                        >
                            VISIT
                        </a>
                    )}
                </div>
            </div>
            <div className={styles.iks} onClick={closeModal}>
                X
            </div>
        </Frame>
    );
}
