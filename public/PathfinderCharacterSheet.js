var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PathfinderCharacterSheetMain from "./PathfinderCharacterSheetMain.js";
import PathfinderCharacterSheetGear from "./PathfinderCharacterSheetGear.js";

var PathfinderCharacterSheet = function (_React$Component) {
    _inherits(PathfinderCharacterSheet, _React$Component);

    function PathfinderCharacterSheet(props) {
        _classCallCheck(this, PathfinderCharacterSheet);

        var _this = _possibleConstructorReturn(this, (PathfinderCharacterSheet.__proto__ || Object.getPrototypeOf(PathfinderCharacterSheet)).call(this, props));

        _this.state = {
            tabs: ["Main", "Gear", "tab3"]
        };
        return _this;
    }

    _createClass(PathfinderCharacterSheet, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.setTabs(this.state.tabs);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.currentTab === "Main") return React.createElement(PathfinderCharacterSheetMain, null);else if (this.props.currentTab === "Gear") return React.createElement(PathfinderCharacterSheetGear, null);else {
                return React.createElement("div", null);
            }
        }
    }]);

    return PathfinderCharacterSheet;
}(React.Component);

export default PathfinderCharacterSheet;