import React, { useState, useEffect } from "react";
import styles from "./pointer.module.css";
import { Frame } from "framer";

export default function Pointer() {
    let [iks, setIks] = useState();
    let [ipsilon, setIpsilon] = useState();
    useEffect(() => {
        const handlePointer = (e) => {
            setIks(e.pageX);
            setIpsilon(e.pageY);
        };
        window.addEventListener("mousemove", handlePointer);
    }, [iks, ipsilon]);

    return (
        <div>
            <Frame
                className={styles.container}
                left={iks}
                top={ipsilon}
                style={{
                    position: "absolute",
                    zIndex: 100,
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "none",
                    backdropFilter: "blur(50px)",
                    height: 50,
                    width: 50,
                }}
            ></Frame>
            <Frame
                className={styles.container}
                left={iks}
                top={ipsilon}
                style={{
                    position: "fixed",
                    zIndex: 100,
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "none",
                    backdropFilter: "blur(50px)",
                    height: 50,
                    width: 50,
                }}
            ></Frame>
        </div>
    );
}
