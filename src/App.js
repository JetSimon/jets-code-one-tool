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
import elections from './data/election'
import candidates from './data/candidate'
import runningMates from './data/running_mate.json'

let pkCounter = 50000;

for(let election of elections) {
  election.fields.display_year = String(election.fields.year);
}

for(let candidate of candidates) {
  candidate.fields.running_mate = runningMates.filter((x) => x.fields.running_mate == candidate.pk).length > 0;
}

elections.reverse();

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
    let nct_stuff = {};
    let jet_data = {};
    let RecReading = "";
    let quotes = [];
    let customquote = "";
    let corrr = "";

    if(fileContent.includes("//#startcode")) {
      fileContent = fileContent.split("//#startcode")[0] + fileContent.split("//#endcode")[1];
    }

    eval(fileContent);

    if(jet_data != null) {
      console.log(jet_data)
      setHeaderColor(jet_data.headerColor);
      setWindowColor(jet_data.windowColor);
      setContainerColor(jet_data.containerColor);
      setInnerWindowColor(jet_data.innerWindowColor);
    }

    setData(() => ({...campaignTrail_temp}))
  }

  function getCode() {
    let output = "";
    
    let electionPk = data.election_json[0].pk;

    let newData = JSON.parse(JSON.stringify(data));
    newData.opponents_default_json = [{"election":electionPk, "candidates":data.candidate_json.filter((x) => x.fields.running_mate == false).map((x) => x.pk)}]
    newData.opponents_weighted_json = [{"election":electionPk, "candidates":data.candidate_json.filter((x) => x.fields.running_mate == false).map((x) => x.pk)}]

    newData.temp_election_list[0].id = newData.election_json[0].pk;
    newData.temp_election_list[0].display_year = newData.election_json[0].fields.display_year;

    for(let key in newData) {
      output += "campaignTrail_temp." + key + " = " + JSON.stringify(newData[key], null, 4) + "\n\n";
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

    output += "\n\n//#startcode\n" + getThemeCode() + "\n//#endcode\n"
    return output;
  }

  function getThemeCode() {
    return `
nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "${headerColor}";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "${windowColor}";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "${containerColor}";

document.getElementById("header").src = "${bannerImageUrl}";

document.body.background = "${backgroundImageUrl}";
`
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(getCode());
  }

  function exportCode1() {
    const f = getCode();
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(f));
    element.setAttribute('download', data.election_json[0].fields.display_year + "_init.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const [mode, setMode] = useState("ALL");

  const [fullscreen, setFullscreen] = useState(true);

  const [headerColor, setHeaderColor] = useState("#700016");
  const [windowColor, setWindowColor] = useState("#BFE6FF");
  const [containerColor, setContainerColor] = useState("#FFFFFF");
  const [innerWindowColor, setInnerWindowColor] = useState("#E8FBFF")

  const [bannerImageUrl, setBannerImageUrl] = useState("https://jetsimon.com/public/placeholderbanner.png");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg");

  function addCandidate(x) {
    let newData = JSON.parse(JSON.stringify(data));
    let newCandidate = JSON.parse(JSON.stringify(defaultData.candidate_json[0]));
    newCandidate.pk = pkCounter++;
    newCandidate.fields.election = newData.election_json[0].pk;
    newData.candidate_json.push(newCandidate);
    setData(newData)
  }

  function setElectionYear(x) {
    let newData = JSON.parse(JSON.stringify(data));
    newData.election_json[0].fields.display_year = x;
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

  function selectTemplate(e) {
    let temp = {}
    temp.election_json = [elections.filter((x) => x.pk == e.target.value)[0]];
    temp.candidate_json = candidates.filter((x) => x.fields.election == e.target.value);
    let candidatePks = new Set(temp.candidate_json.map((x) => x.pk));
    temp.running_mate_json = runningMates.filter((x) => candidatePks.has(x.fields.candidate) || candidatePks.has(x.fields.running_mate));
    temp.credits = "Dan Bryan"
    setData(temp);
  }

  return (
    <div className="App">
      <Resizeable className="Editor">
        <h2 style={{textAlign:"center"}}>Jet's Code 1 Tool</h2>
        <a style={{textAlign:"center", "marginTop":"-16px"}} href="https://jetsimon.com/Jets-The-Campaign-Trail-Mod-Tool-Website/">Code 2 Tool Here</a>
        <div className="FilterBar">
          <button className="EditorButton" onClick={openFilePicker}>Import Code 1</button>
          <button className="EditorButton" onClick={exportCode1}>Export Code 1</button>
          <button className="EditorButton" onClick={copyToClipboard}>Copy to Clipboard</button>
          <div style={{margin:"auto"}}>
          <label>Or choose a template</label>
          <select onChange={selectTemplate}>
              {elections.map((x) =><option key={x.pk} value={x.pk}>{x.fields.display_year}</option>)}
          </select>
          </div>
        </div>

        <div class="FilterBar">
          <button className={"FilterButton" + (mode == "ALL" ? " SelectedFilterButton" : "")} onClick={() => setMode("ALL")}>All</button>
          <button className={"FilterButton" + (mode == "THEME" ? " SelectedFilterButton" : "")} onClick={() => setMode("THEME")}>Theme</button>
          <button className={"FilterButton" + (mode == "ELECTION" ? " SelectedFilterButton" : "")} onClick={() => setMode("ELECTION")}>Election</button>
          <button className={"FilterButton" + (mode == "CANDIDATES" ? " SelectedFilterButton" : "")} onClick={() => setMode("CANDIDATES")}>Candidates</button>
          <button className={"FilterButton" + (mode == "MISC" ? " SelectedFilterButton" : "")} onClick={() => setMode("MISC")}>Misc</button>
        </div>

        <div className="Settings" style={{display:(mode == "ALL" || mode == "THEME") ? "flex" : "none"}}>
        <h3>Theme</h3>
        <Picker target="Header Color" color={headerColor} setColor={setHeaderColor}></Picker>
        <Picker target="Window Color" color={windowColor} setColor={setWindowColor}></Picker>
        <Picker target="Container Color" color={containerColor} setColor={setContainerColor}></Picker>
        <Picker target="Inner Window Color" color={innerWindowColor} setColor={setInnerWindowColor}></Picker>
        <TextInput label="Banner Image URL" icon="🖼️" value={bannerImageUrl} setValue={setBannerImageUrl}></TextInput>
        <TextInput label="Background Image URL" icon="🖼️" value={backgroundImageUrl} setValue={setBackgroundImageUrl}></TextInput>
        </div>

        <div className="Settings" style={{display:(mode == "ALL" || mode == "ELECTION") ? "flex" : "none"}}>
        <h3>Election</h3>
        <TextInput label="Displayed Election Year" icon="✍️" value={data.election_json[0].fields.display_year} setValue={setElectionYear}></TextInput>
        <TextInput label="Election Image" icon="🖼️" value={data.election_json[0].fields.image_url} setValue={setElectionImage}></TextInput>
        <TextInput label="Advisor Image" icon="🖼️" value={data.election_json[0].fields.advisor_url} setValue={setAdvisorImage}></TextInput>
        <TextArea label="Election Summary" icon="✍️" value={data.election_json[0].fields.summary} setValue={setElectionSummary}></TextArea>
        </div>

        <div className="Settings" style={{display:(mode == "ALL" || mode == "CANDIDATES") ? "flex" : "none"}}>
          <h3>Candidates ({data.candidate_json.length})</h3>
          <button className="EditorButton GreenButton" onClick={addCandidate}>Add Candidate</button>
          {data.candidate_json.map((x) => <CandidateEditor setData={setData} key={data.candidate_json.indexOf(x)} index={data.candidate_json.indexOf(x)} data={data}></CandidateEditor>)}
        </div> 

        <div className="Settings" style={{display:(mode == "ALL" || mode == "MISC") ? "flex" : "none"}}>
          <h3>Misc</h3>
          <TextInput label="Credits" icon="🧍" value={data.credits} setValue={setCredits}></TextInput>
        </div>

        <p style={{textAlign:"center",fontSize:"10px", color:"lightgrey"}}>version 1.0.1</p>

      </Resizeable>
      <div style={{width:"100%"}}>
        <CampaignTrailPreview innerWindowColor={innerWindowColor} data={data} credits={data.credits} electionImage={data.election_json[0].fields.image_url} electionSummary={data.election_json[0].fields.summary} electionYear={data.election_json[0].fields.display_year} fullscreen={fullscreen} headerColor={headerColor} windowColor={windowColor} containerColor={containerColor} backgroundImageUrl={backgroundImageUrl} bannerImageUrl={bannerImageUrl}/>
      </div>
    </div>
  );
}

export default App;
