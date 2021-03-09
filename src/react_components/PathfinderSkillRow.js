class PathfinderSkillRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.totalRef = React.createRef()
        this.rankRef = React.createRef()
        this.modRef = React.createRef()
        this.miscRef = React.createRef()
        this.condRef = React.createRef()
    }

    onRankChange = () => {
        let val = this.rankRef.current.value
        (this.props.rankListener)(this.props.skillName, val)
    }

    onTotalChange = () => {
        let val = this.totalRef.current.value
        (this.props.totalListener)(this.props.skillName, val)
    }

    onModChange = () => {
        let val = this.modRef.current.value
        (this.props.modListener)(this.props.skillName, val)
    }

    onMiscChange = () => {
        let val = this.miscRef.current.value
        (this.props.miscListener)(this.props.skillName, val)
    }
    
    onCondChange = () => {
        let val = this.condRef.current.value
        (this.props.condListener)(this.props.skillName, val)
    }

    render() {
        return (
        <div className="skillRow">
            <input type="checkbox"></input>
            <p className="skillText">{this.props.skillName}</p>
            <input ref={this.totalRef} className="skillTextField" onChange={this.onTotalChange}></input>
            <p className="signText">=</p>
            <input ref={this.rankRef} className="skillTextField" onChange={this.onRankChange}></input>
            <p className="signText">+</p>
            <input ref={this.modRef} className="skillTextField" onChange={this.onModChange}></input>
            <p className="signText">+</p>
            <input ref={this.miscRef} className="skillTextField" onChange={this.onMiscChange}></input>
            <p className="signText">+</p>
            <input ref={this.condRef} className="skillTextField" onChange={this.onCondChange}></input>
        </div>
        )
    }
}

export default PathfinderSkillRow