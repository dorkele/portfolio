import React, { useState, useEffect } from "react";
import styles from "./project.module.css";
import data from "./projects.json";
import { Frame } from "framer";

export default function Project({ id, closeModal, visible, setVisible }) {
    // useEffect(() => {
    //     var project = document.getElementById("project");
    //     console.log(project);
    //     project.scrollIntoView({
    //         behavior: "smooth",
    //         block: "end",
    //         inline: "nearest",
    //     });
    // }, [id]);

    const [count, setCount] = useState(0);

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
        <React.Fragment>
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
                    flexDirection: "row",
                }}
            >
                {/* <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        background: "violet",
                        height: "50%",
                    }}
                > */}
                <div className={styles.img_arrows}>
                    <p className={styles.navig} onClick={countDecrease}>
                        &lt;
                    </p>
                    <img
                        src={data[id].images[count]}
                        alt="screenshot"
                        className={styles.imgs}
                    />
                    {/* {data[id].images.map((val, index) => {
                    return (
                        <img
                            src={data[id].images[index]}
                            alt="screenshot"
                            className={styles.image}
                        />
                    );
                })} */}

                    <p className={styles.navig} onClick={countIncrease}>
                        &gt;
                    </p>
                </div>
                <div className={styles.text}>
                    <h1>{data[id].title}</h1>
                    <div>{data[id].description}</div>
                    <div>STACK: {data[id].stack}</div>
                </div>
                {/* </div> */}
                <p className={styles.iks} onClick={closeModal}>
                    X
                </p>
            </Frame>
        </React.Fragment>
    );
}
