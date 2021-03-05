var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import newId from "./index.js";
import { registerDocumentMouseMove, registerDocumentMouseUp, unregisterDocumentMouseMove, unregisterDocumentMouseUp } from "./globalEvent.js";
import PathfinderCharacterSheet from "./PathfinderCharacterSheet.js";

var DraggableWindow = function (_React$Component) {
    _inherits(DraggableWindow, _React$Component);

    function DraggableWindow(props) {
        _classCallCheck(this, DraggableWindow);

        var _this = _possibleConstructorReturn(this, (DraggableWindow.__proto__ || Object.getPrototypeOf(DraggableWindow)).call(this, props));

        _this.onMouseDown = function (e) {
            e.preventDefault();
            _this.windowHeaderRef.current.style.cursor = "move";
            registerDocumentMouseMove(_this.windowId, function (e) {
                _this.onMouseMove(e);
            });
            registerDocumentMouseUp(_this.windowId, function (e) {
                _this.onMouseUp(e);
            });
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
            _this.windowHeaderRef.current.style.cursor = "initial";
            _this.setState({
                dragging: false
            });
            unregisterDocumentMouseMove(_this.windowId);
            unregisterDocumentMouseUp(_this.windowId);
        };

        _this.onMouseUpResize = function (e) {
            e.preventDefault();
            _this.windowRef.current.style.cursor = "initial";
            _this.setState({
                resizing: false
            });
            unregisterDocumentMouseMove(_this.resizeId);
            unregisterDocumentMouseUp(_this.resizeId);
        };

        _this.onMouseDownResize = function (e) {
            var tolerance = 20;
            var domId = _this.windowRef.current;
            var bottomRightX = domId.offsetLeft + domId.offsetWidth;
            var bottomRightY = domId.offsetTop + domId.offsetHeight;
            console.log(domId.offsetWidth);
            if (e.clientX <= bottomRightX && e.clientX >= bottomRightX - tolerance && e.clientY <= bottomRightY && e.clientY >= bottomRightY - tolerance) {
                e.preventDefault();
                _this.windowRef.current.style.cursor = "ew-resize";
                _this.setState({
                    resizing: true,
                    resizeWidth: domId.offsetWidth,
                    resizeHeight: domId.offsetHeight,
                    resizeCursorX: e.clientX,
                    resizeCursorY: e.clientY
                });
                registerDocumentMouseMove(_this.resizeId, _this.onMouseMoveResize);
                registerDocumentMouseUp(_this.resizeId, _this.onMouseUpResize);
            }
        };

        _this.onMouseMoveResize = function (e) {
            if (_this.state.resizing) {
                _this.windowRef.current.style.cursor = "ew-resize";
                e.preventDefault();
                var domId = _this.windowRef.current;
                _this.setState(function (prevState, prevProps) {
                    return {
                        resizeWidth: prevState.resizeWidth - (prevState.resizeCursorX - e.clientX),
                        resizeHeight: prevState.resizeHeight - (prevState.resizeCursorY - e.clientY),
                        resizeCursorX: e.clientX,
                        resizeCursorY: e.clientY
                    };
                });
            }
        };

        _this.state = {
            dragging: false,
            cursorX: 0,
            cursorY: 0,
            windowX: 0,
            windowY: 0,
            resizing: false,
            resizeWidth: 0,
            resizeHeight: 0,
            resizeCursorX: 0,
            resizeCursorY: 0
        };
        _this.windowRef = React.createRef();
        _this.windowHeaderRef = React.createRef();
        _this.windowBodyRef = React.createRef();
        _this.windowId = newId();
        _this.resizeId = newId();
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
            if (this.state.resizing) {
                console.log("Changing size");
                console.log(this.state.resizeWidth);
                console.log(this.windowRef.current.style.width);
                this.windowRef.current.style.width = this.state.resizeWidth + "px";
                this.windowRef.current.style.height = this.state.resizeHeight + "px";
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
                    { ref: this.windowBodyRef, onMouseDown: this.onMouseDownResize, onMouseUp: this.onMouseUpResize, onMouseMove: this.onMouseMoveResize },
                    React.createElement(PathfinderCharacterSheet, null)
                )
            );
        }
    }]);

    return DraggableWindow;
}(React.Component);

export default DraggableWindow;