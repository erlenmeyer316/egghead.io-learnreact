import React from 'react';
import './JsxCompiler.css'

class JsxCompiler extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '/* add your jsx */',
            output: '',
            err: ''
        }
    }
    update(event) {
        let code = event.target.value;
        try {
            this.setState({
                output: window.Babel
                    .transform(code, { presets: ['es2015', 'react'] })
                    .code,
                err: ''
            })
        } catch (error) {
            this.setState({ err: error.message })
        }
    }
    render() {
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea
                        onChange={this.update.bind(this)}
                        defaultValue={this.state.input}
                    />
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        )
    }
}

export default JsxCompiler