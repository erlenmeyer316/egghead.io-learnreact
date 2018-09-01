import React from 'react';
import ReactDOM from 'react-dom';

class ComponentUpdates extends React.Component {
    constructor() {
        super();
        this.state = {increasing: false}
    }
    update() {
        ReactDOM.render(<ComponentUpdates val={this.props.val + 1} />, document.getElementById('root'))
    }
    
    componentWillReceiveProps(newProps) {
        /* 
            Not called on intial render, you will have old props and new props
            Act on particular prop changes to trigger state transitions.
            Can set state
        */
        this.setState({ increasing: newProps.val > this.props.val})
    }
    shouldComponentUpdate(newProps, newState) {
        /* 
            ShouldComponentUpdate allows us to say: only update if the props you care about change. 
            Should not set state
        */
        return newProps.val % 5 === 0;
    }    
    render(){
        console.log(this.state.increasing)
        return(
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }
    componentDidUpdate(prevProps, prevState) {
        /*
            Update the DOM in response to prop or state changes.
            Can set state
         */
        console.log(`prevProps: ${prevProps.val}`)
    }
}

ComponentUpdates.defaultProps = {val: 0}

export default ComponentUpdates