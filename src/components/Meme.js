import React from "react"
import memesData from "../memesData.js"
import "./style.css"


export default function Meme(){
    const [ memeImage, setMemeImage ] = React.useState("")
        
    function memeDisplay(){
    const memeArray= memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    
    setMemeImage(memeArray[randomNumber].url)
}
    
    return(
        <div>
            <form className="form-container">
                <input type="text" value="shut up" />
                <input type="text" value="and take my money" />
            </form>
            <div className="form-btn-container">
                <button className="form-btn" onClick={memeDisplay}>Get a new Meme Image 🖼</button>
            </div>
            <div className="meme-gen-img">
                <img src={memeImage} />
            </div>       
        </div>
    )
}
