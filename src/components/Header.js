import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const Header = () => (
    <header>
    <div className="boxIntro">
        <div className="parent">
            <div className="child">
            <h1>
                <div className="bold">Tanima Ranjan</div>
                <div className="faded">Director Of</div>
                <div className="faded">Product Design</div>
            </h1>
            </div>
            </div>
        </div>
    </header>
)

export default Header;

/*
<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
<NavLink to="/portfolio" activeClassName="is-active"  exact={true}>Portfolio</NavLink>
<NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
*/