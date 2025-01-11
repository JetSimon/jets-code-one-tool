import React from "react";
import "./Picker.css";

// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function darkenColor(col,amt) {

    if(col == undefined) {
        console.log("undefined color")
        return "#000000";
    }

    var usePound = false;
    if ( col[0] === "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;
    
    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

function Picker(props) {

    function getOutlineColor() {
        return darkenColor(props.color, -50);
    }

    return (
        <div className="Picker">
            <div style={{"outlineColor":getOutlineColor(),"backgroundColor" : props.color}} className="Picker-color">
                <input onChange={(e) => props.setColor(e.target.value)} type="color" name="picker" value={props.color} />
            </div>
            <label htmlFor="picker">{props.target}</label>
        </div>
    )
}

export default Picker;
