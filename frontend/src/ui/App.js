import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { PreHome } from '../ui/Pages/PreHome'
import {PostHome } from "./Pages/PostHome";
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {PreNavBar} from "./Components/PreNavBar";

export const App = () => (
    <>

        <BrowserRouter>
            <PreNavBar></PreNavBar>
            <Switch>
                <Route exact path='/' component={PreHome} />
                <Route exact path='/' component={PostHome}/>
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)