import PathfinderSkillRow from "./PathfinderSkillRow.js"

class PathfinderCharacterSheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skills: {
                "Acrobatics": {
                    "name": "Acrobatics"
                },
                "Appraise": {
                    "name": "Appraise"
                },
                "Bluff": {
                    "name": "Bluff"
                },
                "Climb": {
                    "name": "Climb"
                },
                "Diplomacy": {
                    "name": "Diplomacy"
                },
                "Disable Device": {
                    "name": "Disable Device"
                },
                "Disguise": {
                    "name": "Disguise"
                },
                "Escape Artist": {
                    "name": "Escape Artist"
                },
                "Fly": {
                    "name": "Fly"
                },
                "Handle Animal": {
                    "name": "Handle Animal"
                },
                "Heal": {
                    "name": "Heal"
                },
                "Intimidate": {
                    "name": "Intimidate"
                },
                "Knowledge (Arcana)": {
                    "name": "Knowledge (Arcana)"
                },
                "Knowledge (Dungeoneering)": {
                    "name": "Knowledge (Dungeoneering)"
                },
                "Knowledge (Engineering)": {
                    "name": "Knowledge (Engineering)"
                },
                "Knowledge (Geography)": {
                    "name": "Knowledge (Geography)"
                },
                "Knowledge (History)": {
                    "name": "Knowledge (History)"
                },
                "Knowledge (Local)": {
                    "name": "Knowledge (Local)"
                },
                "Knowledge (Nature)": {
                    "name": "Knowledge (Nature)"
                },
                "Knowledge (Nobility)": {
                    "name": "Knowledge (Nobility)"
                },
                "Knowledge (Planes)": {
                    "name": "Knowledge (Planes)"
                },
                "Knowledge (Religion)": {
                    "name": "Knowledge (Religion)"
                },
                "Linguistics": {
                    "name": "Linguistics"
                },
                "Perception": {
                    "name": "Perception"
                },
                "Ride": {
                    "name": "Ride"
                },
                "Sense Motive": {
                    "name": "Sense Motive"
                },
                "Sleight Of Hand": {
                    "name": "Sleight of Hand"
                },
                "Spellcraft": {
                    "name": "Spellcraft"
                },
                "Stealth": {
                    "name": "Stealth"
                },
                "Survival": {
                    "name": "Survival"
                },
                "Swim": {
                    "name": "Swim"
                },
                "Use Magic Device": {
                    "name": "Use Magic Device"
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div className="mainCol">
                    <div className="abilityHitPointRow">
                        <div className="abilityScoresContainer">
                            <div className="abilityScoreRow">
                                <button className="abilityScoreName blackName">STR</button>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>
                            <div className="abilityScoreRow">
                                <button className="abilityScoreName blackName">DEX</button>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>
                            <div className="abilityScoreRow">
                                <button className="abilityScoreName blackName">CON</button>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>
                            <div className="abilityScoreRow">
                                <button className="abilityScoreName blackName">INT</button>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>
                            <div className="abilityScoreRow">
                                <button className="abilityScoreName blackName">WIS</button>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>
                            <div className="abilityScoreRow">
                                <button className="abilityScoreName blackName">CHA</button>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>

                        </div>
                        <div className="hitPointCol">
                            <button className="hitPointName blackName">HIT POINTS</button>
                            <div className="hitPointRow">
                                <div className="labelTopBoxCol">
                                    <p className="labelText">Curr</p>
                                    <input className="hitPointBox"></input>
                                </div>
                                <div className="labelTopBoxCol">
                                    <p className="labelText">Max</p>
                                    <input className="hitPointBox"></input>
                                </div>
                                <div className="labelTopBoxCol">
                                    <p className="labelText">Temp</p>
                                    <input className="hitPointBox"></input>
                                </div>

                            </div>
                            <div className="hitPointRow">
                                <p className="labelText">Temp</p>
                                <input className="tempNonlethalBox"></input>
                                <p className="labelText">Nonlethal</p>
                                <input className="tempNonlethalBox"></input>
                            </div>
                            <div className="hitPointRow">
                                <p className="labelText">DR</p>
                                <input className="drTextBox"></input>
                            </div>
                            <div className="hitPointRow">
                                <div className="labelTopBoxCol">
                                    <p className="labelText"></p>
                                    <button className="blackName initName">INIT</button>
                                </div>

                                <div className="labelTopBoxCol">
                                    <p className="labelText">Total</p>
                                    <input className="normalBox"></input>
                                </div>
                                <div className="labelTopBoxCol">
                                    <p className="labelText">Temp</p>
                                    <input className="normalBox"></input>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mainRow">
                        <div className="acCol buttonCol">
                            <p className="labelText">Hey</p>
                            <button className="blackName acName">AC</button>
                        </div>
                        <div className="acCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="acCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="acCol buttonCol">
                            <p className="labelText">Hey</p>
                            <button className="blackName acName">TOUCH</button>
                        </div>
                        <div className="acCol boxCol">
                            <p className="labelText">Hey</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="acCol buttonCol">
                            <p className="labelText">Hey</p>
                            <button className="blackName acName">FLAT-FOOTED</button>
                        </div>
                        <div className="acCol boxCol">
                            <p className="labelText">Hey</p>
                            <input className="normalBox"></input>
                        </div>
                    </div>
                    <div className="mainRow">
                        <div className="saveCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">FORT</button>
                        </div>
                        <div className="saveCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="saveCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="saveCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">REF</button>
                        </div>
                        <div className="saveCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="saveCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="saveCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">WILL</button>
                        </div>
                        <div className="saveCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="saveCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>

                    </div>
                    <div className="mainRow">
                        <div className="babCmbCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">BAB</button>
                        </div>
                        <div className="babCmbCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="babCmbCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="babCmbCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">CMB</button>
                        </div>
                        <div className="babCmbCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="babCmbCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>
                    </div>
                    <div className="mainRow">
                        <div className="attackCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">MELEE</button>
                        </div>
                        <div className="attackCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="attackCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="attackCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">RANGED</button>
                        </div>
                        <div className="attackCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="attackCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>
                    </div>
                    <div className="mainRow">
                        <div className="cmdSrCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">CMD</button>
                        </div>
                        <div className="cmdSrCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="cmdSrCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="cmdSrCol buttonCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">SR</button>
                        </div>
                        <div className="cmdSrCol boxCol">
                            <p className="labelText">Total</p>
                            <input className="normalBox"></input>
                        </div>
                        <div className="cmdSrCol boxCol">
                            <p className="labelText">Temp</p>
                            <input className="normalBox"></input>
                        </div>

                    
                    </div>
                </div>
                <div className="mainCol">
                    <p className="blackName">SKILLS</p>
                    {Object.values(this.state.skills).map((skill, index) => {
                        console.log(skill.name)
                        return <PathfinderSkillRow skillName={skill.name}/>
                    })}
                </div>

            </div>
        )
    }
}

export default PathfinderCharacterSheet