import TextDisplay from "./TextDisplay.js"
import DraggableWindow from "./DraggableWindow.js"

class App extends React.Component {
    render() {
        return ( 
            <div>
                <DraggableWindow/>
                <TextDisplay/>
            </div>
            )
    }
}

export default App;
