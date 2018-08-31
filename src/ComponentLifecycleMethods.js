import React from 'react';

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
    componentWillMount()
    render(){
        console.log('render');
        return <button onClick={this.update}>{this.state.val}</button>
    }
}

export default ComponentLifecycleMethods

