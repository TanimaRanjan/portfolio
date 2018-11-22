import React from 'react'
import ReactDOM from 'react-dom'

import AddOption from './AddOption'
// import Option from './components/Option'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'


class IndecisionApp extends React.Component {
   state = {
        options : [],
        selectedOption: undefined
   }

    handleDeleteOptions = () => {
        this.setState (() => ({ options: []  }))
    }
    handleClearSelectOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }
    handlePick = () =>  {
        const option =this.state.options[Math.floor(Math.random() * this.state.options.length)]
        this.setState (() => ({
            selectedOption: option
        }))
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter Valid value to add'
        } else if(this.state.options.indexOf(option) > -1)  {
            return 'This option already exists '
        } 
        this.setState((prevState) => (
            {options: prevState.options.concat(option)}) 
        )
    }
    handleDeleteOption = (optionToRemove) => {
        console.log(optionToRemove)
     this.setState((prevState) => ({
        options:prevState.options.filter((option) =>  optionToRemove !== option
        )}))
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

   

    render() {
        const title = 'Indecision App'
        const subTitle = 'Put you life in hands of computer'
        
        return (
            <div > 
                <Header title={title} subTitle={subTitle}/>
                <div className="container">
                <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                    />
                <div className="widget">
                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
            handleAddOption={this.handleAddOption}/>
                
                </div>
                
                <OptionModal selectedOption={this.state.selectedOption}
                handleClearSelectOption={this.handleClearSelectOption} />
                </div>
                </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options:[]
}




export default IndecisionApp