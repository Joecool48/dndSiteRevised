var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PathfinderSkillRow from "./PathfinderSkillRow.js";

var PathfinderCharacterSheet = function (_React$Component) {
    _inherits(PathfinderCharacterSheet, _React$Component);

    function PathfinderCharacterSheet(props) {
        _classCallCheck(this, PathfinderCharacterSheet);

        var _this = _possibleConstructorReturn(this, (PathfinderCharacterSheet.__proto__ || Object.getPrototypeOf(PathfinderCharacterSheet)).call(this, props));

        _this.state = {
            skills: {
                "Acrobatics": {
                    "name": "Acrobatics"
                },
                "Appraise": {
                    "name": "Appraise"
                },
                "Bluff": {
                    "name": "Bluff"
                },
                "Climb": {
                    "name": "Climb"
                },
                "Diplomacy": {
                    "name": "Diplomacy"
                },
                "Disable Device": {
                    "name": "Disable Device"
                },
                "Disguise": {
                    "name": "Disguise"
                },
                "Escape Artist": {
                    "name": "Escape Artist"
                },
                "Fly": {
                    "name": "Fly"
                },
                "Handle Animal": {
                    "name": "Handle Animal"
                },
                "Heal": {
                    "name": "Heal"
                },
                "Intimidate": {
                    "name": "Intimidate"
                },
                "Knowledge (Arcana)": {
                    "name": "Knowledge (Arcana)"
                },
                "Knowledge (Dungeoneering)": {
                    "name": "Knowledge (Dungeoneering)"
                },
                "Knowledge (Engineering)": {
                    "name": "Knowledge (Engineering)"
                },
                "Knowledge (Geography)": {
                    "name": "Knowledge (Geography)"
                },
                "Knowledge (History)": {
                    "name": "Knowledge (History)"
                },
                "Knowledge (Local)": {
                    "name": "Knowledge (Local)"
                },
                "Knowledge (Nature)": {
                    "name": "Knowledge (Nature)"
                },
                "Knowledge (Nobility)": {
                    "name": "Knowledge (Nobility)"
                },
                "Knowledge (Planes)": {
                    "name": "Knowledge (Planes)"
                },
                "Knowledge (Religion)": {
                    "name": "Knowledge (Religion)"
                },
                "Linguistics": {
                    "name": "Linguistics"
                },
                "Perception": {
                    "name": "Perception"
                },
                "Ride": {
                    "name": "Ride"
                },
                "Sense Motive": {
                    "name": "Sense Motive"
                },
                "Sleight Of Hand": {
                    "name": "Sleight of Hand"
                },
                "Spellcraft": {
                    "name": "Spellcraft"
                },
                "Stealth": {
                    "name": "Stealth"
                },
                "Survival": {
                    "name": "Survival"
                },
                "Swim": {
                    "name": "Swim"
                },
                "Use Magic Device": {
                    "name": "Use Magic Device"
                }
            }
        };
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
                                { className: "abilityScoreRow" },
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "STR"
                                ),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityScoreRow" },
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "DEX"
                                ),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityScoreRow" },
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "CON"
                                ),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityScoreRow" },
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "INT"
                                ),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityScoreRow" },
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "WIS"
                                ),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" }),
                                React.createElement("input", { className: "abilityScoreBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "abilityScoreRow" },
                                React.createElement(
                                    "button",
                                    { className: "abilityScoreName blackName" },
                                    "CHA"
                                ),
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
                                { className: "hitPointRow" },
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
                                { className: "hitPointRow" },
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
                                { className: "hitPointRow" },
                                React.createElement(
                                    "p",
                                    { className: "labelText" },
                                    "DR"
                                ),
                                React.createElement("input", { className: "drTextBox" })
                            ),
                            React.createElement(
                                "div",
                                { className: "hitPointRow" },
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
                                    React.createElement("input", { className: "normalBox" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "labelTopBoxCol" },
                                    React.createElement(
                                        "p",
                                        { className: "labelText" },
                                        "Temp"
                                    ),
                                    React.createElement("input", { className: "normalBox" })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mainRow" },
                        React.createElement(
                            "div",
                            { className: "acCol buttonCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Hey"
                            ),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "AC"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "acCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "acCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "acCol buttonCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Hey"
                            ),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "TOUCH"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "acCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Hey"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "acCol buttonCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Hey"
                            ),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "FLAT-FOOTED"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "acCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Hey"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mainRow" },
                        React.createElement(
                            "div",
                            { className: "saveCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "FORT"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "saveCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "saveCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "saveCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "REF"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "saveCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "saveCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "saveCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "WILL"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "saveCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "saveCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mainRow" },
                        React.createElement(
                            "div",
                            { className: "babCmbCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "BAB"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "babCmbCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "babCmbCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "babCmbCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "CMB"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "babCmbCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "babCmbCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mainRow" },
                        React.createElement(
                            "div",
                            { className: "attackCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "MELEE"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "attackCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "attackCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "attackCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "RANGED"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "attackCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "attackCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mainRow" },
                        React.createElement(
                            "div",
                            { className: "cmdSrCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "CMD"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "cmdSrCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "cmdSrCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "cmdSrCol buttonCol" },
                            React.createElement("p", { className: "labelText" }),
                            React.createElement(
                                "button",
                                { className: "blackName acName" },
                                "SR"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "cmdSrCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Total"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        ),
                        React.createElement(
                            "div",
                            { className: "cmdSrCol boxCol" },
                            React.createElement(
                                "p",
                                { className: "labelText" },
                                "Temp"
                            ),
                            React.createElement("input", { className: "normalBox" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "mainCol" },
                    React.createElement(
                        "p",
                        { className: "blackName" },
                        "SKILLS"
                    ),
                    Object.values(this.state.skills).map(function (skill, index) {
                        console.log(skill.name);
                        return React.createElement(PathfinderSkillRow, { skillName: skill.name });
                    })
                )
            );
        }
    }]);

    return PathfinderCharacterSheet;
}(React.Component);

export default PathfinderCharacterSheet;