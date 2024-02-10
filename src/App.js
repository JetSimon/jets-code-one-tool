import {React, useState, useEffect} from "react"
import { useFilePicker } from 'use-file-picker';
import defaultData from "./data/DefaultData";
import CampaignTrailPreview from "./components/CampaignTrailPreview";
import Picker from "./components/Picker";
import TextInput from "./components/TextInput";
import "./Amusa.css"
import "./App.css"
import Resizeable from "./utils/Resizeable";
import TextArea from "./components/TextArea";
import CandidateEditor from "./components/CandidateEditor";

function App() {

  const { openFilePicker, filesContent, loading } = useFilePicker({
    accept: '.txt',
    onFilesSuccessfullySelected: ({ plainFiles, filesContent }) => {
      loadTheme(filesContent[0].content);
    }
  });

  const [data, setData] = useState(defaultData);

  function loadTheme(fileContent) {
    let campaignTrail_temp = {};
    let e = campaignTrail_temp;
    let jet_data = {};

    eval(fileContent);

    if(jet_data != null) {
      console.log(jet_data)
      setHeaderColor(jet_data.headerColor);
      setWindowColor(jet_data.windowColor);
      setContainerColor(jet_data.containerColor);
      setInnerWindowColor(jet_data.innerWindowColor);
    }

    let election = e.election_json[0].fields;

    setData(() => ({...campaignTrail_temp}))
  }

  function exportTheme() {
    let output = "";
    for(let key in data) {
      output += "campaignTrail_temp." + key + " = " + JSON.stringify(data[key], null, 4) + "\n\n";
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

  function setElectionYear(x) {
    let newData = JSON.parse(JSON.stringify(data));
    newData.election_json[0].fields.year = x;
    setData(newData)
  }

  function setElectionImage(x) {
    let newData = JSON.parse(JSON.stringify(data));
    newData.election_json[0].fields.image_url = x;
    setData(newData);
  }

  function setAdvisorImage(x) {
    let newData = JSON.parse(JSON.stringify(data));
    newData.election_json[0].fields.advisor_url = x;
    setData(newData);
  }

  function setElectionSummary(x) {
    let newData = JSON.parse(JSON.stringify(data));
    newData.election_json[0].fields.summary = x;
    setData(newData);
  }

  function setCredits(x) {
    let newData = JSON.parse(JSON.stringify(data));
    newData.credits = x;
    setData(newData);
  }

  return (
    <div className="App">
      <Resizeable className="Editor">
        <div>
          <button onClick={openFilePicker}>Import</button>
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
        <TextInput label="Election Year" icon="✍️" value={data.election_json[0].fields.year} setValue={setElectionYear}></TextInput>
        <TextInput label="Election Image" icon="🖼️" value={data.election_json[0].fields.image_url} setValue={setElectionImage}></TextInput>
        <TextInput label="Advisor Image" icon="🖼️" value={data.election_json[0].fields.advisor_url} setValue={setAdvisorImage}></TextInput>
        <TextArea label="Election Summary" icon="✍️" value={data.election_json[0].fields.summary} setValue={setElectionSummary}></TextArea>

        <details open>
        <summary><h3>Candidates</h3></summary>
        {data.candidate_json.map((x) => <CandidateEditor setData={setData} key={data.candidate_json.indexOf(x)} index={data.candidate_json.indexOf(x)} data={data} candidate={x}></CandidateEditor>)}
        </details>
        
        <h3>Misc</h3>
        <TextInput label="Credits" icon="🧍" value={data.credits} setValue={setCredits}></TextInput>

        <button onClick={() => console.log(data)}>Log Data</button>
      </Resizeable>
      <div style={{width:"100%"}}>
        <CampaignTrailPreview innerWindowColor={innerWindowColor} data={data} credits={data.credits} electionImage={data.election_json[0].fields.image_url} electionSummary={data.election_json[0].fields.summary} electionYear={data.election_json[0].fields.year} fullscreen={fullscreen} headerColor={headerColor} windowColor={windowColor} containerColor={containerColor} backgroundImageUrl={backgroundImageUrl} bannerImageUrl={bannerImageUrl}/>
      </div>
    </div>
  );
}

export default App;
