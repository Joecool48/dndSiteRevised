import ProfileIcon from "./ProfileIcon.js"
import DateDisplay from  "./DateDisplay.js"
import MessageContent from "./MessageContent.js"
import MessageHeader from "./MessageHeader.js"

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props.forwardedRef)
        return (
            <div className="message" ref={this.props.forwardedRef}>
                <MessageHeader profileName={this.props.profileName} date={this.props.date} profileIconSrc={this.props.profileIconSrc}/>
                <MessageContent message={this.props.message}/>
            </div>
        )
    }
}

export default Message