import {React, useState} from "react";
import './CampaignTrailPreview.css'
import ElectionDescription from "./ElectionDescription";
import CandidateDescription from "./CandidateDescription";
import RunningMateDescription from "./RunningMateDescription";

function CampaignTrailPreview(props) {

    const [currentMode, setCurrentMode] = useState("ELECTION");

    function getStyle() {
        let style = {

        }

        style.backgroundImage = `url('${props.backgroundImageUrl}')`;

        return style;
    }  

    function getWindowComponent() {
      if(currentMode == "ELECTION") {
        return <ElectionDescription innerWindowColor={props.innerWindowColor} setCurrentMode={setCurrentMode} credits={props.credits} electionImage={props.electionImage} electionSummary={props.electionSummary} electionYear={props.electionYear}></ElectionDescription>
      }  
      else if(currentMode == "CANDIDATE") {
        return <CandidateDescription innerWindowColor={props.innerWindowColor} data={props.data} setCurrentMode={setCurrentMode}></CandidateDescription>
      }
      else if(currentMode == "RUNNINGMATE") {
        return <RunningMateDescription innerWindowColor={props.innerWindowColor} data={props.data} setCurrentMode={setCurrentMode}></RunningMateDescription>
      }
      return <p>ERROR BAD MODE</p>
    }

    return (
    <div className={(props.fullscreen ? "Fullscreen" : "NotFullscreen") + " CampaignTrailPreview base"} style={getStyle()}>
    <div className="container" style={{backgroundColor:props.containerColor}}>
      <center>
        <img src={props.bannerImageUrl} id="header" width="1000"></img>
      </center>
      <div className="menu_bar_login"></div>
      <div className="content_box">
        <div className="content_single">
          <div id="game_window" style={{backgroundColor:props.windowColor}}>
            <div className="game_header" style={{backgroundColor:props.headerColor}}>
              <h2>{props.gameTitle}</h2>{props.customQuote != "" ? <font id='wittyquote' size='4' color='white'><em>{props.customQuote}</em></font> : ""}
            </div>
            {getWindowComponent()}
            </div>
          
          </div>
          </div>
          </div>
          </div>
    )
}

export default CampaignTrailPreview;