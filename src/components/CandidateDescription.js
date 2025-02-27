import { React, useState, useEffect } from "react"

function CandidateDescription(props) {

    //useEffect(() => this.forceUpdate(), props.dummy);

    const [candidateIndex, setCandidateIndex] = useState(0);

    function getCandidateList() {
        return props.data.candidate_json.filter((x) => x.fields.is_active && !x.fields.running_mate).map((x) => <option key={props.data.candidate_json.indexOf(x)} value={props.data.candidate_json.indexOf(x)}>{x.fields.first_name} {x.fields.last_name}</option>)
    }

    function getCandidate() {
        return props.data.candidate_json[candidateIndex];
    }

    function onCandidateSelected(e) {
        setCandidateIndex(e.target.value);
    }

    return (
<div style={{backgroundColor:props.innerWindowColor}} className="inner_window_w_desc" id="inner_window_3">
        <div id="candidate_form">
            <form name="candidate">
                <p> </p>
                <h3>Please select your candidate:</h3> <select onChange={onCandidateSelected} name="candidate_id" id="candidate_id">
                    {getCandidateList()}
                </select>
                <p></p>
            </form>
        </div>
        <div className="person_description_window" id="candidate_description_window">
            <div className="person_image" id="candidate_image"> <img src={getCandidate().fields.image_url} width="210" height="250"></img> </div>
            <div className="person_summary" id="candidate_summary">
                <ul>
                    <li>Name: {getCandidate().fields.first_name + " " + getCandidate().fields.last_name}</li>
                    <li>Party: {getCandidate().fields.party}</li>
                    <li>Home State: {getCandidate().fields.state}</li>
                </ul>
                <div dangerouslySetInnerHTML={{__html:getCandidate().fields.description}}></div>
            </div>
        </div>
        <p>
            <button onClick={() => props.setCurrentMode("ELECTION")} className="person_button" id="candidate_id_back">Back</button>
            <button onClick={() => props.setCurrentMode("RUNNINGMATE")} className="person_button" id="candidate_id_button">Continue</button> </p>
    </div>
    );
}

export default CandidateDescription;