import { React, useState, useEffect } from "react"
import TextInput from "./TextInput"
import TextArea from "./TextArea";
import Picker from "./Picker";
import CheckBox from './CheckBox'
import "./CandidateEditor.css"

function CandidateEditor(props) {

    const [hidden, setHidden] = useState(false);

    function setFirstName(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.first_name = x;
        props.setData(newData);
    }

    function setLastName(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.last_name = x;
        props.setData(newData);
    }

    function setParty(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.party = x;
        props.setData(newData);
    }

    function setState(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.state = x;
        props.setData(newData);
    }

    function setDescription(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.description = x;
        props.setData(newData);
    }

    function setDescriptionAsRunningMate(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.description_as_running_mate = x;
        props.setData(newData);
    }

    function setImageUrl(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.image_url = x;
        props.setData(newData);
    }

    function setPk(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].pk = Number(x);
        props.setData(newData);
    }

    function setColor(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.color_hex = x;
        props.setData(newData);
    }

    function setPlayable(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.is_active = x ? 1 : 0;
        props.setData(newData);
    }

    function setIsRunningMate(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.running_mate = x;
        if(!x) {
            newData.running_mate_json = newData.running_mate_json.filter((z) => z.fields.running_mate != props.data.candidate_json[props.index].pk);
        }
        else {
            newData.candidate_json[props.index].fields.is_active = 0;
            setRunningMate(props.data.candidate_json.filter((x) => x.fields.running_mate == false)[0].pk);
            newData.running_mate_json = newData.running_mate_json.filter((z) => z.fields.candidate != props.data.candidate_json[props.index].pk);
        }
        props.setData(newData);
    }


    function removeItemOnce(arr, index) {
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }

    function deleteCandidate() {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json = removeItemOnce(newData.candidate_json, props.index);

        if(isRunningMate()) {
            newData.running_mate_json = newData.running_mate_json.filter((z) => z.fields.running_mate != props.data.candidate_json[props.index].pk);
        }

        props.setData(newData);
    }

    function isRunningMate() {
        return props.data.candidate_json[props.index].fields.running_mate;
    }

    function setRunningMate(candidate) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.running_mate_json = newData.running_mate_json.filter((x) => x.fields.running_mate != props.data.candidate_json[props.index].pk)
        
        if(candidate !== -1) {
            newData.running_mate_json.push(
                {"model":"campaign_trail.running_mate","pk":Math.round(80000 + Math.random() * 100000),"fields":{"candidate":Number(candidate),"running_mate":Number(props.data.candidate_json[props.index].pk)}}
            );
        }
        
        props.setData(newData);
    }

    function getRunningMate() {
        return props.data.running_mate_json.filter((x) => x.fields.running_mate == props.data.candidate_json[props.index].pk)[0]?.fields.candidate ?? -1;
    }

    function getVictoryMessage() {
        return props.data.candidate_json[props.index].fields.electoral_victory_message;
    }

    function setVictoryMessage(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.electoral_victory_message = x;
        props.setData(newData);
    }

    function getLossMessage() {
        return props.data.candidate_json[props.index].fields.electoral_loss_message;
    }

    function setLossMessage(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.electoral_loss_message = x;
        props.setData(newData);
    }

    function getTieMessage() {
        return props.data.candidate_json[props.index].fields.no_electoral_majority_message;
    }

    function setTieMessage(x) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.candidate_json[props.index].fields.no_electoral_majority_message = x;
        props.setData(newData);
    }

    function getEndings() {
        if(isRunningMate()) {
            return <div></div>
        }
        return (
        <div className="InnerEditor">
        <TextArea icon="✍️" label="Victory Ending Description" value={getVictoryMessage()} setValue={setVictoryMessage}/>
        <TextArea icon="✍️" label="Loss Ending Description" value={getLossMessage()} setValue={setLossMessage}/>
        <TextArea icon="✍️" label="No Majority Ending Description" value={getTieMessage()} setValue={setTieMessage}/>
        </div>
        );
    }

    function getDescriptionEditor() {
        if(isRunningMate()) {
            return <TextArea icon="✍️" label="Running Mate Description" value={props.data.candidate_json[props.index].fields.description_as_running_mate} setValue={setDescriptionAsRunningMate}/>
        }
        return <TextArea icon="✍️" label="Candidate Description" value={props.data.candidate_json[props.index].fields.description} setValue={setDescription}/>;
    }

    function getRestOfCandidate() {
        if(hidden) {
            return "";
        }

        return ( <div className="InnerEditor">
            <TextInput icon="✍️" label="First Name" value={props.data.candidate_json[props.index].fields.first_name} setValue={setFirstName}/>
            <TextInput icon="✍️" label="Last Name" value={props.data.candidate_json[props.index].fields.last_name} setValue={setLastName}/>
            <TextInput icon="✍️" label="Party" value={props.data.candidate_json[props.index].fields.party} setValue={setParty}/>
            <TextInput icon="✍️" label="State" value={props.data.candidate_json[props.index].fields.state} setValue={setState}/>
            <Picker target="Candidate Color" color={props.data.candidate_json[props.index].fields.color_hex} setColor={setColor}></Picker>
            <TextInput label="Candidate Image" icon="🖼️" value={props.data.candidate_json[props.index].fields.image_url} setValue={setImageUrl}></TextInput>
            
            {getDescriptionEditor()}

            {getEndings()}

            {!isRunningMate() && <CheckBox value={props.data.candidate_json[props.index].fields.is_active} setValue={setPlayable} icon="🖊️" label="Is Playable"></CheckBox>}
            {props.data.candidate_json.length > 1 && props.data.candidate_json.filter((x) => x.fields.running_mate == false).length > 0 ? 
            <CheckBox value={props.data.candidate_json[props.index].fields.running_mate} setValue={setIsRunningMate} icon="🖊️" label="Is Running Mate"></CheckBox>
            : ""}
            {
                isRunningMate() &&
                (<div><label>Runs With:</label>
                <select onChange={(e) => setRunningMate(e.target.value)} value={getRunningMate()}>
                <option key={-1} value={-1}>Not Set</option>
                {props.data.candidate_json.filter((x) => x.fields.running_mate == false).map((x) =><option key={x.pk} value={x.pk}>{x.fields.first_name} {x.fields.last_name}</option>)}
                </select></div>)
            }
            <TextInput icon="✍️" label="PK" value={props.data.candidate_json[props.index].pk} setValue={setPk}/>
            </div>)
    }

    return (
        <div className="CandidateEditor">
            <button className="ToggleButton" onClick={() => setHidden(!hidden)}>{hidden ? "+" : "-"}</button>
            <h2 style={{textAlign:"center"}}>{props.data.candidate_json[props.index].fields.first_name} {props.data.candidate_json[props.index].fields.last_name}</h2>
            {getRestOfCandidate()}
            <button onClick={deleteCandidate} style={{"display":"flex", "margin":"auto"}} className="EditorButton RedButton">Delete Candidate</button>
        </div>
    );
}

export default CandidateEditor;