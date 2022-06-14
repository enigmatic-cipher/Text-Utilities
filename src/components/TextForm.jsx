import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase clicked ' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "Process Completed")
    }

    // const handleFuClick = () => {
    //     let newtext = text.split(".");
    //     let newtext2 = newtext.charAt(0).toUpperCase() + newtext.slice(1)
    //     setText(newtext2)
    //     props.showAlert("Converted First Letter to Upper Case", "Process Completed")
    // }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lower Case", "Process Completed")
    }

    const handleClearClick = () => {
        let newtext = ("");
        setText(newtext)
        props.showAlert("Cleared", " ")
    }

    const handleCsClick = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra Space Removed", "Process Completed")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", ">")
    }

    const handleOnChange = (event) => {
        // console.log('onChanged Clicked')
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>{props.heading}</h2>
                <div className='mb-3'>
                    <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' style={{ backgroundColor: props.mode === 'dark' ? 'rgb(44 65 86)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} rows="8"></textarea>
                </div>
                {/* <button className="btn btn-primary mx-2" onClick={handleFuClick}>Convert First Letter to Uppercase</button> */}
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCsClick}>Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.replace(/ /g, "").length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Text in Text Box"}</p>
            </div>
        </>
    )
}
