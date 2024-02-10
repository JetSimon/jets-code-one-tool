import { React, useState } from "react"

function RunningMateDescription(props) {

    //useEffect(() => this.forceUpdate(), props.dummy);

    const [candidateIndex, setCandidateIndex] = useState(getRunningMateObjects().length > 0 ? props.data.candidate_json.indexOf(getRunningMateObjects()[0]) : -1);

    function getRunningMateObjects() {
        return props.data.candidate_json.filter((x) => x.fields.running_mate);
    }

    function getCandidateList() {
        return getRunningMateObjects().map((x) => <option key={props.data.candidate_json.indexOf(x)} value={props.data.candidate_json.indexOf(x)}>{x.fields.first_name} {x.fields.last_name}</option>)
    }

    function getCandidate() {
        return props.data.candidate_json[candidateIndex];
    }

    function onCandidateSelected(e) {
        setCandidateIndex(e.target.value);
    }

    return (
    <div style={{backgroundColor:props.innerWindowColor}} className="inner_window_w_desc" id="inner_window_4">
        <div id="running_mate_form">
            <form name="running mate">
                <p></p>
                <h3>Please select your running mate:</h3> <select onChange={onCandidateSelected} name="running_mate_id" id="running_mate_id">
                    {getCandidateList()}
                </select>
                <p></p>
            </form>
        </div>
        <div className="person_description_window" id="running_mate_description_window">
            <div className="person_image" id="running_mate_image"> <img src={getCandidate().fields.image_url} width="210" height="250"></img> </div>
            <div className="person_summary" id="running_mate_summary">
                <ul>
                    <li>Name: {getCandidate().fields.first_name + " " + getCandidate().fields.last_name}</li>
                    <li>Party: {getCandidate().fields.party}</li>
                    <li>Home State: {getCandidate().fields.state}</li>
                </ul>
                <div dangerouslySetInnerHTML={{__html:getCandidate().fields.description_as_running_mate}}></div>
            </div>
        </div>
        <button onClick={() => props.setCurrentMode("CANDIDATE")} className="person_button" id="running_mate_id_back">Back</button>
    </div>

    );
}

export default RunningMateDescription;