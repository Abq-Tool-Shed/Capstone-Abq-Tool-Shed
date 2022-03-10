import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './home/Home'
import {Userprofile} from "./Profile/Profile";
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {NavBar} from "./Components/NavBar";
import {PrePost} from "./Post/PrePost";
import {Post} from './Post/Post';
import {Settings} from "./Profile/Settings";
import {Provider} from "react-redux";
import {Browse} from "./Components/Browse/Browse";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faDove,
    faEnvelope,
    faKey,
    faPencilAlt,
    faPhone,
    faSignOutAlt,
    faStroopwafel, faUser,
} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faEnvelope, faKey, faDove, faPhone, faPencilAlt, faSignOutAlt, faUser);



export const App = (store) => (
    <>

        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profile' component={Userprofile}/>
                    <Route exact path='/prepost' component={PrePost} />
                    <Route exact path='/post' component={Post} />
                    <Route exact path='/settings' component={Settings}/>
                    <Route exact path='/browse' component={Browse} />
                    <Route component={FourOhFour} />
                </Switch>
            </BrowserRouter>
        </Provider>

    </>
)