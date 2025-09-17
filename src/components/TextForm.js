import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpClick = () => {
    if (text.trim().length === 0) {
      props.showalert("Please enter text to convert to uppercase", "warning");
      return;
    }
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to uppercase!", "success");
  }

  const handleUpClick2 = () => {
    if (text.trim().length === 0) {
      props.showalert("Please enter text to convert to lowercase", "warning");
      return;
    }
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to lowercase!", "success");
  }

  const handleClearText = () => {
    if (text.trim().length === 0) {
      props.showalert("Nothing to clear!", "warning");
      return;
    }
    setText('');
    props.showalert("Text cleared!", "success");
  }

  const alternativeText = () => {
    if (text.trim().length === 0) {
      props.showalert("Please enter text to alternate case", "warning");
      return;
    }
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char === char.toLowerCase()) {
        newText += char.toUpperCase();
      } else {
        newText += char.toLowerCase();
      }
    }
    setText(newText);
    props.showalert("Text case alternated!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <div
    className={`btn ${
      props.mode === 'blue'
        ? 'btn-dark'
        : props.mode === 'dark'
        ? 'btn-light text-dark'
        : 'btn-success'
    } mx-1 my-1`}
    onClick={handleUpClick}
  >
    Convert to Uppercase
  </div>
  <div
    className={`btn ${
      props.mode === 'blue'
        ? 'btn-dark'
        : props.mode === 'dark'
        ? 'btn-light text-dark'
        : 'btn-success'
    } mx-1 my-1`}
    onClick={handleUpClick2}
  >
    Convert to Lowercase
  </div>
  <div
    className={`btn ${
      props.mode === 'blue'
        ? 'btn-dark'
        : props.mode === 'dark'
        ? 'btn-light text-dark'
        : 'btn-success'
    } mx-1 my-1`}
    onClick={handleClearText}
  >
    Clear text
  </div>
  <div
    className={`btn ${
      props.mode === 'blue'
        ? 'btn-dark'
        : props.mode === 'dark'
        ? 'btn-light text-dark'
        : 'btn-success'
    } mx-1 my-1`}
    onClick={alternativeText}
  >
    alternative text
  </div>
</div>
      </div>
      <div className="continer">
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} Characters</p>
      </div>
    </>
  )
}