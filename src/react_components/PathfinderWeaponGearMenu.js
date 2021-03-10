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

    onCategoryChange = (e) => {
        (this.props.onCategoryChange)(this.props.id, e)
    }

    onTypeChange = (e) => {
        (this.props.onTypeChange)(this.props.id, e)
    }

    onAttackTypeChange = (e) => {
        (this.props.onAttackTypeChange)(this.props.id, e)
    }
    
    onDamageRollAdd = (e) => {
        (this.props.onDamageRollAdd)(this.props.id, e)
    }

    render() {
        console.log(this.props.attackType)
        return (
            <div className="gearExpandContainer">
                <div className="pathfinderListItemRow">
                    <p className="pathfinderWeaponLabel">Name:</p>
                    <input onChange={this.onNameChange} value={this.props.name} className="pathfinderUnderlineInput"></input>
                </div>
                <div className="pathfinderListItemRow">
                    <p className="pathfinderWeaponLabel">Category:</p>
                    <input className="pathfinderUnderlineInput" onChange={this.onCategoryChange} value={this.props.category}></input>
                    <p className="pathfinderWeaponLabel">Type:</p>
                    <input className="pathfinderUnderlineInput" onChange={this.onTypeChange} value={this.props.type}></input>
                    <p className="pathfinderWeaponLabel">Attack Type:</p>
                    <select onChange={this.onAttackTypeChange} value={this.props.attackType}>
                        <option value="Full_BAB">Full BAB</option>
                        <option value="Natural_Attacks">Natural Attacks</option>
                        <option value="Flurry_of_Blows">Flurry of Blows</option>
                        <option value="Custom">Custom</option>
                    </select>

                </div>
                {Object.keys(this.props.damageRolls).map((damageRoll, index) => {
                    return <PathfinderWeaponDamageItem name={this.props.damageRolls[[damageRoll]].name}/>
                })}
                <PathfinderWeaponAttackItem/>                
                <button onClick={this.onDamageRollAdd} className="addButtonStyle" style={{"width": "25%"}}>Add Damage</button>
            </div>
        )
    }
}

export default PathfinderWeaponGearMenu