import PathfinderWeaponDamageItem from "./PathfinderWeaponDamageItem.js"
import PathfinderWeaponAttackItem from "./PathfinderWeaponAttackItem.js"

class PathfinderWeaponGearMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onNameChange = (e) => {
        (this.props.onNameChange)(this.props.id, e)
    }

    render() {
        return (
            <div className="gearExpandContainer">
                <div className="pathfinderListItemRow">
                    <p className="pathfinderWeaponLabel">Name:</p>
                    <input onChange={this.onNameChange} value={this.props.name} className="pathfinderUnderlineInput"></input>
                </div>
                <div className="pathfinderListItemRow">
                    <p className="pathfinderWeaponLabel">Category:</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">Type:</p>
                    <input className="pathfinderUnderlineInput"></input>
                    <p className="pathfinderWeaponLabel">Attack Type:</p>
                    <select>
                        <option value="Full BAB">Full BAB</option>
                        <option value="Natural Attacks">Natural Attacks</option>
                        <option value="Flurry of Blows">Flurry of Blows</option>
                        <option value="Custom">Custom</option>
                    </select>

                </div>
                <PathfinderWeaponAttackItem/>                
                <PathfinderWeaponDamageItem/>
                <button className="addButtonStyle" style={{"width": "25%"}}>Add Damage</button>
            </div>
        )
    }
}

export default PathfinderWeaponGearMenu