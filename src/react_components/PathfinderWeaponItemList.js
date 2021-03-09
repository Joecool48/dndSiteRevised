import PathfinderWeaponItemListEntry from "./PathfinderWeaponItemListEntry.js"

class PathfinderWeaponItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weapons: []
        }
    }

    addButtonListener = (e) => {
        this.setState((prevState, prevProps) => ({
            ...prevState,
            weapons: [
                ...prevState.weapons,
                {}
            ]
        }))
    }

    render() {
        return (
            <div className="pathfinderWeaponListBody">
                <div className="pathfinderWeaponListHeader">
                    <p className="pathfinderWeaponListHeaderText">Weapons</p>
                </div>
                    <ol className="pathfinderWeaponList">
                        {(this.state.weapons).map((weapon, index) => {
                            return (
                            <li>
                                <PathfinderWeaponItemListEntry/>
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