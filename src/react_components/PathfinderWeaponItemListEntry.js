import PathfinderWeaponGearMenu from "./PathfinderWeaponGearMenu.js"
class PathfinderWeaponItemListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gearExpand: false
        }
    }

    onClickGear = (e) => {
        this.setState((prevState, prevProps) => ({
            gearExpand: !prevState.gearExpand
        }))
        console.log("I clicked the gear")
    }

    render() {
        let gearJsx = (<span></span>)
        if (this.state.gearExpand)
            gearJsx = <PathfinderWeaponGearMenu/>
        
        return (
            <div className="pathfinderListItemEntry">
                <div className="pathfinderListItemRow">
                    <button onClick={this.onClickGear}><i className="fas fa-cog"></i></button>
                     <button style={{"width": "50%"}} className="pathfinderSheetButton sheetUnderlined">
                         <span>My weapon</span>
                     </button>
                </div>

                {gearJsx}
            </div>
        )
    }
}

export default PathfinderWeaponItemListEntry