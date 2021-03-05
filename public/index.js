import App from './App.js';

var lastId = 0;

export default function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';

    lastId++;
    return '' + prefix + lastId;
}

ReactDOM.render(React.createElement(App, null), document.getElementById("main_container"));