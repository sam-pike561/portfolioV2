import "./intro.scss"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backspeed: 60,
            showCursor: true,
            strings: ["Developer", "Designer", "NodeJS Engineer"]
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/circlePortrait.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Samuel Pike</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                   <KeyboardArrowDownIcon />
                </a>
            </div>
        </div>
    )
}
