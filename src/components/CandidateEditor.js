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
        console.log(x)
        newData.candidate_json[props.index].fields.is_active = x ? 1 : 0;
        props.setData(newData);
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
            <TextArea icon="✍️" label="Description" value={props.data.candidate_json[props.index].fields.description} setValue={setDescription}/>
            <CheckBox value={props.data.candidate_json[props.index].fields.is_active} setValue={setPlayable} icon="🖊️" label="Is Playable"></CheckBox>
            <TextInput icon="✍️" label="PK" value={props.data.candidate_json[props.index].pk} setValue={setPk}/>
        </div>
    );
}

export default CandidateEditor;