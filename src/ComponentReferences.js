import React from 'react';
import ReactDOM from 'react-dom'

class ComponentReferences extends React.Component {
    constructor() {
        super();
        this.state = {a: ''}
    }
    update(){
        this.setState({
            a: ReactDOM.findDOMNode(this.a).value,
            b: this.refs.b.value,
            c: this.c.value,
            d: this.d.refs.input.value
        })
    }
    render() {
        return (
            <div>
                <label>Component State A: </label>
                <MyInput 
                    ref={ component => this.a = component }
                    updateFunc={this.update.bind(this)}                    
                /> {this.state.a}                
                <hr />
                <label>Ref State B: </label>
                <input 
                    ref="b"
                    type="text" 
                    onChange={this.update.bind(this)}                    
                /> {this.state.b}
                <hr />
                <label>Node State C: </label>
                <input 
                    ref={ node => this.c = node}
                    type="text" 
                    onChange={this.update.bind(this)}                    
                /> {this.state.c}
                <hr />
                <label>Nested Component State D: </label>
                <MyNestedInput 
                    ref={ component => this.d = component }
                    updateFunc={this.update.bind(this)}                    
                /> {this.state.d}
            </div>
        )
    }
}

class MyInput extends React.Component {
    render() {
        return <input type="text" onChange={this.props.updateFunc} />
    }
}

class MyNestedInput extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.updateFunc} /></div>
    }
}

export default ComponentReferences