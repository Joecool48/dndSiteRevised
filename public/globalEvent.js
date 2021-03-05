window.registeredMouseDownFunctions = {}
window.registeredMouseUpFunctions = {}
window.registeredMouseMoveFunctions = {}

function mouseDownFunc(e) {
    const vals = Object.values(window.registeredMouseDownFunctions)
    let i = 0
    while (i < vals.length) {
        vals[i](e)
        i += 1
    }
}

function mouseUpFunc(e) {
    const vals = Object.values(window.registeredMouseUpFunctions)
    let i = 0
    while (i < vals.length) {
        vals[i](e)
        i += 1
    }
}

function mouseMoveFunc(e) {
    const vals = Object.values(window.registeredMouseMoveFunctions)
    let i = 0
    while (i < vals.length) {
        vals[i](e)
        i += 1
    }
}

function registerDocumentMouseDown(elemId, func) {
    window.registeredMouseDownFunctions[elemId] = func
    document.onmousedown = mouseDownFunc
}

function registerDocumentMouseUp(elemId, func) {
    window.registeredMouseUpFunctions[elemId] = func
    console.log(window.registeredMouseUpFunctions)
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
