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
                    backgroundColor: "#7BC950",
                    backdropFilter: "blur(50px)",
                    height: 40,
                    width: 40,
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
                    backgroundColor: "black",
                    backdropFilter: "blur(50px)",
                    height: 20,
                    width: 20,
                }}
            ></Frame>
        </div>
    );
}
