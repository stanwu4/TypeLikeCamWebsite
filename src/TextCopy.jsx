import React, { useState } from 'react';
import './Textcopy.css'; // Import the CSS file;

function TextCopy(){
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(inputText);
    }

    return(
        <div className = "centered-container">
            <div>
                <input type = "text" value = {inputText} onChange = {handleInputChange} className = "text-copy-input "/>
                
                <textarea value = {inputText} readOnly className = "text-copy-textarea"/>     
            </div>
            <div>
                <button onClick={handleCopyClick} className="text-copy-button">Paste to Clipboard</button>
            </div>
        </div>
    )
}

export default TextCopy;