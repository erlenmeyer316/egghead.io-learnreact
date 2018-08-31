import React from 'react';

//To render this component call <ComponentWithState  />
class ComponentWithState extends React.Component {
    constructor() {
        //gives 'this' the context of the component rather than the parent class (React.Component)
        super();
        //NOTE: state should only be managed and updated by the component
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }
    //this is a user defined function
    updateTxtState( event ){
        //only the state for txt is being updated, cat state will never change
        this.setState({txt: event.target.value})
    }
    render(){
        return (
            <div>
                {/* 
                   This is a JSX comment. It WILL NOT be rendered to the DOM
                   The following input's onChange even is bound to the component's
                   updateTxtState function. The .bind function takes a context which 
                   we have set to the component's context
                */}                
                <input type="text" onChange={this.updateTxtState.bind(this)} />
                <h1>{this.state.txt} - {this.state.cat}</h1>
            </div>
        )
    }
}



export default ComponentWithState