import "./Picker.css";
import React from "react";

function TextArea(props) {
    return (
        <div className="TextInput TextArea">
            <div>
            <label>{props.icon} {props.label}</label>
            </div>
            <textarea rows="10" onChange={(e) => props.setValue(e.target.value)} placeholder={props.placeholder} value={props.value}></textarea>
        </div>
    )
}

export default TextArea;