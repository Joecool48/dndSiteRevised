var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconBar = function (_React$Component) {
    _inherits(IconBar, _React$Component);

    function IconBar(props) {
        _classCallCheck(this, IconBar);

        var _this = _possibleConstructorReturn(this, (IconBar.__proto__ || Object.getPrototypeOf(IconBar)).call(this, props));

        _this.handleClickIcon1 = function () {
            _this.props.iconBarClickedCallback(1);
        };

        _this.handleClickIcon2 = function () {
            _this.props.iconBarClickedCallback(2);
        };

        _this.handleClickIcon3 = function () {
            _this.props.iconBarClickedCallback(3);
        };

        _this.handleClickIcon4 = function () {
            _this.props.iconBarClickedCallback(4);
        };

        _this.handleClickIcon5 = function () {
            _this.props.iconBarClickedCallback(5);
        };

        _this.state = {};
        return _this;
    }

    _createClass(IconBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "iconBarWrapper" },
                React.createElement("i", { onClick: this.handleClickIcon1, className: "iconBarElement fas fa-comment" }),
                React.createElement("i", { onClick: this.handleClickIcon2, className: "iconBarElement fas fa-comment" }),
                React.createElement("i", { onClick: this.handleClickIcon3, className: "iconBarElement fas fa-comment" }),
                React.createElement("i", { onClick: this.handleClickIcon4, className: "iconBarElement fas fa-comment" }),
                React.createElement("i", { onClick: this.handleClickIcon5, className: "iconBarElement fas fa-comment" })
            );
        }
    }]);

    return IconBar;
}(React.Component);

export default IconBar;