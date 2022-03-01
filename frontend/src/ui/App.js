import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { PreHome } from '../ui/Pages/PreHome'
import {PostHome } from "./Pages/PostHome";
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {PreNavBar} from "./Components/PreNavBar";
import {Post} from "./Pages/Post";

export const App = () => (
    <>

        <BrowserRouter>
            <PreNavBar></PreNavBar>
            <Switch>
                <Route exact path='/' component={PreHome} />
                <Route exact path='/PostHome' component={PostHome}/>
                <Route exact path='/Post' component={Post} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)