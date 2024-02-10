import "./Picker.css";
import React from "react";

function CheckBox(props) {
    return (
        <div className="TextInput TextArea CheckBox">
            <label>{props.icon} {props.label}</label>
            <input type="checkbox"></input>
        </div>
    )
}

export default CheckBox;