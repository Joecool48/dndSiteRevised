var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function monthNumToMonth(monthNum) {
    switch (monthNum) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

function dayWithEnding(dayNum) {
    if (dayNum % 10 === 1) return dayNum.toString() + "st";else if (dayNum % 10 === 2) return dayNum.toString() + "nd";else if (dayNum % 10 === 3) return dayNum.toString() + "rd";else return dayNum.toString() + "th";
}

function formatMinutes(minuteNum) {
    if (minuteNum < 10) return "0" + minuteNum;else return minuteNum;
}

var DateDisplay = function (_React$Component) {
    _inherits(DateDisplay, _React$Component);

    function DateDisplay(props) {
        _classCallCheck(this, DateDisplay);

        var _this = _possibleConstructorReturn(this, (DateDisplay.__proto__ || Object.getPrototypeOf(DateDisplay)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(DateDisplay, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "dateText" },
                React.createElement(
                    "span",
                    null,
                    monthNumToMonth(this.props.date.getMonth()) + ", " + dayWithEnding(this.props.date.getDay())
                ),
                React.createElement("br", null),
                React.createElement(
                    "span",
                    null,
                    this.props.date.getHours(),
                    ":",
                    formatMinutes(this.props.date.getMinutes())
                )
            );
        }
    }]);

    return DateDisplay;
}(React.Component);

export default DateDisplay;