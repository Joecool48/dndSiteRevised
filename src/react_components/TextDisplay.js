import Message from "./Message.js"
import TypeBox from "./TypeBox.js"
import newId from "./index.js"
import IconBar from "./IconBar.js"

class TextDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: null,
            messages: [],
            lastMessageId: null,
            lastMessageRef: null,
            iconBarOption: 1
        }
        this.chatAreaRef = React.createRef()
    }
    addMessageToState = (messageObject) => {
        this.setState({newMessage: messageObject})
        this.setState((prevState, props) => {
            let msg = {
                date: new Date(),
                message: prevState.newMessage,
                profileIconSrc: "default_profile.jpg",
                messageId: newId(),
                messageRef: React.createRef()
            }
            const list = [...prevState.messages, msg]
            return {
                messages: list,
                newMessage: null,
                lastMessageId: msg.messageId,
                lastMessageRef: msg.messageRef
            }
        })
    }

    iconBarClickedCallback = (optionClicked) => {
        this.setState({iconBarOption: optionClicked})
    }

    componentDidMount() {
        if (this.state.lastMessageRef !== null && this.state.lastMessageRef.current !== null) {
            this.state.lastMessageRef.current.scrollIntoView()
        }
    }
    componentDidUpdate() {
        if (this.state.lastMessageRef !== null && this.state.lastMessageRef.current !== null) {
            this.state.lastMessageRef.current.scrollIntoView()
        }

    }
    render() {
        let optionText = (<ul className="chatList">
                        {this.state.messages.map((msg, index) => {
                            return <Message profileName="meofc" forwardedRef={msg.messageRef} id={msg.messageId} key={msg.messageId} profileIconSrc={msg.profileIconSrc} message={msg.message} date={msg.date}></Message>    
                        })}
                    </ul>)
        
        if (this.state.iconBarOption == 2) {
            optionText = <p>Hello there this is the second tab</p>
        }
        

        return (
            <div className="textWrapper">
                <IconBar iconBarClickedCallback={this.iconBarClickedCallback}/>
                <div className="chatArea" ref={this.chatAreaRef}>
                    {optionText}
                </div>

                <TypeBox createMessageCallback={this.addMessageToState}/>
            </div>
        )
    }
}

export default TextDisplay
