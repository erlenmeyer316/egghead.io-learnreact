import React from 'react';

class ComponentMultiNode extends React.Component {
    //must implement
    render(){
        /*
          Components are only allowed to return 1 node. The following is invalid
          because it compiles to a function followed by a function.
              [i.e. return React.createElement('',,) React.createElement('',,)]
          
            return <h1>Hello World</h1> <br/><br/>

           To return multiple nodes wrap them in a parent node 
        */
        return (
            <div>
                <h1>I'm returning muliple HTML elements</h1>
                <span>(nice!)</span>
            </div>
        )
    }
}

export default ComponentMultiNode