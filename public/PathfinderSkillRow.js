var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PathfinderSkillRow = function (_React$Component) {
    _inherits(PathfinderSkillRow, _React$Component);

    function PathfinderSkillRow(props) {
        _classCallCheck(this, PathfinderSkillRow);

        var _this = _possibleConstructorReturn(this, (PathfinderSkillRow.__proto__ || Object.getPrototypeOf(PathfinderSkillRow)).call(this, props));

        _this.onRankChange = function () {
            var val = _this.rankRef.current.value(_this.props.rankListener)(_this.props.skillName, val);
        };

        _this.onTotalChange = function () {
            var val = _this.totalRef.current.value(_this.props.totalListener)(_this.props.skillName, val);
        };

        _this.onModChange = function () {
            var val = _this.modRef.current.value(_this.props.modListener)(_this.props.skillName, val);
        };

        _this.onMiscChange = function () {
            var val = _this.miscRef.current.value(_this.props.miscListener)(_this.props.skillName, val);
        };

        _this.onCondChange = function () {
            var val = _this.condRef.current.value(_this.props.condListener)(_this.props.skillName, val);
        };

        _this.state = {};
        _this.totalRef = React.createRef();
        _this.rankRef = React.createRef();
        _this.modRef = React.createRef();
        _this.miscRef = React.createRef();
        _this.condRef = React.createRef();
        return _this;
    }

    _createClass(PathfinderSkillRow, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "skillRow" },
                React.createElement("input", { type: "checkbox" }),
                React.createElement(
                    "p",
                    { className: "skillText" },
                    this.props.skillName
                ),
                React.createElement("input", { ref: this.totalRef, className: "skillTextField", onChange: this.onTotalChange }),
                React.createElement(
                    "p",
                    { className: "signText" },
                    "="
                ),
                React.createElement("input", { ref: this.rankRef, className: "skillTextField", onChange: this.onRankChange }),
                React.createElement(
                    "p",
                    { className: "signText" },
                    "+"
                ),
                React.createElement("input", { ref: this.modRef, className: "skillTextField", onChange: this.onModChange }),
                React.createElement(
                    "p",
                    { className: "signText" },
                    "+"
                ),
                React.createElement("input", { ref: this.miscRef, className: "skillTextField", onChange: this.onMiscChange }),
                React.createElement(
                    "p",
                    { className: "signText" },
                    "+"
                ),
                React.createElement("input", { ref: this.condRef, className: "skillTextField", onChange: this.onCondChange })
            );
        }
    }]);

    return PathfinderSkillRow;
}(React.Component);

export default PathfinderSkillRow;