import PathfinderSkillRow from "./PathfinderSkillRow.js"
import PathfinderWeaponItemList from "./PathfinderWeaponItemList.js"

class PathfinderCharacterSheetMain extends React.Component {
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
        let keys = Object.keys(this.state.skills)
        let i = 0
        while (i < keys.length) {
            this.state.skills[keys[i]]["totalListener"] = (name, val) => {
                //update(this.state, {"skills": {name: {"state": {"total": val}}}})
            }
            this.state.skills[keys[i]]["rankListener"] = (name, val) => {
                //update(this.state, {"skills": {name: {"state": {"rank": val}}}})
            }
            this.state.skills[keys[i]]["modListener"] = (name, val) => {
                //update(this.state, {"skills": {name: {"state": {"mod": val}}}})
            }
            this.state.skills[keys[i]]["miscListener"] = (name, val) => {
                //update(this.state, {"skills": {name: {"state": {"misc": val}}}})
            }
            this.state.skills[keys[i]]["condListener"] = (name, val) => {
                //update(this.state, {"skills": {name: {"state": {"cond": val}}}})
            }
            this.state.skills[keys[i]]["skillRef"] = React.createRef()
            this.state.skills[keys[i]]["state"] = {
                total: 0,
                rank: 0,
                mod: 0,
                misc: 0,
                cond: 0
            }

            i += 1
        }

    }

    render() {
        return (
            <div className="bigRow">
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
                    <PathfinderWeaponItemList/>
                </div>
                <div className="mainCol">
                    <p className="blackName">SKILLS</p>
                    <div className="mainRow">
                        <p className="labelText">C</p>
                        <p className="labelText">Total</p>
                        <p className="labelText">Ranks</p>
                        <p className="labelText">Mod</p>
                        <p className="labelText">Misc</p>
                        <p className="labelText">Cond</p>
                    </div>
                    {Object.values(this.state.skills).map((skill, index) => {
                        return <PathfinderSkillRow skillName={skill.name}/>
                    })}
                </div>

            </div>
        )
    }
}

export default PathfinderCharacterSheetMain