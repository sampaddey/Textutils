import React, {useState} from 'react'




export default function Textform(props) {
const [text, setText]=useState('');
const handleclick=()=>{
    console.log("Uppercase was clicked");
    let t=text.toLocaleUpperCase();
    setText(t);
    props.showalert("Converted to uppercase","sucess");
}
const handleLoclick=()=>{
  console.log("Uppercase was clicked");
  let t=text.toLocaleLowerCase();
  setText(t);
  props.showalert("Converted to lowercase","sucess");
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const cleartext=()=>{
  let t='';
  setText(t);
  props.showalert("Text cleared","sucess");
}
const handlechange=(event)=>{
    console.log("onchange");
    setText(event.target.value);
}
const handleCopy =()=>{
  console.log("I am copy");
  var text=document.getElementById("mybox");
  text.select();
  // text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showalert("Text copied","sucess");
  
}
// setText("New Text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white' :'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="mybox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handlechange} style={{backgroundColor:props.mode==='dark'?'grey' :'white', color:props.mode==='dark'?'white' :'#042743'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <button className="btn btn-primary mx-2" onClick={cleartext}>Clerar</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white' :'#042743', borderRadius:6}} >
    {/* backgroundColor:props.mode==='dark'?'grey' :'white',  */}
    <h1>Your text has</h1>
    <p>{text.split(" ").length} Words ans {text.length} Characters</p>
    <p>{0.008*text.split(" ").length} to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
