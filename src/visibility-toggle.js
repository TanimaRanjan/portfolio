const React = require('react')
const ReactDOM = require('react-dom')

class VisibilityToggle extends React.Component {
    
    constructor(props) {
        super(props) 
        this.changeVisibility = this.changeVisibility.bind(this)
        this.state = {
            visibility : true
        }
    }
    
    changeVisibility() {
        console.log('Hide or not ?')
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.changeVisibility}>
                {this.state.visibility ? 'Show Details' : 'Hide Details'}
                </button>
                <p>{!this.state.visibility && 'Show this message now'}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#temp'))