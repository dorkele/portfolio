import React, { useState, useEffect } from "react";
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
        <Frame
            left={iks}
            top={ipsilon}
            style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                height: 20,
                width: 20,
                zIndex: 2,
                background: "none",
            }}
        >
            <img src="/images/eye.png" alt="eye-pointer" height="100%" />
        </Frame>
    );
}
