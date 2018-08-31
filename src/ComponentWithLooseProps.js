import React from 'react';

//To render this component call <ComponentWithLooseProps txt="this is the txt property" />
class ComponentWithLooseProps extends React.Component {
    
    render(){
        //outside of JSX props and variables can be used normally
        let txt = this.props.txt + ' - this is a variable'
        //inside of JSX props and variables must be interpolated using {} notation
        return (
            <div>
                <h1>{this.props.txt}</h1>    
                <span>{txt}</span>
            </div>
        )
    }
}

export default ComponentWithLooseProps