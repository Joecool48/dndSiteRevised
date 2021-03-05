var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import newId from "./index.js";

var TypeBox = function (_React$Component) {
    _inherits(TypeBox, _React$Component);

    function TypeBox(props) {
        _classCallCheck(this, TypeBox);

        var _this = _possibleConstructorReturn(this, (TypeBox.__proto__ || Object.getPrototypeOf(TypeBox)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(TypeBox, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.id = newId();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "typeBoxWrapper" },
                React.createElement("input", { id: this.id, className: "typeBox", onKeyDown: function onKeyDown(e) {
                        return _this2.submitText(e);
                    } })
            );
        }
    }, {
        key: "submitText",
        value: function submitText(event) {
            if (event.code === "Enter") {
                console.log("You pressed enter yay");
                console.log(this.props.createMessageCallback);
                var elementId = document.getElementById(this.id);
                this.props.createMessageCallback(elementId.value);
                elementId.value = "";
                event.preventDefault();
            }
        }
    }]);

    return TypeBox;
}(React.Component);

export default TypeBox;