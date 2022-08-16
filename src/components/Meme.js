import React from "react"
import memesData from "../memesData.js"


export default function Meme(){
        /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    function memeDisplay(){
    const memeArray= memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length) 
    console.log(memeArray[randomNumber].url)
}
    
    return(
        <div>
            <form className="form-container">
                <input type="text" value="shut up" />
                <input type="text" value="and take my money" />
            </form>
            <button className="form-btn" onClick={memeDisplay}>Get a new Meme Image 🖼</button>
        </div>
    )
}