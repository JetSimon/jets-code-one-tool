import {React, useState, useEffect} from "react"
import CampaignTrailPreview from "./components/CampaignTrailPreview";
import Picker from "./components/Picker";
import TextInput from "./components/TextInput";
import "./Amusa.css"
import "./App.css"
import Resizeable from "./utils/Resizeable";
import TextArea from "./components/TextArea";
import defaultData from "./data/DefaultData";
import CandidateEditor from "./components/CandidateEditor";

let data = defaultData;

console.log(data)

function App() {

  const [fullscreen, setFullscreen] = useState(true);

  const [headerColor, setHeaderColor] = useState("#700016");
  const [windowColor, setWindowColor] = useState("#BFE6FF");
  const [containerColor, setContainerColor] = useState("#FFFFFF");

  const [bannerImageUrl, setBannerImageUrl] = useState("https://campaign-trail-showcase.github.io/static/images/banners/tct_banner.png");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("https://campaign-trail-showcase.github.io/static/images/backgrounds/tct_background.png");
  
  const [electionYear, setElectionYear] = useState(data.election_json[0].fields.year);
  useEffect(() => { data.election_json[0].fields.year = electionYear }, [electionYear]);
 
  const [electionImage, setElectionImage] = useState(data.election_json[0].fields.image_url);
  useEffect(() => { data.election_json[0].fields.image_url = electionImage }, [electionImage]);
 
  const [advisorImage, setAdvisorImage] = useState(data.election_json[0].fields.advisor_url);
  useEffect(() => { data.election_json[0].fields.advisor_url = advisorImage }, [advisorImage]);
 
  const [electionSummary, setElectionSummary] = useState(data.election_json[0].fields.summary);
  useEffect(() => { data.election_json[0].fields.summary = electionSummary }, [electionSummary]);

  const [credits, setCredits] = useState(data.credits);
  useEffect(() => { data.credits = credits}, [credits]);

  const[candidate_json, setCandidateJson] = useState(data.candidate_json);
  useEffect(() => { data.candidate_json = candidate_json } , [candidate_json]);

  const [dummy, setDummy] = useState(Math.random());

  return (
    <div className="App">
      <Resizeable className="Editor">
        <h3>Theme</h3>
        <Picker target="Header Color" color={headerColor} setColor={setHeaderColor}></Picker>
        <Picker target="Window Color" color={windowColor} setColor={setWindowColor}></Picker>
        <Picker target="Container Color" color={containerColor} setColor={setContainerColor}></Picker>
        <TextInput label="Banner Image URL" icon="🖼️" value={bannerImageUrl} setValue={setBannerImageUrl}></TextInput>
        <TextInput label="Background Image URL" icon="🖼️" value={backgroundImageUrl} setValue={setBackgroundImageUrl}></TextInput>

        <h3>Election</h3>
        <TextInput label="Election Year" icon="✍️" value={electionYear} setValue={setElectionYear}></TextInput>
        <TextInput label="Election Image" icon="🖼️" value={electionImage} setValue={setElectionImage}></TextInput>
        <TextInput label="Advisor Image" icon="🖼️" value={advisorImage} setValue={setAdvisorImage}></TextInput>
        <TextArea label="Election Summary" icon="✍️" value={electionSummary} setValue={setElectionSummary}></TextArea>

        <details open>
        <summary><h3>Candidates</h3></summary>
        {candidate_json.map((x) => <CandidateEditor setDummy={setDummy} key={candidate_json.indexOf(x)} index={candidate_json.indexOf(x)} candidate_json={candidate_json} candidate={x} setCandidateJson={setCandidateJson}></CandidateEditor>)}
        </details>
        
        <h3>Misc</h3>
        <TextInput label="Credits" icon="🧍" value={credits} setValue={setCredits}></TextInput>

        <button onClick={() => console.log(data)}>Log Data</button>
      </Resizeable>
      <div style={{width:"100%"}}>
        <CampaignTrailPreview dummy={dummy} candidate_json={candidate_json} credits={credits} electionImage={electionImage} electionSummary={electionSummary} electionYear={electionYear} fullscreen={fullscreen} headerColor={headerColor} windowColor={windowColor} containerColor={containerColor} backgroundImageUrl={backgroundImageUrl} bannerImageUrl={bannerImageUrl}/>
      </div>
    </div>
  );
}

export default App;
