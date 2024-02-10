import { React, useState, useEffect } from "react"
import TextInput from "./TextInput"
import TextArea from "./TextArea";
import Picker from "./Picker";
import CheckBox from './CheckBox'
import "./CandidateEditor.css"

function CandidateEditor(props) {

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
        newData.candidate_json[props.index].pk = x;
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
            setRunningMate(props.data.candidate_json.filter((x) => x.fields.running_mate == false)[0].pk)
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
        props.setData(newData);
    }

    function isRunningMate() {
        return props.data.candidate_json[props.index].fields.running_mate;
    }

    function setRunningMate(candidate) {
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.running_mate_json = newData.running_mate_json.filter((x) => x.fields.running_mate == props.data.candidate_json[props.index].pk)
        newData.running_mate_json.push(
            {"model":"campaign_trail.running_mate","pk":Math.round(80000 + Math.random() * 100000),"fields":{"candidate":Number(candidate),"running_mate":props.data.candidate_json[props.index].pk}}
        );
        props.setData(newData);
    }

    function getRunningMate() {
        return props.data.running_mate_json.filter((x) => x.fields.running_mate == props.data.candidate_json[props.index].pk)[0]?.fields.candidate;
    }

    return (
        <div className="CandidateEditor">
            <div style={{display:"none"}}>{props.dummy2}</div>
            <h2 style={{textAlign:"center"}}>{props.data.candidate_json[props.index].fields.first_name} {props.data.candidate_json[props.index].fields.last_name}</h2>
            <TextInput icon="✍️" label="First Name" value={props.data.candidate_json[props.index].fields.first_name} setValue={setFirstName}/>
            <TextInput icon="✍️" label="Last Name" value={props.data.candidate_json[props.index].fields.last_name} setValue={setLastName}/>
            <TextInput icon="✍️" label="Party" value={props.data.candidate_json[props.index].fields.party} setValue={setParty}/>
            <TextInput icon="✍️" label="State" value={props.data.candidate_json[props.index].fields.state} setValue={setState}/>
            <Picker target="Candidate Color" color={props.data.candidate_json[props.index].fields.color_hex} setColor={setColor}></Picker>
            <TextInput label="Candidate Image" icon="🖼️" value={props.data.candidate_json[props.index].fields.image_url} setValue={setImageUrl}></TextInput>
            { props.data.candidate_json[props.index].fields.is_active ? (isRunningMate() ?
            <TextArea icon="✍️" label="Running Mate Description" value={props.data.candidate_json[props.index].fields.description_as_running_mate} setValue={setDescriptionAsRunningMate}/>
            :
            <TextArea icon="✍️" label="Candidate Description" value={props.data.candidate_json[props.index].fields.description} setValue={setDescription}/>) : ""}
            <CheckBox value={props.data.candidate_json[props.index].fields.is_active} setValue={setPlayable} icon="🖊️" label="Is Playable"></CheckBox>
            {props.data.candidate_json.length > 1 && props.data.candidate_json.filter((x) => x.fields.running_mate == false).length > 0 ? 
            <CheckBox value={props.data.candidate_json[props.index].fields.running_mate} setValue={setIsRunningMate} icon="🖊️" label="Is Running Mate"></CheckBox>
            : ""}
            {
                isRunningMate() &&
                (<div><label>Runs With:</label>
                <select onChange={(e) => setRunningMate(e.target.value)} value={getRunningMate()}>
                {props.data.candidate_json.filter((x) => x.fields.running_mate == false).map((x) =><option key={x.pk} value={x.pk}>{x.fields.first_name} {x.fields.last_name}</option>)}
                </select></div>)
            }
            <TextInput icon="✍️" label="PK" value={props.data.candidate_json[props.index].pk} setValue={setPk}/>
            <button onClick={deleteCandidate} style={{"display":"flex", "margin":"auto"}} className="EditorButton RedButton">Delete Candidate</button>
        </div>
    );
}

export default CandidateEditor;