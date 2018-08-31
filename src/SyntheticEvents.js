import React from 'react'

class SyntheticEvents extends React.Component {
    constructor(){
        super();
        this.state = {currentEvent: '---'}
        this.update = this.update.bind(this)
    }
    /*
        all update events could be handled from this one 
        custom update event, simplifying the JSX and 
        overall component architecture
    */
    update(event) {
        this.setState({currentEvent: event.type})
    }
    render(){
        return (
            <div>
                <textarea 
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                    cols="30"
                    rows="10"
                />
                <h1>{this.state.currentEvent}</h1>
            </div>
            
        )
    }
}

export default SyntheticEvents