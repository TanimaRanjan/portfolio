import React from 'react'
import ReactDOM from 'react-dom'

import AddOption from './AddOption'
// import Option from './components/Option'
import Options from './Options'
import Header from './Header'
import Action from './Action'

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




export default IndecisionApp