import { React, useState } from "react"

function ElectionDescription(props) {
    return (
<div style={{backgroundColor:props.innerWindowColor}} className="inner_window_w_desc" id="inner_window_2">
    <div id="election_year_form">
        <form name="election_year">
            <p> </p>
            <h3>Please select the election you will run in:</h3> <select name="election_id" id="election_id">
                <option value="21">{props.electionYear}</option>
            </select>
            <p></p>
        </form>
        <div className="election_description_window" id="election_description_window">
            <div id="election_image"> <img src={props.electionImage} width="300" height="160"></img>
            </div>
            <div dangerouslySetInnerHTML={{__html:props.electionSummary}} id="election_summary">
            </div>
        </div>
    </div>
    <p><button onClick={() => props.setCurrentMode("CANDIDATE")} id="election_id_button">Continue</button></p>
    <p id="credits">This scenario was made by {props.credits}.</p>
</div>
    );
}

export default ElectionDescription;