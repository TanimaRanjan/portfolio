// const React = require('react')
import React from 'react'
const ReactDOM = require('react-dom')
const uuid = require('uuid/v4')


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
             options : props.options
        }
    }

    componentDidMount() {
        try {
            console.log('fetching date')
            const optionsJSON = localStorage.getItem('options')
            const options = JSON.parse(optionsJSON)
            if(options) {
                this.setState(() => ({ options}))
            }
        } catch (e) {
            // Do nothing
        }
        
    }

    componentDidUpdate(preProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const optionJSON = JSON.stringify(this.state.options)
            localStorage.setItem('options', optionJSON)
            console.log('saving date')
        }
    }
    
    componentWillUnmount() {
        console.log('upnmount ')
    }

    handleDeleteOptions() {
        this.setState (() => ({ options: []  }))
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
        this.setState((prevState) => (
            {options: prevState.options.concat(option)}) 
        )
    }
    handleDeleteOption(optionToRemove){
        console.log(optionToRemove)
     this.setState((prevState) => ({
        options:prevState.options.filter((option) =>  optionToRemove !== option
        )}))
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}/>
                
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options:[]
}

 const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>       
                {props.subTitle &&  <h2>{props.subTitle}</h2> }
            </div>
        )
}

Header.defaultProps = {
    title:'Indecision'
}

const Action = (props) => {
        return (
            <div>
                <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What Should I do ?</button>            
            </div>
        )
    }


const Options = (props) => {
    // constructor(props) {
    //     super(props)
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this)
    // }
    // handleRemoveAll() {
    //     console.log(this.props.options)

    // }
    
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p>Please add an option to start</p>}
                {
                    props.options.map((option) => 
                    <Option 
                        key={uuid()} optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                        />
                    
                    )
                }
            </div>
        )
    }


const Option = (props) => {
        return (
            <div>
                <span>{props.optionText}
                <button onClick= {(e) => {
                    {props.handleDeleteOption(props.key)}
                }}
                >Remove</button></span>
            </div>
        )
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
        
        this.setState(() => ({error}))
        if(!error)
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


// ReactDOM.render(<User name='Tanima' age={36}/>, document.querySelector('#indecision-head'));
ReactDOM.render(<IndecisionApp options={['Vactions','Quit Job','Sleep']    }/>, document.querySelector('#indecision-head'));





