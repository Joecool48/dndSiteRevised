class PathfinderWeaponGearMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="gearExpandContainer">
                <div className="pathfinderListItemRow">
                    <p className="pathfinderWeaponLabel">Name:</p>
                    <input className="pathfinderUnderlineInput"></input>
                </div>
                <div className="pathfinderListItemRow">
                    <div>
                        <p className="pathfinderWeaponLabel">Category:</p>
                        <input className="pathfinderUnderlineInput"></input>
                    </div>
                    <div>
                        <p className="pathfinderWeaponLabel">Type:</p>
                        <input className="pathfinderUnderlineInput"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default PathfinderWeaponGearMenu