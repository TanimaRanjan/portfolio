const React = require('react')
const ReactDOM = require('react-dom')


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
             options : ['Vactions','Quit Job','Sleep']    
        }
    }

    handleDeleteOptions() {
        this.setState (() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])

    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter Valid value to add'
        } else if(this.state.options.indexOf(option) < -1)  {
            return 'This option already exists '
        } 
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
       
    }
    render() {
        const title = 'Indecision App'
        const subTitle = 'Put you life in hands of computer'
        
        return (
            <div> 
                <Header title={title} subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>            
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {


    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}>
                What Should I do ?</button>            
            </div>
        )
    }
}


class Options extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this)
    // }
    // handleRemoveAll() {
    //     console.log(this.props.options)

    // }
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option  = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        
        this.setState(() => {
            return {
                error  // Same as error:error
            }
        })

        e.target.elements.option.value =''
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>            
            </div>
        )
    }

}


ReactDOM.render(<IndecisionApp />, document.querySelector('#indecision-head'));





