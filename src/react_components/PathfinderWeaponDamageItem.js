class PathfinderWeaponDamageItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="divBox">
                <div className="pathfinderListItemRow">
                    <input type="checkbox"></input>
                    <p className="pathfinderWeaponLabel">Damage:</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">+</p>
                    <select>
                        <option value="STR">STR</option>
                        <option value="STR (Two-Handed)">STR (Two-Handed)</option>
                        <option value="STR (Offhand)">STR (Offhand)</option>
                        <option value="DEX">DEX</option>
                    </select>
                    <p className="pathfinderWeaponLabel">+</p>
                    <input className="pathfinderUnderlineInput"></input>

                </div>
                <div className="pathfinderListItemRow">
                    <p className="pathfinderWeaponLabel">+</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">+</p>
                    <input className="pathfinderUnderlineInput"></input>
                </div>
                <div className="pathfinderListItemRow">
                    <p className="pathfinderWeaponLabel">Type:</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">Can damage crit?</p>
                    <select>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <p className="pathfinderWeaponLabel">Crit Multiplier:</p>
                    <input className="pathfinderUnderlineInput"></input>
                </div>
            </div>
        )
    }
}

export default PathfinderWeaponDamageItem