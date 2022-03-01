import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { PreHome } from './PreHome'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {PreNavBar} from "./PreNavBar";

export const App = () => (
    <>

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={PreHome} />
                <Route exact path='/' component={PostHome}/>
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)