import newId from "./index.js"
import {registerDocumentMouseMove, registerDocumentMouseUp, unregisterDocumentMouseMove, unregisterDocumentMouseUp} from "./globalEvent.js"
import PathfinderCharacterSheet from "./PathfinderCharacterSheet.js"

class DraggableWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dragging: false,
            cursorX: 0,
            cursorY: 0,
            windowX: 0,
            windowY: 0,
            resizing: false,
            resizeWidth: 0,
            resizeHeight: 0,
            resizeCursorX: 0,
            resizeCursorY: 0
        }
        this.windowRef = React.createRef()
        this.windowHeaderRef = React.createRef()
        this.windowBodyRef = React.createRef()
        this.windowId = newId()
        this.resizeId = newId()
    }
    onMouseDown = (e) => {
        e.preventDefault()
        this.windowHeaderRef.current.style.cursor = "move"
        registerDocumentMouseMove(this.windowId, (e) => {this.onMouseMove(e)})
        registerDocumentMouseUp(this.windowId, (e) => {this.onMouseUp(e)})
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
        this.windowHeaderRef.current.style.cursor = "initial"
        this.setState({
            dragging: false
        })
        unregisterDocumentMouseMove(this.windowId)
        unregisterDocumentMouseUp(this.windowId)
    }
    onMouseUpResize = (e) => {
        e.preventDefault()
        this.windowRef.current.style.cursor = "initial" 
        this.setState({
            resizing: false
        })
        unregisterDocumentMouseMove(this.resizeId)
        unregisterDocumentMouseUp(this.resizeId)
    }
    onMouseDownResize = (e) => {
        let tolerance = 20
        let domId = this.windowRef.current
        let bottomRightX = domId.offsetLeft + domId.offsetWidth
        let bottomRightY = domId.offsetTop + domId.offsetHeight
        console.log(domId.offsetWidth)
        if (e.clientX <= bottomRightX && e.clientX >= bottomRightX - tolerance
             && e.clientY <= bottomRightY && e.clientY >= bottomRightY - tolerance) {
                e.preventDefault()
                this.windowRef.current.style.cursor = "ew-resize"
                this.setState({
                    resizing: true,
                    resizeWidth: domId.offsetWidth,
                    resizeHeight: domId.offsetHeight,
                    resizeCursorX: e.clientX,
                    resizeCursorY: e.clientY
                })
            registerDocumentMouseMove(this.resizeId, this.onMouseMoveResize)
            registerDocumentMouseUp(this.resizeId, this.onMouseUpResize)

        }
        
    }
    onMouseMoveResize = (e) => {
        if (this.state.resizing) {
            this.windowRef.current.style.cursor = "ew-resize"
            e.preventDefault()
            let domId = this.windowRef.current
            this.setState((prevState, prevProps) => ({
                resizeWidth: (prevState.resizeWidth - (prevState.resizeCursorX - e.clientX)),
                resizeHeight: (prevState.resizeHeight - (prevState.resizeCursorY - e.clientY)),
                resizeCursorX: e.clientX,
                resizeCursorY: e.clientY
            }))
        }
    }
    componentDidMount() {

    }
    componentWillUpdate() {
        if (this.state.dragging) {
            //this.windowHeaderRef.current.style.cursor = "move"
            this.windowRef.current.style.top = (this.windowRef.current.offsetTop - this.state.windowY) + "px"
            this.windowRef.current.style.left = (this.windowRef.current.offsetLeft - this.state.windowX) + "px"
        }
        if (this.state.resizing) {
            console.log("Changing size")
            console.log(this.state.resizeWidth)
            console.log(this.windowRef.current.style.width)
            this.windowRef.current.style.width = this.state.resizeWidth + "px"
            this.windowRef.current.style.height = this.state.resizeHeight + "px"
        }
    }

    render() {
        return (
            <div ref={this.windowRef} className="window">
                <div onMouseMove={this.onMouseMove} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} ref={this.windowHeaderRef} className="windowHeader">This is header</div>
                <div ref={this.windowBodyRef} onMouseDown={this.onMouseDownResize} onMouseUp={this.onMouseUpResize} onMouseMove={this.onMouseMoveResize}>
                    <PathfinderCharacterSheet/> 
                </div>
            </div>
        )
    }
}

export default DraggableWindow