import React from 'react'
import uuid  from 'uuid/v4'
import Option from './Option'

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

    export default Options

