import {React, useState, useEffect} from "react"
import CampaignTrailPreview from "./components/CampaignTrailPreview";
import Picker from "./components/Picker";
import TextInput from "./components/TextInput";
import "./Amusa.css"
import "./App.css"
import Resizeable from "./utils/Resizeable";
import TextArea from "./components/TextArea";
import CandidateEditor from "./components/CandidateEditor";

function Editor(props) {
    function exportTheme() {
        let output = "";
        for(let key in props.data) {
          output += "campaignTrail_temp." + key + " = " + JSON.stringify(props.data[key], null, 4) + "\n\n";
        }
    
        let jet_data = {
          "headerColor":headerColor,
          "windowColor":windowColor,
          "containerColor":containerColor,
          "innerWindowColor":innerWindowColor,
          "bannerImageUrl":bannerImageUrl,
          "backgroundImageUrl":backgroundImageUrl
        }
    
        output += "jet_data = " + JSON.stringify(jet_data, null, 4);
    
        navigator.clipboard.writeText(output);
      }
    
      const [fullscreen, setFullscreen] = useState(true);
    
      const [headerColor, setHeaderColor] = useState("#700016");
      const [windowColor, setWindowColor] = useState("#BFE6FF");
      const [containerColor, setContainerColor] = useState("#FFFFFF");
      const [innerWindowColor, setInnerWindowColor] = useState("#E8FBFF")
    
      const [bannerImageUrl, setBannerImageUrl] = useState("https://jetsimon.com/public/placeholderbanner.png");
      const [backgroundImageUrl, setBackgroundImageUrl] = useState("https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg");
      
      const [electionYear, setElectionYear] = useState(props.data.election_json[0].fields.year);
      useEffect(() => { props.data.election_json[0].fields.year = electionYear }, [electionYear]);
     
      const [electionImage, setElectionImage] = useState(props.data.election_json[0].fields.image_url);
      useEffect(() => { props.data.election_json[0].fields.image_url = electionImage }, [electionImage]);
     
      const [advisorImage, setAdvisorImage] = useState(props.data.election_json[0].fields.advisor_url);
      useEffect(() => { props.data.election_json[0].fields.advisor_url = advisorImage }, [advisorImage]);
     
      const [electionSummary, setElectionSummary] = useState(props.data.election_json[0].fields.summary);
      useEffect(() => { props.data.election_json[0].fields.summary = electionSummary }, [electionSummary]);
    
      const [credits, setCredits] = useState(props.data.credits);
      useEffect(() => { props.data.credits = credits}, [credits]);
    
      const[candidate_json, setCandidateJson] = useState(props.data.candidate_json);
      useEffect(() => { props.data.candidate_json = candidate_json } , [candidate_json]);
    
      const [dummy, setDummy] = useState(Math.random())
      const [dummy2, setDummy2] = useState(Math.random());
    
      return (
        <div className="App">
          <Resizeable className="Editor">
            <div>
              <button onClick={props.openFilePicker}>Import</button>
              <button onClick={exportTheme}>Export</button>
            </div>
            <h3>Theme</h3>
            <Picker target="Header Color" color={headerColor} setColor={setHeaderColor}></Picker>
            <Picker target="Window Color" color={windowColor} setColor={setWindowColor}></Picker>
            <Picker target="Container Color" color={containerColor} setColor={setContainerColor}></Picker>
            <Picker target="Inner Window Color" color={innerWindowColor} setColor={setInnerWindowColor}></Picker>
            <TextInput label="Banner Image URL" icon="🖼️" value={bannerImageUrl} setValue={setBannerImageUrl}></TextInput>
            <TextInput label="Background Image URL" icon="🖼️" value={backgroundImageUrl} setValue={setBackgroundImageUrl}></TextInput>
    
            <h3>Election</h3>
            <TextInput label="Election Year" icon="✍️" value={electionYear} setValue={setElectionYear}></TextInput>
            <TextInput label="Election Image" icon="🖼️" value={electionImage} setValue={setElectionImage}></TextInput>
            <TextInput label="Advisor Image" icon="🖼️" value={advisorImage} setValue={setAdvisorImage}></TextInput>
            <TextArea label="Election Summary" icon="✍️" value={electionSummary} setValue={setElectionSummary}></TextArea>
    
            <details open>
            <summary><h3>Candidates</h3></summary>
            {candidate_json.map((x) => <CandidateEditor dummy2={dummy2} setDummy={setDummy} key={candidate_json.indexOf(x)} index={candidate_json.indexOf(x)} candidate_json={candidate_json} candidate={x}></CandidateEditor>)}
            </details>
            
            <h3>Misc</h3>
            <TextInput label="Credits" icon="🧍" value={credits} setValue={setCredits}></TextInput>
    
            <button onClick={() => console.log(props.data)}>Log Data</button>
          </Resizeable>
          <div style={{width:"100%"}}>
            <CampaignTrailPreview innerWindowColor={innerWindowColor} dummy={dummy} candidate_json={candidate_json} credits={credits} electionImage={electionImage} electionSummary={electionSummary} electionYear={electionYear} fullscreen={fullscreen} headerColor={headerColor} windowColor={windowColor} containerColor={containerColor} backgroundImageUrl={backgroundImageUrl} bannerImageUrl={bannerImageUrl}/>
          </div>
        </div>
      );
}

export default Editor;