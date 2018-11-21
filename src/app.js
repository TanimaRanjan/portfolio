// const React = require('react')
import React from 'react'
import ReactDOM from 'react-dom'
// import uuid  from 'uuid/v4'

import IndecisionApp from './components/IndecisionApp'

// ReactDOM.render(<User name='Tanima' age={36}/>, document.querySelector('#indecision-head'));
ReactDOM.render(<IndecisionApp options={['Vactions','Quit Job','Sleep']    }/>, document.querySelector('#indecision-head'));





