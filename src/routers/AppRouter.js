import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/HelpPage'
import PortfolioHomePage from '../components/PortfolioHomePage'
import PortfolioPage from '../components/PortfolioPage'
import PortfolioItemPage from '../components/PortfolioItemPage'
import ContactPage from '../components/ContactPage'


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={PortfolioHomePage} exact={true}/>
            <Route path="/portfolio" component={PortfolioPage} exact={true} />
            <Route path="/portfolio/:id" component={PortfolioItemPage} />
            <Route path="/contact" component={ContactPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;