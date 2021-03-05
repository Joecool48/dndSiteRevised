import ProfileIcon from "./ProfileIcon.js"
import DateDisplay from "./DateDisplay.js"

class MessageHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="header">
                <ProfileIcon profileIconSrc={this.props.profileIconSrc}/>
                <DateDisplay date={this.props.date}/>
                <p className="nameWrapper">{this.props.profileName}:</p>
            </div>            
        )
    }
}

export default MessageHeader