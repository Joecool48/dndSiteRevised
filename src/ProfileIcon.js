class ProfileIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <img className="profileIcon" src={this.props.profileIconSrc}/>
        )
    }
}

export default ProfileIcon