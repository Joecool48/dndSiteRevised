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
            var boundingRect = domId.getBoundingClientRect();
            var bottomRightX = boundingRect.right;
            var bottomRightY = boundingRect.bottom;
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

        _this.onTabsChange = function (t) {
            _this.setState({ tabs: t, currentTab: t[0] });
        };

        _this.onTabClicked = function (e) {
            console.log("Clicked button tab: ", e.currentTarget.value);
            _this.setState({ currentTab: e.currentTarget.value });
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
            resizeCursorY: 0,
            // represents the current tab number (1,2,3,etc...)
            currentTab: 0,
            tabs: ["default"]
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
                this.windowRef.current.style.top = this.windowRef.current.offsetTop - this.state.windowY + "px";
                this.windowRef.current.style.left = this.windowRef.current.offsetLeft - this.state.windowX + "px";
            }
            if (this.state.resizing) {
                this.windowRef.current.style.width = this.state.resizeWidth + "px";
                this.windowRef.current.style.height = this.state.resizeHeight + "px";
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { ref: this.windowRef, onMouseDown: this.onMouseDownResize, className: "window" },
                React.createElement(
                    "div",
                    { onMouseDown: this.onMouseDown, ref: this.windowHeaderRef, className: "windowHeader" },
                    "This is header"
                ),
                React.createElement(
                    "div",
                    { className: "tabList" },
                    this.state.tabs.map(function (name, index) {
                        return React.createElement(
                            "button",
                            { onClick: _this2.onTabClicked, value: name, className: "tab" },
                            name
                        );
                    })
                ),
                React.createElement(
                    "div",
                    { ref: this.windowBodyRef },
                    React.createElement(PathfinderCharacterSheet, { setTabs: this.onTabsChange, currentTab: this.state.currentTab })
                )
            );
        }
    }]);

    return DraggableWindow;
}(React.Component);

export default DraggableWindow;