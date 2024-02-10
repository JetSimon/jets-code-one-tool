import { React, useState, useEffect } from "react"
import TextInput from "./TextInput"
import TextArea from "./TextArea";
import Picker from "./Picker";
import CheckBox from './CheckBox'
import "./CandidateEditor.css"

function CandidateEditor(props) {

    const [firstName, setFirstName] = useState(props.candidate.fields.first_name);
    useEffect(() => {
        props.candidate_json[props.index].fields.first_name = firstName;
        props.setDummy(Math.random());
    }, [firstName]);

    const [lastName, setLastName] = useState(props.candidate.fields.last_name);
    useEffect(() => {
        props.candidate_json[props.index].fields.last_name = lastName;
        props.setDummy(Math.random());
    }, [lastName]);

    const [party, setParty] = useState(props.candidate.fields.party);
    useEffect(() => {
        props.candidate_json[props.index].fields.party = party;
        props.setDummy(Math.random());
    }, [party]);

    const [state, setState] = useState(props.candidate.fields.state);
    useEffect(() => {
        props.candidate_json[props.index].fields.state = state;
        props.setDummy(Math.random());
    }, [state]);

    const [description, setDescription] = useState(props.candidate.fields.description);
    useEffect(() => {
        props.candidate_json[props.index].fields.description = description;
        props.setDummy(Math.random());
    }, [state]);

    const [imageUrl, setImageUrl] = useState(props.candidate.fields.image_url);
    useEffect(() => {
        props.candidate_json[props.index].fields.image_url = imageUrl;
        props.setDummy(Math.random());
    }, [state]);

    const [pk, setPk] = useState(props.candidate.pk);
    useEffect(() => {
        props.candidate_json[props.index].pk = pk;
        props.setDummy(Math.random());
    }, [pk]);

    const [color, setColor] = useState(props.candidate.fields.color_hex);
    useEffect(() => {
        props.candidate_json[props.index].fields.color_hex = color;
        props.setDummy(Math.random());
    }, [color]);

    return (
        <div className="CandidateEditor">
            <div style={{display:"none"}}>{props.dummy2}</div>
            <h2 style={{textAlign:"center"}}>{firstName} {lastName}</h2>
            <TextInput icon="✍️" label="First Name" value={firstName} setValue={setFirstName}/>
            <TextInput icon="✍️" label="Last Name" value={lastName} setValue={setLastName}/>
            <TextInput icon="✍️" label="Party" value={party} setValue={setParty}/>
            <TextInput icon="✍️" label="State" value={state} setValue={setState}/>
            <Picker target="Candidate Color" color={color} setColor={setColor}></Picker>
            <TextInput label="Candidate Image" icon="🖼️" value={imageUrl} setValue={setImageUrl}></TextInput>
            <TextArea icon="✍️" label="Description" value={description} setValue={setDescription}/>
            <CheckBox icon="🖊️" label="Is Playable"></CheckBox>
            <TextInput icon="✍️" label="PK" value={pk} setValue={setPk}/>
        </div>
    );
}

export default CandidateEditor;