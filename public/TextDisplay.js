var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Message from "./Message.js";
import TypeBox from "./TypeBox.js";
import newId from "./index.js";
import IconBar from "./IconBar.js";

var TextDisplay = function (_React$Component) {
    _inherits(TextDisplay, _React$Component);

    function TextDisplay(props) {
        _classCallCheck(this, TextDisplay);

        var _this = _possibleConstructorReturn(this, (TextDisplay.__proto__ || Object.getPrototypeOf(TextDisplay)).call(this, props));

        _this.addMessageToState = function (messageObject) {
            _this.setState({ newMessage: messageObject });
            _this.setState(function (prevState, props) {
                var msg = {
                    date: new Date(),
                    message: prevState.newMessage,
                    profileIconSrc: "default_profile.jpg",
                    messageId: newId(),
                    messageRef: React.createRef()
                };
                var list = [].concat(_toConsumableArray(prevState.messages), [msg]);
                return {
                    messages: list,
                    newMessage: null,
                    lastMessageId: msg.messageId,
                    lastMessageRef: msg.messageRef
                };
            });
        };

        _this.iconBarClickedCallback = function (optionClicked) {
            _this.setState({ iconBarOption: optionClicked });
        };

        _this.state = {
            newMessage: null,
            messages: [],
            lastMessageId: null,
            lastMessageRef: null,
            iconBarOption: 1
        };
        _this.chatAreaRef = React.createRef();
        return _this;
    }

    _createClass(TextDisplay, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.state.lastMessageRef !== null && this.state.lastMessageRef.current !== null) {
                this.state.lastMessageRef.current.scrollIntoView();
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (this.state.lastMessageRef !== null && this.state.lastMessageRef.current !== null) {
                this.state.lastMessageRef.current.scrollIntoView();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var optionText = React.createElement(
                "ul",
                { className: "chatList" },
                this.state.messages.map(function (msg, index) {
                    return React.createElement(Message, { profileName: "meofc", forwardedRef: msg.messageRef, id: msg.messageId, key: msg.messageId, profileIconSrc: msg.profileIconSrc, message: msg.message, date: msg.date });
                })
            );

            if (this.state.iconBarOption == 2) {
                optionText = React.createElement(
                    "p",
                    null,
                    "Hello there this is the second tab"
                );
            }

            return React.createElement(
                "div",
                { className: "textWrapper" },
                React.createElement(IconBar, { iconBarClickedCallback: this.iconBarClickedCallback }),
                React.createElement(
                    "div",
                    { className: "chatArea", ref: this.chatAreaRef },
                    optionText
                ),
                React.createElement(TypeBox, { createMessageCallback: this.addMessageToState })
            );
        }
    }]);

    return TextDisplay;
}(React.Component);

export default TextDisplay;