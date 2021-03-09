class PathfinderWeaponAttackItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="divBox">
                <div className="pathfinderListItemRow">
                    <input type="checkbox"></input>
                    <p className="pathfinderWeaponLabel">Attack:</p>
                    <select>
                        <option value="Full BAB">Full BAB</option>
                    </select>
                    <p className="pathfinderWeaponLabel">+</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">*</p>
                    <select>
                        <option value="STR">STR</option>
                        <option value="DEX">DEX</option>
                        <option value="CON">CON</option>
                        <option value="INT">INT</option>
                        <option value="WIS">WIS</option>
                        <option value="CHA">CHA</option>
                    </select>

                </div>
                <div className="pathfinderListItemRow" style={{"margin-left": "20px"}}>
                    <p className="pathfinderWeaponLabel">+</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">+</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">+</p>
                    <input className="pathfinderUnderlineInput"></input>

                </div>
                <div className="pathfinderListItemRow" style={{"margin-left": "20px"}}>
                    <p className="pathfinderWeaponLabel">Critical Range:</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">Range/Reach:</p>
                    <input className="pathfinderUnderlineInput"></input>
                </div>
            </div>
        )
    }
}

export default PathfinderWeaponAttackItem