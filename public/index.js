import App from './App.js';

var lastId = 0;

export default function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';

    lastId++;
    return '' + prefix + lastId;
}

window.registeredMouseDownFunctions = {}
window.registeredMouseUpFunctions = {}
window.registeredMouseMoveFunctions = {}

function mouseDownFunc(e) {
    for (const key in Object.keys(window.registeredMouseDownFunctions)) {
        (window.registeredMouseDownFunctions[key])(e)
    }
}
function mouseUpFunc(e) {
    for (const key in Object.keys(window.registeredMouseUpFunctions)) {
        (window.registeredMouseUpFunctions[key])(e)
    }
}

function mouseMoveFunc(e) {
    for (const key in Object.keys(window.registeredMouseMoveFunctions)) {
        (window.registeredMouseMoveFunctions[key])(e)
    }
}

function registerDocumentMouseDown(elemId, func) {
    window.registeredMouseDownFunctions[elemId] = func
    document.onmousedown = mouseDownFunc
}

function registerDocumentMouseUp(elemId, func) {
    window.registeredMouseUpFunctions[elemId] = func
    document.onmouseup = mouseUpFunc
}

function registerDocumentMouseMove(elemId, func) {
    window.registeredMouseMoveFunctions[elemId] = func
    document.onmousemove = mouseMoveFunc
}

function unregisterDocumentMouseDown(elemId) {
    delete window.registeredMouseDownFunctions[elemId]
}

function unregisterDocumentMouseUp(elemId) {
    delete window.registeredMouseUpFunctions[elemId]
}

function unregisterDocumentMouseMove(elemId) {
    delete window.registeredMouseMoveFunctions[elemId]
}

export {
    registerDocumentMouseDown,
    registerDocumentMouseUp,
    registerDocumentMouseMove,
    unregisterDocumentMouseDown,
    unregisterDocumentMouseMove,
    unregisterDocumentMouseUp
}

ReactDOM.render(React.createElement(App, null), document.getElementById("main_container"));