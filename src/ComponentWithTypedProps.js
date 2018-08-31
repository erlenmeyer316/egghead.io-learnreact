import React from 'react';
import PropTypes from 'prop-types';

//To render this component call <ComponentWithTypedProps cat={4} txt="this is the txt property" />
class ComponentWithTypedProps extends React.Component {
    
    render(){
        return (
            <div>
                <h1>{this.props.txt}</h1>    
                <span>{this.props.cat}</span>
            </div>
        )
    }
}

//We can strongly type properties on class based components using prop-types
ComponentWithTypedProps.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
}

//We can also set default values for properties, these will be overwritten by values passed when rendering the function
// i.e. <ComponentWithTypedProps cat={4} /> will leave txt property at default, but cat will be 4
ComponentWithTypedProps.defaultProps = {
    txt: "default",
    cat: "0"
}

export default ComponentWithTypedProps