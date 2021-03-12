class PathfinderACItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClickGear = (e) => {
        this.setState((prevState, prevProps) => ({
            gearExpand: !prevState.gearExpand
        }))
        console.log("I clicked the gear")
    }


    render() {
        let gearJsx = <span></span>
        if (this.state.gearExpand)
            gearJsx = (
                <div style={{"padding": "10px"}} className="gearExpandContainer">
                    <div className="pathfinderListItemRow">
                        <span className="pathfinderWeaponLabel">Name:</span>
                        <input style={{"flex": "0 0 50%"}} className="pathfinderUnderlineInput"></input>
                        <span className="pathfinderWeaponLabel">Type:</span>
                        <select>
                            <option value="Light">Light</option>
                            <option value="Medium">Medium</option>
                            <option value="Heavy">Heavy</option>
                            <option value="Shield">Shield</option>
                        </select>
                    </div>
                    <div className="pathfinderListItemRow">
                        <div className="pathfinderListItemCol">
                            <div className="pathfinderListItemRow">
                                <span className="pathfinderWeaponLabel noWrap">Armor Bonus:</span>
                                <input className="pathfinderUnderlineInput"></input>
                            </div>
                            <div className="pathfinderListItemRow">
                                <span className="pathfinderWeaponLabel noWrap">Cost:</span>
                                <input className="pathfinderUnderlineInput"></input>
                            </div>
                            <div className="pathfinderListItemRow">
                                <span className="pathfinderWeaponLabel noWrap">Weight:</span>
                                <input className="pathfinderUnderlineInput"></input>
                            </div>
                        </div>
                        <div className="pathfinderListItemCol">
                            <div className="pathfinderListItemRow">
                                <span className="pathfinderWeaponLabel noWrap">Max Dex:</span>
                                <input className="pathfinderUnderlineInput"></input>
                            </div>
                            <div className="pathfinderListItemRow">
                                <span className="pathfinderWeaponLabel noWrap">Armor Check Penalty:</span>
                                <input className="pathfinderUnderlineInput"></input>
                            </div>
                            <div className="pathfinderListItemRow">
                                <span className="pathfinderWeaponLabel noWrap">Arcane Spell Failure:</span>
                                <input className="pathfinderUnderlineInput"></input>
                            </div>
                        </div>
                    </div>
                    <div className="pathfinderListItemRow">
                        <span className="pathfinderWeaponLabel noWrap">Speed:</span>
                        <input className="pathfinderUnderlineInput"></input>
                        <span className="pathfinderWeaponLabel noWrap">Run Speed:</span>
                        <input className="pathfinderUnderlineInput"></input>
                    </div>
                    <div className="pathfinderListItemRow">
                        <span className="pathfinderWeaponLabel noWrap">Masterwork:</span>
                        <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <span className="pathfinderWeaponLabel noWrap">Enhancement Bonus:</span>
                        <input className="pathfinderUnderlineInput"></input>
                    </div>
                </div>
            )
        return (
            <div className="pathfinderListItemEntry">
                <div className="pathfinderListItemRow">
                    <button onClick={this.onClickGear}><i className="fas fa-cog"></i></button>
                    <button style={{"width": "50%"}} className="pathfinderSheetButton sheetUnderlined"></button>
                    <input type="checkbox"></input>

                </div>
                {gearJsx}
            </div>
        )
    }
}

export default PathfinderACItem