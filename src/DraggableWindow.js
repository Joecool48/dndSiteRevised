import newId from "./index.js"
import {registerDocumentMouseMove, registerDocumentMouseUp, unregisterDocumentMouseMove, unregisterDocumentMouseUp} from "./index.js"
import PathfinderCharacterSheet from "./PathfinderCharacterSheet.js"

class DraggableWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dragging: false,
            cursorX: 0,
            cursorY: 0,
            windowX: 0,
            windowY: 0
        }
        this.windowRef = React.createRef()
        this.windowHeaderRef = React.createRef()
        this.windowId = newId()
        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
    }
    onMouseDown = (e) => {
        e.preventDefault()
        this.windowHeaderRef.current.style.cursor = "move"
        registerDocumentMouseMove(this.windowId, this.onMouseMove)
        registerDocumentMouseUp(this.windowId, this.onMouseUp)
        document.onmousemove = this.onMouseMove
        document.onmouseup = this.onMouseUp
        this.setState({
            dragging: true,
            cursorX: e.clientX,
            cursorY: e.clientY
        })
    }

    onMouseMove = (e) => {
        e.preventDefault()
        if (this.state.dragging) {
            this.setState(prevState => ({
                windowX: prevState.cursorX - e.clientX,
                windowY: prevState.cursorY - e.clientY,
                cursorX: e.clientX,
                cursorY: e.clientY
            }))
        }
    }
    onMouseUp = (e) => {
        e.preventDefault()
        document.onmousemove = null
        document.onmouseup = null
        unregisterDocumentMouseMove(this.windowId)
        unregisterDocumentMouseUp(this.windowId) 
        this.windowHeaderRef.current.style.cursor = "initial"
        this.setState({
            dragging: false
        })
    }
    componentDidMount() {

    }
    componentWillUpdate() {
        if (this.state.dragging) {
            //this.windowHeaderRef.current.style.cursor = "move"
            this.windowRef.current.style.top = (this.windowRef.current.offsetTop - this.state.windowY) + "px"
            this.windowRef.current.style.left = (this.windowRef.current.offsetLeft - this.state.windowX) + "px"
        }
    }

    render() {
        return (
            <div ref={this.windowRef} className="window">
                <div onMouseMove={this.onMouseMove} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} ref={this.windowHeaderRef} className="windowHeader">This is header</div>
                <div>
                    <PathfinderCharacterSheet/> 
                </div>
            </div>
        )
    }
}

export default DraggableWindow