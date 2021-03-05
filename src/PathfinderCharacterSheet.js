class PathfinderCharacterSheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="mainCol">
                    <div className="abilityHitPointRow">
                        <div className="abilityScoresContainer">
                            <div className="abilityScoresCol">
                                <button className="abilityScoreName blackName">STR</button>
                                <button className="abilityScoreName blackName">DEX</button>
                                <button className="abilityScoreName blackName">CON</button>
                                <button className="abilityScoreName blackName">INT</button>
                                <button className="abilityScoreName blackName">WIS</button>
                                <button className="abilityScoreName blackName">CHA</button>
                            </div>
                            <div className="abilityScoresCol">
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>
                            <div className="abilityScoresCol">
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>
                            <div className="abilityScoresCol">
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                                <input className="abilityScoreBox"></input>
                            </div>
                        </div>
                        <div className="hitPointCol">
                            <button className="hitPointName blackName">HIT POINTS</button>
                            <div className="abilityHitPointRow">
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
                            <div className="abilityHitPointRow">
                                <p className="labelText">Temp</p>
                                <input className="tempNonlethalBox"></input>
                                <p className="labelText">Nonlethal</p>
                                <input className="tempNonlethalBox"></input>
                            </div>
                            <div className="abilityHitPointRow">
                                <p className="labelText">DR</p>
                                <input className="drTextBox"></input>
                            </div>
                            <div className="abilityHitPointRow">
                                <div className="labelTopBoxCol">
                                    <p className="labelText"></p>
                                    <button className="blackName initName">INIT</button>
                                </div>

                                <div className="labelTopBoxCol">
                                    <p className="labelText">Total</p>
                                    <input className="initBox"></input>
                                </div>
                                <div className="labelTopBoxCol">
                                    <p className="labelText">Temp</p>
                                    <input className="initBox"></input>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="abilityHitPointRow">
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">AC</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">TOUCH</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">FLAT-FOOTED</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <input className="initBox"></input>
                        </div>
                    </div>
                    <div className="abilityHitPointRow">
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">FORT</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">REF</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">WILL</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>

                    </div>
                    <div className="abilityHitPointRow">
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">BAB</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">CMB</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>
                    </div>
                    <div className="abilityHitPointRow">
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">MELEE</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">RANGED</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>
                    </div>
                    <div className="abilityHitPointRow">
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">CMD</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText"></p>
                            <button className="blackName acName">SR</button>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Total</p>
                            <input className="initBox"></input>
                        </div>
                        <div className="labelTopBoxCol">
                            <p className="labelText">Temp</p>
                            <input className="initBox"></input>
                        </div>

                    
                    </div>
                </div>
                <div className="mainCol">

                </div>

            </div>
        )
    }
}

export default PathfinderCharacterSheet