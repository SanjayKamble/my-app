import React, { useState } from 'react'

export default function TextForm(props) {

    // function to convert text into uppercase
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showMessage('Converted to upper case','success');
    }

    //function to convert into lower case

    const handleDownClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showMessage('converted to lower case','success');
    }


    const handleOnChange = (event) => {

        setText(event.target.value);


    }

    const handleClearText =()=>{
        let newText = "";
        setText(newText);
        
    }

    const handleSignature = () => {
        let newText = text+"\n\n\n Major Mobiles \n Kamble Sanjaykumar";
        setText(newText);
    }

    const [text, setText] = useState('Enter text here');
   
    let date = new Date();
   let day = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
    return (
        <>
            <h1>{props.heading}</h1>

            <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>

                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpClick}>To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>To LowerCase </button>
            <button className='btn btn-success' onClick={handleClearText}>Clear text</button>
            <button className='btn btn-warning mx-2' onClick={handleSignature}>Add Signature</button>

            <h2 className='class1 my-2'>Text Summary </h2>

            <div className="container my-3" >
                {text.split(" ").length} words and {text.length} characters
            </div>

            <h4 className='class1 my-2'>Can be read in {text.split(" ").length*0.008} minutes</h4>

            
        <h4>{day}</h4>
        </>

    )
}
