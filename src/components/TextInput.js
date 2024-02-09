import "./Picker.css";
import React from "react";

function TextInput(props) {
    return (
        <div className="TextInput">
            <span className="TextInput-icon">{props.icon}</span>
            <label>{props.label}</label>
            <input onChange={(e) => props.setValue(e.target.value)} placeholder={props.placeholder} value={props.value}></input>
        </div>
    )
}

export default TextInput;