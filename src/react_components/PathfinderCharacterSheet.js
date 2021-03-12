import PathfinderCharacterSheetMain from "./PathfinderCharacterSheetMain.js"
import PathfinderCharacterSheetGear from "./PathfinderCharacterSheetGear.js"

class PathfinderCharacterSheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: ["Main", "Gear", "tab3"]
        }
    }

    componentWillMount() {
        (this.props.setTabs)(this.state.tabs)
    }

    render() {
        if (this.props.currentTab === "Main")
            return (
                <PathfinderCharacterSheetMain/>
            )
        else if (this.props.currentTab === "Gear")
            return (
                <PathfinderCharacterSheetGear/>
            )
        else {
            return <div></div>
        }
    }
}

export default PathfinderCharacterSheet