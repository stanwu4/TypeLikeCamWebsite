import React, { useState, useEffect } from 'react';
import './Textcopy.css'; // Import the CSS file;

function convert(text){
    // Add key-value pairs to the hash table
const hashTable = {
    'A': "Ä",
    'B': "ß",
    'C': "C",
    'D': "D",
    'E': "£Ē",
    'F': "F",
    'G': "G",
    'H': "H",
    'I': "ÎÏĮ1",
    'J': "J",
    'K': "K",
    'L': "Ł",
    'M': "M",
    'N': "Ń",
    'O': "Ø",
    'P': "₽",
    'Q': "Q",
    'R': "R",
    'S': "§",
    'T': "T",
    'U': "Ü",
    'V': "V",
    'W': "₩",
    'X': "X",
    'Y': "¥Ÿ",
    'Z': "Ž",
    'a': "á",
    'b': "b",
    'c': "č",
    'd': "d",
    'e': "ē",
    'f': "f",
    'g': "g",
    'h': "h",
    'i': "ï",
    'j': "j",
    'k': "k",
    'l': "ł",
    'm': "m",
    'n': "ñ",
    'o': "ø",
    'p': "p",
    'q': "q",
    'r': "r",
    's': "š",
    't': "t",
    'u': "ū",
    'v': "v",
    'w': "w",
    'x': "x",
    'y': "ÿ",
    'z': "ż",
}
    //random number lands between 0 and 1
    const randomNumberY = Math.floor(2 * Math.random());
    //random number lands between 0 and 3
    const randomNumberI = Math.floor(Math.random() * 4);


    let output = '';
    for(let i = 0; i < text.length; i++){
        const char = text[i];
        let funkyChar = '';
        if(text[char] === 'I'){
            funkyChar = hashTable[i][randomNumberI];
        }
        else if(text[char] === 'Y'){
            funkyChar = hashTable[i][randomNumberY];
        }else{
            funkyChar = hashTable[i];
        }
        output += funkyChar;
    }

    return output;
}





function TextCopy(){
    const [inputText, setInputText] = useState('');
    const [convertedText, setConvertedText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };

    useEffect(() => {
        const converted = convert(inputText);
        setConvertedText(converted);
      }, [inputText]);

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(inputText);
    }

    return(
        <div className = "centered-container">
            <div>
                <textarea value = {inputText} placeholder = "Your text here" onChange = {handleInputChange} className = "text-area"/>
                
                <textarea value = {convertedText} placeholder = "ØŪT₽ŪT" readOnly className = "text-copy-textarea"/>     
            </div>
            <div className = "button-continer">
                <button onClick={handleCopyClick} className="text-copy-button">Paste to Clipboard</button>
            </div>
        </div>
    )
}

export default TextCopy;