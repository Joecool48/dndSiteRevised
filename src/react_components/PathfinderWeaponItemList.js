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
                id: {"name": "Weapon"}
            }
        }))
    }

    onNameChange = (id, e) => {
        console.log("Onname changed reached")
        this.setState((prevState, prevProps) => ({
            ...prevState,
            weapons: {
                ...prevState.weapons,
                id: {
                    ...prevState.weapons.id,
                    "name": e.target.value
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
                                <PathfinderWeaponItemListEntry id={weapon.id} onNameChange={this.onNameChange} name={this.state.weapons[weapon].name}/>
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