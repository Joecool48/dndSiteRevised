import PathfinderCharacterSheetMain from "./PathfinderCharacterSheetMain.js"
//import update from "immutability-helper"

class PathfinderCharacterSheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: ["Main", "tab2", "tab3"]
        }
    }

    componentWillMount() {
        (this.props.setTabs)(this.state.tabs)
    }

    render() {
        if (this.state.tabs[this.props.currentTab] === "Main")
        return (
            <PathfinderCharacterSheetMain/>
        )
        else {
            return <div></div>
        }
    }
}

export default PathfinderCharacterSheet