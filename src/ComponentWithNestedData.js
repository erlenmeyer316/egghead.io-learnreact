import React from 'react';
class ComponentWithNestedData extends React.Component {
    render(){
        return <MyButton>I <Heart /> React</MyButton>
    }
}

/* This stateless function component gets the content 
   between the MyButton tags (similar to Wordpress Shortcodes).
   It can also rander child components between it's tags
*/   

const MyButton = (props) => <button>{props.children}</button>
const Heart = (props) => <span>&hearts;</span>


export default ComponentWithNestedData