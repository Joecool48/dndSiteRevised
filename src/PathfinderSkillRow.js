class PathfinderSkillRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
        <div className="skillRow">
            <input type="checkbox"></input>
            <p className="skillText">{this.props.skillName}</p>
            <input className="skillTextField"></input>
            <p className="signText">=</p>
            <input className="skillTextField"></input>
            <p className="signText">+</p>
            <input className="skillTextField"></input>
            <p className="signText">+</p>
            <input className="skillTextField"></input>
            <p className="signText">+</p>
            <input className="skillTextField"></input>
        </div>
        )
    }
}

export default PathfinderSkillRow