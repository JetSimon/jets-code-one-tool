import {React, useState, useEffect} from "react"
import { useFilePicker } from 'use-file-picker';
import Editor from "./Editor";
import defaultData from "./data/DefaultData";

function App() {

  const [ data, setData ] = useState(defaultData);

  const { openFilePicker, filesContent, loading } = useFilePicker({
    accept: '.txt',
    onFilesSuccessfullySelected: ({ plainFiles, filesContent }) => {
      loadTheme(filesContent[0].content);
    }
  });

  function loadTheme(fileContent) {
    let campaignTrail_temp = {};
    let e = campaignTrail_temp;
    let jet_data = {};

    eval(fileContent);

    /*if(jet_data != null) {
      console.log(jet_data)
      setHeaderColor(jet_data.headerColor);
      setWindowColor(jet_data.windowColor);
      setContainerColor(jet_data.containerColor);
      setInnerWindowColor(jet_data.innerWindowColor);
    }

    setData(e)

    setCredits(e.credits);

    let election = e.election_json[0].fields;
    setElectionYear(election.year);
    setElectionImage(election.image_url);
    setAdvisorImage(election.advisor_url);
    setElectionSummary(election.summary);
    setCandidateJson(e.candidate_json);
    setDummy(Math.random());
    setDummy2(Math.random());

    console.log(e.candidate_json, candidate_json)*/

    setData(campaignTrail_temp);
  }

  return (
      <Editor data={data} openFilePicker={openFilePicker}/>
  )
}

export default App;
