import React from 'react';

class ClassBasedComponentJSX extends React.Component {
    //must implement
    render(){
        //You must use className to add classes to JSX templates
        return <h1 className="jsx-h1">Hello class based JSX component</h1>
        
        //NOTE: The above JSX gets compiled to the following javascript.
        //      (The second agrument is 'props')
        /*
            
            return React.createElement('h1', null, 'Hello class based JSX component')
        */
        
    }
}

export default ClassBasedComponentJSX