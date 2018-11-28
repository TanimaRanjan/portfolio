import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const PortfolioItemPage = (props) => {
    console.log(props)
    return (
    <div><h1>This I have done</h1>
        <p>This is what I have done - {props.match.params.id}</p>
    </div>

)}

export default PortfolioItemPage;