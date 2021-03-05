class IconBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClickIcon1 = () => {
        this.props.iconBarClickedCallback(1)
    }
    handleClickIcon2 = () => {
        this.props.iconBarClickedCallback(2)
    }
    handleClickIcon3 = () => {
        this.props.iconBarClickedCallback(3)
    }
    handleClickIcon4 = () => {
        this.props.iconBarClickedCallback(4)
    }
    handleClickIcon5 = () => {
        this.props.iconBarClickedCallback(5)
    }
    render() {
        return (
            <div className="iconBarWrapper">
                <i onClick={this.handleClickIcon1} className="iconBarElement fas fa-comment"></i>
                <i onClick={this.handleClickIcon2} className="iconBarElement fas fa-comment"></i>
                <i onClick={this.handleClickIcon3} className="iconBarElement fas fa-comment"></i>
                <i onClick={this.handleClickIcon4} className="iconBarElement fas fa-comment"></i>
                <i onClick={this.handleClickIcon5} className="iconBarElement fas fa-comment"></i>
            </div>
        )
    }
}

export default IconBar