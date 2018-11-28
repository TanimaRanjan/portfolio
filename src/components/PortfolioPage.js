import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const PortfolioPage = () => {
    return (
    <div><h1>Here is what I have done</h1>
        <Link to="/portfolio/1">Portfolio Page1</Link>
        <Link to="/portfolio/2">Portfolio Page2</Link>
    </div>

)}

export default PortfolioPage;