import React from 'react';
import ReactDOM from 'react-dom';

/*
    When a component is added to the DOM it is referred to as mounting
    When a component is removed from the DOM it is called unmounting
 */
class ComponentLifecycleMethods extends React.Component {
    constructor() {
        super();
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({val:this.state.val + 1})
    }
    componentWillMount(){
        /* App configuration in your root component. Set default states */
        console.log('componentWillMount')
        this.setState({m: 2})
    }
    render(){        
        console.log('render')
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    }
    componentDidMount() {
        /*  Starting AJAX calls to load in data for your component. Add event listeners. Can set state*/
        console.log('componentDidMount')
        this.inc = setInterval(this.update, 500)
    }
    componentWillUnmount() {
        /* 
            Cancel any outgoing network requests, or remove all event listeners associated with the component.
            Can't set state
        */
        console.log('componentWillUnmount')
        clearInterval(this.inc)
    }
}

class Wrapper extends React.Component {
    mount(){
        //renders a ComponentLifeCycleMethods component in the DOM at node #a
        ReactDOM.render(<ComponentLifecycleMethods />, document.getElementById('a'))
    }
    unmount(){
        //unmounts the component rendered in the DOM at node #a
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper

