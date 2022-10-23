import React, { Component } from "react";

export default class Lifecycle extends Component{
    constructor() {
		super()

		this.state = {
			color : '',
            wheel : '',
            base : '',
            rangkuman : ''
		}
	}



    componentDidMount(){
        this.setState({
            color: '?',
            wheel: '?',
            base: '?',
        })
    }

    componentDidUpdate(propsSebelumnya, stateSebelumnya){ 
        if (stateSebelumnya.color !== this.state.color || stateSebelumnya.wheel !== this.state.wheel ||  stateSebelumnya.base !== this.state.base ) {
			this.setState({
				rangkuman: `It Is Based on ${this.state.base} style, has ${this.state.wheel} wheel and with ${this.state.color} as it main color.`
			})
		}
     }

    componentWillUnmount(){
        this.setState({
            color : '',
            wheel : '',
            base : '',
            rangkuman : ''
        })
    }

        
    render(){
        return <div>
        <h2>Your Car Costumization Is :</h2>
        <p>{this.state.rangkuman}</p>

		<div id="color">
        <p>Select Color</p>
            <button onClick={() => this.setState({color : 'Red'})}>
                Red
            </button>
            <button onClick={() => this.setState({color : 'Blue'})}>
                Blue
            </button>
            <button onClick={() => this.setState({color : 'Green'})}>
                Green
            </button>
            <button onClick={() => this.setState({color : 'Violet'})}>
                Violet
            </button>
            <button onClick={() => this.setState({color : 'Black'})}>
                Black
            </button>
            <button onClick={() => this.setState({color : 'White'})}>
                White
            </button>
        </div>
        <div id="wheel">
            <button onClick={() => this.setState({wheel : '3'})}>
                3
            </button>
            <button onClick={() => this.setState({wheel : '4'})}>
                4
            </button>
            <button onClick={() => this.setState({wheel : '6'})}>
                6
            </button>   
        </div>
        <div id="base">
            <button onClick={() => this.setState({base :'Batmobile'})}>
                Batmobile
            </button>
            <button onClick={() => this.setState({ base :'Jokermobile'})}>
                Jokermobile
            </button>
            <button onClick={() => this.setState({base : 'Robinmobile' })}>
                Robinmobile
            </button>
            <button onClick={() => this.setState({base :'Esmeralda'})}>
                Esmeralda
            </button>
            <button onClick={() => this.setState({base : 'Supermobile'})}>
                Supermobile
            </button>
            <button onClick={() => this.setState({ base : 'Batmobile'})}>
                Batmobile
            </button>
        </div>
		</div>
    }
    
}