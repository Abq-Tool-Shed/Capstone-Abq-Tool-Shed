import React from 'react'
import {useDispatch} from 'react-redux'
import { httpConfig } from '../../utils/http-config'
import {fetchAuth} from "../../store/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Nav} from 'react-bootstrap'

export const SignOutComponent = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        httpConfig.get('/apis/sign-out/').then(reply => {

            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(fetchAuth(null))
                window.location = '/'
            }
        })
    }

    return(
        <>

            <Nav.Link className="btn" onClick={signOut}>
                Sign Out&nbsp;&nbsp;<FontAwesomeIcon icon="sign-out-alt" />
            </Nav.Link>
        </>


    )
}