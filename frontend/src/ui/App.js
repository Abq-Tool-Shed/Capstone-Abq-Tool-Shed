import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Pages/Home'
import {Profile} from "./Pages/Profile"
import { FourOhFour } from './Components/FourOhFour'
import React from 'react'
import {NavBar} from "./Components/NavBar";

export const App = () => (
    <>

        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/profile' component={Profile}/>
                <Route component={FourOhFour}/>
            </Switch>
        </BrowserRouter>

    </>
)