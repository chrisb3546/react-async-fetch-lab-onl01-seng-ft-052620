// create your App component here
import React, { Component } from 'react'

export class App extends Component {
    componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(astros => console.log(astros))

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App
