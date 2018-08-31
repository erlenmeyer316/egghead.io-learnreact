import React from 'react';

class ChildComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt'
        }
    }
    updateTxtState(event) {
        this.setState({txt: event.target.value})
    }
    render(){
        return (
            <div>
                <h1>{this.state.txt}</h1> 
                {/*
                  We pass the updateTxtState function to the InputComponent, 
                  bound to the component's content, as a property which is 
                  then bound to the InputComponent's onChange event
                */}                
                <InputComponent update={this.updateTxtState.bind(this)} />
                <InputComponent update={this.updateTxtState.bind(this)} />
                <InputComponent update={this.updateTxtState.bind(this)} />
            </div>
        )
    }
}

//Stateless Function Component
const InputComponent = (props) => (
    <div>
        <label>This is a child component: </label>
        <input type="text" onChange={props.update} />        
    </div>
)

export default ChildComponents