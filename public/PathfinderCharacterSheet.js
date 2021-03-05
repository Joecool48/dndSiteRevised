var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PathfinderCharacterSheet = function (_React$Component) {
    _inherits(PathfinderCharacterSheet, _React$Component);

    function PathfinderCharacterSheet(props) {
        _classCallCheck(this, PathfinderCharacterSheet);

        var _this = _possibleConstructorReturn(this, (PathfinderCharacterSheet.__proto__ || Object.getPrototypeOf(PathfinderCharacterSheet)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(PathfinderCharacterSheet, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "mainCol" },
                    React.createElement(
                        "div",
                        { className: "abilityHitPointRow" },
                        React.createElement(
                            "div",
                            { className: "abilityScoresContainer" },
                            React.createElement(
                                "div",
                                { className: "abilityScoresCol" },
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "STR"
                                ),
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "DEX"
                                ),
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "CON"
                                ),
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "INT"
                                ),
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "WIS"
                                ),
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "CHA"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityScoresCol" },
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityScoresCol" },
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityScoresCol" },
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "hitPointCol" },
                            React.createElement(
                                "button",
                                { className: "hitPointName blackName" },
                                "HIT POINTS"
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityHitPointRow" },
                                React.createElement(
                                    "div",
                                    { className: "labelTopBoxCol" },
                                    React.createElement(
                                        "p",
                                        { className: "labelText" },
                                        "Curr"
                                    ),
                                    React.createElement("input", { className: "hitPointBox" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "labelTopBoxCol" },
                                    React.createElement(
                                        "p",
                                        { className: "labelText" },
                                        "Max"
                                    ),
                                    React.createElement("input", { className: "hitPointBox" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "labelTopBoxCol" },
                                    React.createElement(
                                        "p",
                                        { className: "labelText" },
                                        "Temp"
                                    ),
                                    React.createElement("input", { className: "hitPointBox" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityHitPointRow" },
                                React.createElement(
                                    "p",
                                    { className: "labelText" },
                                    "Temp"
                                ),
                                React.createElement("input", { className: "tempNonlethalBox" }),
                                React.createElement(
                                    "p",
                                    { className: "labelText" },
                                    "Nonlethal"
                                ),
                                React.createElement("input", { className: "tempNonlethalBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityHitPointRow" },
                                React.createElement(
                                    "p",
                                    { className: "labelText" },
                                    "DR"
                                ),
                                React.createElement("input", { className: "drTextBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityHitPointRow" },
                                React.createElement(
                                    "div",
                                    { className: "labelTopBoxCol" },
                                    React.createElement("p", { className: "labelText" }),
                                    React.createElement(
                                        "button",
                                        { className: "blackName initName" },
                                        "INIT"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "labelTopBoxCol" },
                                    React.createElement(
                                        "p",
                                        { className: "labelText" },
                                        "Total"
                                    ),
                                    React.createElement("input", { className: "initBox" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "labelTopBoxCol" },
                                    React.createElement(
                                        "p",
                                        { className: "labelText" },
                                        "Temp"
                                    ),
                                    React.createElement("input", { className: "initBox" })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "abilityHitPointRow" },
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "AC"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "TOUCH"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "FLAT-FOOTED"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement("input", { className: "initBox" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "abilityHitPointRow" },
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "FORT"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "REF"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "WILL"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "abilityHitPointRow" },
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "BAB"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "CMB"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "abilityHitPointRow" },
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "MELEE"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "RANGED"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "abilityHitPointRow" },
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "CMD"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "SR"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "initBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "labelTopBoxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "initBox" })
                        )
                    )
                ),
                React.createElement("div", { className: "mainCol" })
            );
        }
    }]);

    return PathfinderCharacterSheet;
}(React.Component);

export default PathfinderCharacterSheet;