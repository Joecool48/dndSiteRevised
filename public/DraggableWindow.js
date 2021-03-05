var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import newId from "./index.js";
import { registerDocumentMouseMove, registerDocumentMouseUp, unregisterDocumentMouseMove, unregisterDocumentMouseUp } from "./index.js";
import PathfinderCharacterSheet from "./PathfinderCharacterSheet.js";

var DraggableWindow = function (_React$Component) {
    _inherits(DraggableWindow, _React$Component);

    function DraggableWindow(props) {
        _classCallCheck(this, DraggableWindow);

        var _this = _possibleConstructorReturn(this, (DraggableWindow.__proto__ || Object.getPrototypeOf(DraggableWindow)).call(this, props));

        _this.onMouseDown = function (e) {
            e.preventDefault();
            _this.windowHeaderRef.current.style.cursor = "move";
            registerDocumentMouseMove(_this.windowId, _this.onMouseMove);
            registerDocumentMouseUp(_this.windowId, _this.onMouseUp);
            document.onmousemove = _this.onMouseMove;
            document.onmouseup = _this.onMouseUp;
            _this.setState({
                dragging: true,
                cursorX: e.clientX,
                cursorY: e.clientY
            });
        };

        _this.onMouseMove = function (e) {
            e.preventDefault();
            if (_this.state.dragging) {
                _this.setState(function (prevState) {
                    return {
                        windowX: prevState.cursorX - e.clientX,
                        windowY: prevState.cursorY - e.clientY,
                        cursorX: e.clientX,
                        cursorY: e.clientY
                    };
                });
            }
        };

        _this.onMouseUp = function (e) {
            e.preventDefault();
            document.onmousemove = null;
            document.onmouseup = null;
            unregisterDocumentMouseMove(_this.windowId);
            unregisterDocumentMouseUp(_this.windowId);
            _this.windowHeaderRef.current.style.cursor = "initial";
            _this.setState({
                dragging: false
            });
        };

        _this.state = {
            dragging: false,
            cursorX: 0,
            cursorY: 0,
            windowX: 0,
            windowY: 0
        };
        _this.windowRef = React.createRef();
        _this.windowHeaderRef = React.createRef();
        _this.windowId = newId();
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        return _this;
    }

    _createClass(DraggableWindow, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            if (this.state.dragging) {
                //this.windowHeaderRef.current.style.cursor = "move"
                this.windowRef.current.style.top = this.windowRef.current.offsetTop - this.state.windowY + "px";
                this.windowRef.current.style.left = this.windowRef.current.offsetLeft - this.state.windowX + "px";
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { ref: this.windowRef, className: "window" },
                React.createElement(
                    "div",
                    { onMouseMove: this.onMouseMove, onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, ref: this.windowHeaderRef, className: "windowHeader" },
                    "This is header"
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(PathfinderCharacterSheet, null)
                )
            );
        }
    }]);

    return DraggableWindow;
}(React.Component);

export default DraggableWindow;