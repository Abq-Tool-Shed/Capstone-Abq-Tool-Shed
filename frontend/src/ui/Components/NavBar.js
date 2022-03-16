import React, {useEffect, useState} from 'react'
import {Navbar, Container, Nav, NavDropdown, Button,  } from "react-bootstrap";
import {SignUpModal} from "./Sign-up/signUpModal";
import {SignInModal} from "./Log-In/SignInModal";
import Colors from "../styles/shared/colors.module.css"
import {fetchAuth} from "../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SignOutComponent} from "./SignOut";


export function NavBar () {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isModalOpen = ()=> {
        if(!auth) {
            return !auth
        } else if(show === true && auth  ) {
            return true
        }
    }

    return(
        <>
            <Navbar className={Colors.blue2} expand="lg">
                <Container fluid className="d-flex me-auto my-sm-0 justify-content-center align-items-center">
                    <Navbar.Brand href="/">ABQ Tool Shed 🛠</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="d-flex me-auto my-sm-0 justify-content-center align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>

                            {/*<SignInModal/>*/}

                            {/*<SignUpModal/>*/}

                            <Nav.Link href="/" className={"navbar-item"} >Home</Nav.Link>

                            {/*<Nav.Link href="/profile" className={"navbar-item"} >Profile</Nav.Link>*/}
                            {/*Render navbar elements conditionally if user has a JWT and is logged in*/}
                            {auth !== null && (
                                <>
                                    <Nav.Link href={`/profile/${auth?.profileId}`} className="btn ">
                                                <FontAwesomeIcon icon="user" />&nbsp;&nbsp;My Profile
                                    </Nav.Link>
                                    <SignOutComponent />
                                </>
                            )}
                            {isModalOpen()  &&  (
                                <>
                                    <SignUpModal/>
                                    <SignInModal show={show} handleClose={handleClose} handleShow={handleShow}/>
                                </>
                            )}


                            <Nav.Link href="/prepost" className={"navbar-item"} >Pre Post</Nav.Link>


                            <Nav.Link href="/post" className={"navbar-item"} >Post</Nav.Link>


                            <Nav.Link href="/browse" className={"navbar-item"} >Browse</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
    )
}