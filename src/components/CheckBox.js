import "./Picker.css";
import React from "react";

function CheckBox(props) {
    return (
        <div className="TextInput TextArea CheckBox">
            <label>{props.icon} {props.label}</label>
            <input type="checkbox" defaultChecked={props.value} onChange={(e) => props.setValue(e.target.checked)}></input>
        </div>
    )
}

export default CheckBox;