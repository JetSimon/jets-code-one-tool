import React from "react";

let defaultData = {}

defaultData.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "summary": "<div style='overflow-y:scroll;height:200px;'><p>Here you concisely describe how the race for this office shapes up. If it fits neatly into the space, it is concise enough.</p><p><ul><li>You can use bullet points to go one by one,</li><li>or choose not to. Depends on how you wish to introduce the candidates.</li></p><p>Remember to format properly or something <i>will</i> go wrong. Happy modding!</p></div>",
            "image_url": "123",
            "winning_electoral_vote_number": 270,
            "advisor_url": "123",
            "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
];

defaultData.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "123"
    }
];

defaultData.credits = "jjet";

defaultData.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 25,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
];

defaultData.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 1001,
        "fields": {
            "first_name": "Dummy",
            "last_name": "Example",
            "election": 20,
            "party": "Example Party",
            "state": "Hell",
            "priority": 1,
            "description": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "../static/images/barack-obama-2012.jpg",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": null,
            "candidate_score": 1
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1002,
        "fields": {
            "first_name": "Dummy",
            "last_name": "Example",
            "election": 20,
            "party": "Example Party",
            "state": "Hell",
            "priority": 1,
            "description": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "color_hex": "#0000ff",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "../static/images/barack-obama-2012.jpg",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "candidate_score": 1,
            "running_mate": true,
            "scrollable": false,
            "partner": "0"
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1003,
        "fields": {
            "first_name": "Dummy",
            "last_name": "Example",
            "election": 20,
            "party": "Example Party",
            "state": "Hell",
            "priority": 1,
            "description": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "../static/images/barack-obama-2012.jpg",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": null,
            "candidate_score": 1
        }
    }
];

defaultData.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 2001,
        "fields": {
            "candidate": 1001,
            "running_mate": 1002
        }
    }
];

export default defaultData;