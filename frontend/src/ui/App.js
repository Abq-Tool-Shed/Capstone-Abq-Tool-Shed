import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Pages/Home'
import {Profile} from "./Pages/Profile"
import { FourOhFour } from './Components/FourOhFour'
import React from 'react'
import {NavBar} from "./Components/NavBar";
import {PrePost} from "./Pages/PrePost";
import {Post} from './Pages/Post';

export const App = () => (
    <>

        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/prepost' component={PrePost} />
                <Route exact path='/post' component={Post} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)