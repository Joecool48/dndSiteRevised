class MessageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <p className="messageContent">{this.props.message}</p>
            </div>
        )
    }
}

export default MessageContent