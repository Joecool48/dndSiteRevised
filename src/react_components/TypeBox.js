import newId from "./index.js"
class TypeBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        this.id = newId()
    }
    render() {
        return (
            <div className="typeBoxWrapper">
                <input id={this.id} className="typeBox" onKeyDown={(e) => this.submitText(e)}></input>
            </div>
        )
    }
    submitText(event) {
        if (event.code === "Enter") {
            console.log("You pressed enter yay")
            console.log(this.props.createMessageCallback)
            let elementId = document.getElementById(this.id)
            this.props.createMessageCallback(elementId.value)
            elementId.value = ""
            event.preventDefault()
        }
    }
}

export default TypeBox