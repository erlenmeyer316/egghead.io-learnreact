import React from 'react';
//import PropTypes from 'prop-types';

class CustomPropValidation extends React.Component {
    render() {
        return <Title text="fart"/>
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

/* Instead of returning a PropType (i.e. text: PropTypes.string.isRequired)
   we can return a custom function which will render an error in the browser
   console*/
Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`missing ${propName} property`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} must be 6 characters or more`)
        }
    }
}

export default CustomPropValidation