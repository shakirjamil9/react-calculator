import React, { Component } from 'react'
import Buttons from './buttons/buttons'

class App extends Component {
    state = {
        result: ''
    }

    HandleClick = (symbol) => {
        if(symbol === 'C'){
            this.HandleClear()
        } else if(symbol === 'CE'){
            this.HandleRemove()
        } else if(symbol === '='){
            this.HandleEvaluate()
        } else {
            this.setState({
                result: this.state.result + symbol
            })
        }
    }

    HandleClear = (e) => {
        this.setState({
            result: ''
        })
    }

    HandleRemove = (e) => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    HandleEvaluate = (e)=>{
        this.setState({
            result: eval(this.state.result)
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                <Buttons onClick={this.HandleClick} />
            </div>
        )
    }
}

export default App