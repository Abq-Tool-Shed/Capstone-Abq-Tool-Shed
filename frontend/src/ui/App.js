import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Home } from './home/Home';
import {UserSettings} from "./Profile/UserSettings";
import {UserProfile} from "./Profile/Profile"
import { FourOhFour } from './FourOhFour';
import React from 'react';
import {NavBar} from "./Components/NavBar";
import {PrePost} from "./Post/PrePost";
import {Post} from './Post/Post';
import {Provider} from "react-redux";
import {Browse} from "./Components/Browse/Browse"

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faDove,
    faEnvelope,
    faKey,
    faPencilAlt,
    faPhone,
    faSignOutAlt,
    faStroopwafel, faUser, faSearch, faWindowClose,
} from '@fortawesome/free-solid-svg-icons'
import {PrivateRoute} from "./Components/Shared/PrivateRoute";

library.add(faStroopwafel, faEnvelope, faKey, faDove, faPhone, faPencilAlt, faSignOutAlt, faUser, faSearch, faWindowClose);



export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <PrivateRoute exact path="/profile">
                        <UserProfile/>
                    </PrivateRoute>
                    <PrivateRoute exact path='/prepost'>
                        <PrePost/>
                    </PrivateRoute>
                    <PrivateRoute exact path='/post'>
                    <Post/>
                    </PrivateRoute>
                    <PrivateRoute path="/user-settings">
                    <UserSettings/>
                    </PrivateRoute>
                    <Route exact path='/browse' component={Browse} />
                    <Route component={FourOhFour} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
)