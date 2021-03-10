import PathfinderWeaponItemListEntry from "./PathfinderWeaponItemListEntry.js"
import newId from "./index.js"

class PathfinderWeaponItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weapons: {}
        }
    }

    addButtonListener = (e) => {
        let id = newId() + ""
        this.setState((prevState, prevProps) => ({
            ...prevState,
            weapons: {
                ...prevState.weapons,
                [id]: {
                    "name": "Weapon",
                    "category": "",
                    "type": "",
                    "attackType": "Full_BAB",
                    "damageRolls": {}
                }
            }
        }))
    }

    setWeaponProperty = (id, name, value) => {
        this.setState((prevState, prevProps) => ({
            ...prevState,
            weapons: {
                ...prevState.weapons,
                [id]: {
                    ...prevState.weapons[[id]],
                    [name]: value
                }
            }
        }))

    }

    onNameChange = (id, e) => {
        this.setWeaponProperty(id, "name", e.target.value)
    }
    
    onCategoryChange = (id, e) => {
        this.setWeaponProperty(id, "category", e.target.value)
    }

    onTypeChange = (id, e) => {
        this.setWeaponProperty(id, "type", e.target.value)
    }
    
    onAttackTypeChange = (id, e) => {
        this.setWeaponProperty(id, "attackType", e.target.value)
    }
    onDamageRollAdd = (weaponId, e) => {
        console.log("onDamageRollAdd")
        let damageId = newId()
        this.setState((prevState, prevProps) => ({
            ...prevState,
            weapons: {
                ...prevState.weapons,
                [weaponId]: {
                    ...prevState.weapons[[weaponId]],
                    "damageRolls": {
                        ...prevState.weapons[[weaponId]].damageRolls,
                        [damageId]: {
                            "id": damageId,
                            "name": "",
                            "damageDice": "",
                            "modifier": "STR",
                            "misc": "",
                            "temp": "",
                            "type": "",
                            "canCrit": "Yes",
                            "critMultiplier": "2"
                        }
                    }
                }
            }
        }))
    }

    render() {
        return (
            <div className="pathfinderWeaponListBody">
                <div className="pathfinderWeaponListHeader">
                    <p className="pathfinderWeaponListHeaderText">Weapons</p>
                </div>
                    <ol className="pathfinderWeaponList">
                        {Object.keys((this.state.weapons)).map((weapon, index) => {
                            return (
                            <li>
                                <PathfinderWeaponItemListEntry id={[weapon]} onNameChange={this.onNameChange} onCategoryChange={this.onCategoryChange} onTypeChange={this.onTypeChange} 
                                    category={this.state.weapons[[weapon]].category} name={this.state.weapons[[weapon]].name} type={this.state.weapons[[weapon]].type}
                                    onAttackTypeChange={this.onAttackTypeChange} attackType={this.state.weapons[[weapon]].attackType}
                                    onDamageRollAdd={this.onDamageRollAdd} damageRolls={this.state.weapons[[weapon]].damageRolls}/>
                            </li>
                            )
                        })}
                    </ol>
                    <button onClick={this.addButtonListener} className="addButtonStyle">Add</button>
            </div>
        )
    }
}

export default PathfinderWeaponItemList