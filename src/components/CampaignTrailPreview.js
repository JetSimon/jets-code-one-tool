import {React, useState} from "react";
import './CampaignTrailPreview.css'
import ElectionDescription from "./ElectionDescription";
import CandidateDescription from "./CandidateDescription";

function CampaignTrailPreview(props) {

    const [showElectionDescription, setShowElectionDescription] = useState(true);

    function getStyle() {
        let style = {

        }

        style.backgroundImage = `url('${props.backgroundImageUrl}')`;

        return style;
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
              <h2>THE CAMPAIGN TRAIL</h2>
            </div>
            {showElectionDescription ?
            <ElectionDescription setShowElectionDescription={setShowElectionDescription} credits={props.credits} electionImage={props.electionImage} electionSummary={props.electionSummary} electionYear={props.electionYear}></ElectionDescription>
            :
            <CandidateDescription dummy={props.dummy} candidate_json={props.candidate_json} setShowElectionDescription={setShowElectionDescription}></CandidateDescription>
            }  </div>
          
          </div>
          </div>
          </div>
          </div>
    )
}

export default CampaignTrailPreview;