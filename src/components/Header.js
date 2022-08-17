import React from "react"
import "./style.css"
import trollFace from "./images/troll-face.png"

export default function Header(){
    return(
        <div className="header">
            <img src={trollFace} alt="trollface" />
            <h3>MemeGenerator</h3>
            <p>React Course - Project 3</p>
        </div>
    )
}