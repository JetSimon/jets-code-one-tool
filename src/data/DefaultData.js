import React from "react";

let defaultData = {}

defaultData.election_json = [
{
    "model": "campaign_trail.election",
    "pk": 9,
    "fields": {
        "year": 1980,
        "summary": "<div style='overflow-y:scroll;height:200px;'><p>A nation gripped by malaise beckons home the traditional ideals which brought her to greatness. The value of the dollar has plummeted such that everyday expenses threaten to bankrupt the working family. Gasoline shortages inspire such great panic that Americans shoot each other dead just for the chance at refueling their cars. Tehran's newly seated Islamic Republican government threatens to upend the tentatively held Middle Eastern order. America is a nation scarred by the tumultuous two decades previous, and by and large, blames the Democratic Party for its fall from grace.</p><p>As the Presidential Election of 1980 nears, Terry Dolan and the National Conservative Political Action Committee have marked five incumbent Democratic Senators for death. Vowing to do whatever necessary to upend the liberal order which brought America from the prosperity of the 50's and hope of the 60's to the despair of the 70's, a Republican revolution seems inevitable.</p></div>",
        "image_url": "https://cdn.discordapp.com/attachments/543656386299428864/1204516917176438795/Opener.png?ex=65d504cb&is=65c28fcb&hm=3c87ed7e2172d70de36dd0545f2ba896d826989578017f003d4ba31c430187d8&",
        "winning_electoral_vote_number": 270,
        "advisor_url": "https://cdn.discordapp.com/attachments/543656386299428864/1204517150468079676/Alone.png?ex=65d50503&is=65c29003&hm=06a053b04924b61ced47dfec24e6abe31d1a68e8139b6ee9a03f38b2c8ab9937&",
        "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
        "has_visits": 1,
        "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
    }
}
];

defaultData.temp_election_list = [
    {
        "id": 9,
        "year": 2000,
        "is_premium": 0,
        "display_year": "1980"
    }
];

defaultData.credits = "Komnothun";

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
            "question_count": 30,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
];

defaultData.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 131,
        "fields": {
            "first_name": "George",
            "last_name": "McGovern",
            "election": 9,
            "party": "Democratic",
            "state": "Mitchell, Davison County",
            "priority": 1,
            "description": "<div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'>\"<em>He may be a liberal, but he's a South Dakotan.</em>\"<br>- Roger Kasa, editor of <em>The Huron Daily Plainsman</em></p><p>George McGovern isn't a man who gives up. Flattened by the Nixon march in 1972, South Dakota's premier liberal returned back to his home state which voted for the Republicans by nearly ten points and prepared himself for the next election. Vindicated in the wake of the Watergate hearings and the resignation of President Nixon, McGovern did not grow complacent. No, even when buoyed with such advantages, the prairie statesman fought like hell against the man he called his most difficult and worthy opponent. Since that race six years prior, it has grown difficult for even the most enthusiastic McGovern supporter to be optimistic about the fall contest.</p><p>Sanguine as always, McGovern has dedicated his time to campaigning for Senator Ted Kennedy in his contest against the incumbent Carter. Perhaps, somewhere within the recesses of his mind, maybe he saw himself in the impossible challenge Kennedy faced. Outwardly all smiles in the face of polling that has him thirty points underwater, his wife Eleanor and his trusted aide George Cunningham have been privy to a very different man; a frustrated McGovern, a tired McGovern-- an unhappy warrior. It feels inevitable, but the prairie statesman doesn't believe in concepts such as. If he can fight, if he can make a difference, then he will, as he's always done.</div></div>",
            "color_hex": "#6f8faf",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://cdn.discordapp.com/attachments/543656386299428864/1204525657636474982/graaahhh.png?ex=65d50cef&is=65c297ef&hm=6890784b16af6512b9eebcb06ffa9c92e66cf26b49327128ce4bd2feb45349a4&",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": "<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'><em>On one hand, entering the race gives me pause. On the other, it makes me angry. Why should this be ridiculous? It may be a long shot. It may be that there's little opportunity to succeed. But why should it be ridiculous?</em></p><p>Posture ossified, eyes leered, and wrestling between a frown and scowl, Larry Agran barely allowed the interview to conclude before ripping off his clip-on microphone. In what was sold as an interview on his thoughts on the impending Democratic dogfight taking place an hour's plane ride north of his former fiefdom of Irvine, he found the same slanderous and demeaning attacks on his character that had grown to dominate his every public appearance. Rather than appreciate the effort that went into garnering the recognition of the United Nations as <q>the global mayor</q> for his momentous achievements in reducing carbon emissions or personally facilitating arms control negotiations as mayor of a town of 50,000 people, they'd rather pester him over plausibility. What was so crazy about saying George McGovern could beat Ronald Reagan in November?</p>Banished from the mayoral office only six days prior and demoted to the unimaginative ranks of the city council, attending an open convention was like a trip to Disney World for the workaholic ladder-climber. Gleefully lending himself to any warmbody with a camera, microphone, and network to broadcast, Agran yearned to spread the word about the next President of the United States, his old hero-- George McGovern. There was a significant liberal constituency- a McGovern Veto- who had exercised their power this year, rejecting the coronation of Mondale and the centrism of Hart. Yet, the question came all the same, <q>Sure, Councilman Agran, but who do you <em>really</em> think will win?</q> It frustrated him to no end.</p><p>Nonetheless, he maneuvered his way through the suffocating crowds on the convention floor. As he elbowed his way through the masses, his flaring temper molted into a burning passion. In the chaos, he would make this convention a rallying point for those unashamed to be liberal; to send a message and a President to Washington. He had a plan, and all he to find was George McGovern.</p></div></div></div>",
            "candidate_score": 1,
            "running_mate": false,
            "scrollable": false,
            "partner": "1"
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 133,
        "fields": {
            "first_name": "Wayne",
            "last_name": "Peterson",
            "election": 9,
            "party": "Democratic",
            "state": "Mitchell, Davison County",
            "priority": 1,
            "description": "<div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'>\"<em>He may be a liberal, but he's a South Dakotan.</em>\"<br>- Roger Kasa, editor of <em>The Huron Daily Plainsman</em></p><p>George McGovern isn't a man who gives up. Flattened by the Nixon march in 1972, South Dakota's premier liberal returned back to his home state which voted for the Republicans by nearly ten points and prepared himself for the next election. Vindicated in the wake of the Watergate hearings and the resignation of President Nixon, McGovern did not grow complacent. No, even when buoyed with such advantages, the prairie statesman fought like hell against the man he called his most difficult and worthy opponent. Since that race six years prior, it has grown difficult for even the most enthusiastic McGovern supporter to be optimistic about the fall contest.</p><p>Sanguine as always, McGovern has dedicated his time to campaigning for Senator Ted Kennedy in his contest against the incumbent Carter. Perhaps, somewhere within the recesses of his mind, maybe he saw himself in the impossible challenge Kennedy faced. Outwardly all smiles in the face of polling that has him thirty points underwater, his wife Eleanor and his trusted aide George Cunningham have been privy to a very different man; a frustrated McGovern, a tired McGovern-- an unhappy warrior. It feels inevitable, but the prairie statesman doesn't believe in concepts such as. If he can fight, if he can make a difference, then he will, as he's always done.</div></div>",
            "color_hex": "#6f8faf",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://cdn.discordapp.com/attachments/543656386299428864/1204525657636474982/graaahhh.png?ex=65d50cef&is=65c297ef&hm=6890784b16af6512b9eebcb06ffa9c92e66cf26b49327128ce4bd2feb45349a4&",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": "<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'><em>On one hand, entering the race gives me pause. On the other, it makes me angry. Why should this be ridiculous? It may be a long shot. It may be that there's little opportunity to succeed. But why should it be ridiculous?</em></p><p>Posture ossified, eyes leered, and wrestling between a frown and scowl, Larry Agran barely allowed the interview to conclude before ripping off his clip-on microphone. In what was sold as an interview on his thoughts on the impending Democratic dogfight taking place an hour's plane ride north of his former fiefdom of Irvine, he found the same slanderous and demeaning attacks on his character that had grown to dominate his every public appearance. Rather than appreciate the effort that went into garnering the recognition of the United Nations as <q>the global mayor</q> for his momentous achievements in reducing carbon emissions or personally facilitating arms control negotiations as mayor of a town of 50,000 people, they'd rather pester him over plausibility. What was so crazy about saying George McGovern could beat Ronald Reagan in November?</p>Banished from the mayoral office only six days prior and demoted to the unimaginative ranks of the city council, attending an open convention was like a trip to Disney World for the workaholic ladder-climber. Gleefully lending himself to any warmbody with a camera, microphone, and network to broadcast, Agran yearned to spread the word about the next President of the United States, his old hero-- George McGovern. There was a significant liberal constituency- a McGovern Veto- who had exercised their power this year, rejecting the coronation of Mondale and the centrism of Hart. Yet, the question came all the same, <q>Sure, Councilman Agran, but who do you <em>really</em> think will win?</q> It frustrated him to no end.</p><p>Nonetheless, he maneuvered his way through the suffocating crowds on the convention floor. As he elbowed his way through the masses, his flaring temper molted into a burning passion. In the chaos, he would make this convention a rallying point for those unashamed to be liberal; to send a message and a President to Washington. He had a plan, and all he to find was George McGovern.</p></div></div></div>",
            "candidate_score": 1,
            "running_mate": false,
            "scrollable": false,
            "partner": "1"
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 132,
        "fields": {
            "first_name": "James",
            "last_name": "Abdnor",
            "election": 9,
            "party": "Republican",
            "state": "Kennebec, Lyman County",
            "priority": 1,
            "description": "<div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'>\"<em>The way I see it, this election is not between McGovern and Abdnor, it's a referendum on me.</em>\" <br> - George McGovern.</p><p>There's very little James Abdnor hasn't accomplished in South Dakota. Chief clerk of the State legislature, chairman of the Young Republicans, state Senator, Lieutenant Governor, and federal Representative, one would imagine him to be a charming, ambitious man. This could not be further from the truth. Short, crowd averse, and suffering from a speech imepediment, Abdnor has found success because of his faults, not despite them. The man many expect Abdnor to be are the men the people of South Dakota are not. What he lacks in oration and wealth, he more than makes up for in his modesty, honesty, ability to compromise. His aw-shucks demeanor seems bizarrely out of place when juxtaposed against the national background.</p><p>The Republican Party seems poised to dominate the impending Congressional elections, even while Carter enjoys a polling advantage against the front-runner Ronald Reagan. For all intents and purposes, Abdnor simply must stay on this side of the soil to win this election, or at least that's what he's been told. Sure, he enjoys numerous advantageous, but he's been around in South Dakota politics for long enough not to count George out too soon. Despite his <em>Mr. Smith Goes to Washington</em> persona, Abdnor has no intention of impeding the conservative firestorm brewing against his opponent. South Dakotans deserve a Senator who truly represents them, and who better than a pro-life former farmer with an R next to his name?</div></div></div>",
            "color_hex": "#b83d3d",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://cdn.discordapp.com/attachments/543656386299428864/1204527308757663784/abndor.png?ex=65d50e79&is=65c29979&hm=469dab33af7d940a09ea74d6ef63d4c68f64e522d12edf900e403bee524978f0&",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false,
            "scrollable": false,
            "partner": "0"
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 16064,
        "fields": {
            "first_name": "",
            "last_name": "DSCC",
            "election": 9,
            "Role": "REMOVE THIS FOR THEM",
            "state": "REMOVE THIS FOR THEM ",
            "priority": 1,
            "description": "<div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'>\"<em>If I think enough of him to travel 1500 miles, the man who said, 'I can't vote for you,' the people of South Dakota should think enough of him to go to the polls. It's too late when the polls are closed to say, 'I wish I had.'</em>\"<br> - Senate Majority Leader Robert Byrd, speaking on behalf of George McGovern in Mitchell.</p><p>The Democratic Senatorial Campaign Committee, headed by Kentucky Senator Wendell Ford, faces what seems to be a nigh impossible challenge. Somewhat ironically, the Democratic Party is poised to suffer from their own electoral success. Flush with Democratic incumbents, DSCC leadership must ration what available resources at their disposal between its sitting members and what pick-ups seem possible to expand the majority. Georgia, North Carolina, Vermont, Pennsylvania, and New York-- the states where cash will rain like bombs and ads thunder as the sound of distant explosions. To many senior Democrats, these states will decide the fate of the Senate, and South Dakota certainly won't.</p><p>Senator McGovern has not been left out to dry by any means, but its no secret that if any of his colleagues are to go down, he is expected to go first and hardest. In lieu of relying upon the assistance of the national apparatus, McGovern will turn to what he always has-- his community.</p><p>Although ruby red as they come, the South Dakota Democratic Party has seen success at propelling discounted candidates to the federal government despite the odds. Keeping the prairie statesman in Washington will require the herculean effort of local organizers, party leaders, and McGovern himself to prove to the DSCC that this race is not only worth fighting for, but winnable.</p></div></div></div>",
            "color_hex": "#0000ff",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://cdn.discordapp.com/attachments/543656386299428864/1204605146168954910/download.png?ex=65d556f7&is=65c2e1f7&hm=a9e096fc32249883384a2ad0fbea944cae513b0a9ea4031610bf25f968652a1a&",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": "<div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'>\"<em>If I think enough of him to travel 1500 miles, the man who said, 'I can't vote for you,' the people of South Dakota should think enough of him to go to the polls. It's too late when the polls are closed to say, 'I wish I had.'</em>\"<br> - Senate Majority Leader Robert Byrd, speaking on behalf of George McGovern in Mitchell.</p><p>The Democratic Senatorial Campaign Committee, headed by Kentucky Senator Wendell Ford, faces what seems to be a nigh impossible challenge. Somewhat ironically, the Democratic Party is poised to suffer from their own electoral success. Flush with Democratic incumbents, DSCC leadership must ration what available resources at their disposal between its sitting members and what pick-ups seem possible to expand the majority. Georgia, North Carolina, Vermont, Pennsylvania, and New York-- the states where cash will rain like bombs and ads thunder as the sound of distant explosions. To many senior Democrats, these states will decide the fate of the Senate, and South Dakota certainly won't.</p><p>Senator McGovern has not been left out to dry by any means necessary, but its no secret that if any of his colleagues are to go down, he is expected to go first and hardest. In lieu of relying upon the assistance of the national apparatus, McGovern will turn to what he always has-- his community.</p><p>Although ruby red as they come, the South Dakota Democratic Party has seen success at propelling discounted candidates to the federal government despite the odds. Keeping the prairie statesman in Washington will require the herculean effort of local organizers, party leaders, and McGovern himself to prove to the DSCC that this race is not only worth fighting for, but winnable.</p></div></div></div>",
            "candidate_score": 1,
            "running_mate": true,
            "scrollable": false,
            "partner": "0"
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 16136,
        "fields": {
            "first_name": "",
            "last_name": "NCPAC",
            "election": 9,
            "party": "REMOVE THIS FOR THEM",
            "state": "REMOVE THIS FOR THEM ",
            "priority": 1,
            "description": "<div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'>\"<em>There's no question about it, we are a negative organization that wants to get rid of bad votes in the Senate. We're interested in ideology. We're not interested in respectability.</em>\"<br>- John <q>Terry</q> Dolan, co-founder of the National Conservative Political Action Committee</p><p>The National Conservative Political Action Committee is a caged beast champing at the bit for blood. Unashamedly disinterested in politics as usual, NCPAC is unabashedly crude, graceless, and scarily effective. Innovative and cunning, NCPAC co-founder Terry Dolan was among the first to exploit the loopholes created in the landmark Buckley v. Valeo ruling, which held that PACs were limited to $10,000 per candidate, but placed no such restriction so long as the organization was not in direct coordination with the candidate. Such politicking created an impregnable barrier for NCPAC-aligned candidates to hide behind as bombastic and detestable ads and leaflets came at the hands of NCPAC, not the candidate. The effectiveness of such a method was proven as Dick Clark, the junior Democratic Senator from Iowa, was buried so deep under NCPAC mail and leaflets, not even his 30% poling lead could save him from defeat in 1978. So what hope then is there for George McGovern?</p><p>South Dakota is a state fundamentally opposed to the baby-murdering practice of abortion, unsympathetic to kowtowing to Moscow under the veneer of arms control, averse to efforts to amend the Constitution to put men and women in the same bathroom, and just about everything else George McGovern stands for. Dolan has taken a unique interest in the South Dakota Senate race, eager to unseat the champion of liberalism, even more so than the Republican nominee. Dolan's willingness to play dirty is antithetical to the timid and personable Abdnor, but the money spends all the same. There is no subject too taboo, no angle of attack too uncouth, no word too inflammatory if it brings about the defeat of George McGovern and the Senate liberals. </div></div></div>",
            "color_hex": "#0000ff",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://cdn.discordapp.com/attachments/543656386299428864/1204536565746106378/gayman.png?ex=65d51718&is=65c2a218&hm=a2e3e4346f54d9c41baa4fd956bc17c8dc43c33c148124b663866c3f02bcf2bc&",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message": "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": "<div style='overflow-y:scroll;height:14em;font-size:1em;'><p style='margin-top:0em;'>\"<em>There's no question about it, we are a negative organization that wants to get rid of bad votes in the Senate. We're interested in ideology. We're not interested in respectability.</em>\"<br>- John <q>Terry</q> Dolan, co-founder of the National Conservative Political Action Committee</p><p>The National Conservative Political Action Committee is a caged beast champing at the bit for blood. Unashamedly disinterested in politics as usual, NCPAC is unabashedly crude, graceless, and scarily effective. Innovative and cunning, NCPAC co-founder Terry Dolan was among the first to exploit the loopholes created in the landmark Buckley v. Valeo ruling, which held that PACs were limited to $10,000 per candidate, but placed no such restriction so long as the organization was not in direct coordination with the candidate. Such politicking created an impregnable barrier for NCPAC-aligned candidates to hide behind as bombastic and detestable ads and leaflets came at the hands of NCPAC, not the candidate. The effectiveness of such a method was proven as Dick Clark, the junior Democratic Senator from Iowa, was buried so deep under NCPAC mail and leaflets, not even his 30% poling lead could save him from defeat in 1978. So what hope then is there for George McGovern?</p><p>South Dakota is a state fundamentally opposed to the baby-murdering practice of abortion, unsympathetic to kowtowing to Moscow under the veneer of arms control, averse to efforts to amend the Constitution to put men and women in the same bathroom, and just about everything else George McGovern stands for. Dolan has taken a unique interest in the South Dakota Senate race, eager to unseat the champion of liberalism, even more so than the Republican nominee. Dolan's willingness to play dirty is antithetical to the timid and personable Abdnor, but the money spends all the same. There is no subject too taboo, no angle of attack too uncouth, no word too inflammatory if it brings about the defeat of George McGovern and the Senate liberals. </div></div></div>",
            "candidate_score": 1,
            "running_mate": true,
            "scrollable": false,
            "partner": "1"
        }
    }
];

defaultData.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 2001,
        "fields": {
            "candidate": 131,
            "running_mate": 16064
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 2002,
        "fields": {
            "candidate": 132,
            "running_mate": 16136
        }
    }
];

/*RecReading = true
                quotes = [
    "<em><q>Even friends will admit McGovern commands the support of a majority of his constituents for only one day every six years.</q></em>"
]*/

defaultData.opponents_default_json = [
    {
        "election": 9,
        "candidates": [
            131,
            132,
            133
        ]
    }
]

defaultData.opponents_weighted_json = [
    {
        "election": 9,
        "candidates": [
            131,
            132,
            133
        ]
    }
]

export default defaultData;