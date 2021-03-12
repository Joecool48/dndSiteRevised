import PathfinderACItem from "./PathfinderACItem.js"

class PathfinderCharacterSheetGear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "acItems": {}
        }
    }

    render() {
        return (
            <div className="gearRow">
                <div className="gearCol">
                    <div className="pathfinderBlackHeader">
                        <p className="pathfinderHeaderText">Armor</p>
                    </div>
                    <div>
                        <PathfinderACItem/>
                    </div>
                </div>
                <div className="gearCol">
                    <p>Hey dude 2</p>
                </div>
            </div>
        )
    }
}

export default PathfinderCharacterSheetGear