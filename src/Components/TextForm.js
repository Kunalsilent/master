import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        console.log("claer was clicked" + text)

        setText(" ")
    }
    const handleOnChange = (event) => {
        //  console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.Select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('')
    // setText("new text") if you want to change the value of text 
    return (

        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className='mb-3'><textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea></div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            </div>

            <div className='container'>
                <div className='mb-3'></div>
                <h1> Your Text summary</h1>
                <p>{text.split(" ").length} words and {text.length}characters</p>
                <p> {0.008 * text.split(" ").length} Mintues read</p>
                <h1> Preview</h1>
                <p>{text} </p>
            </div>
        </>

    )
}
