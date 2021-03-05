import App from './App.js'

let lastId = 0

export default function (prefix='id') {
    lastId++
    return `${prefix}${lastId}`
}

ReactDOM.render(<App/>,  document.getElementById("main_container"));


