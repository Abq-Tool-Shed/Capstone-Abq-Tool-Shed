import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Button, } from "react-bootstrap";
import {Form} from "formik";
import {SignUpModal} from "./Sign-up/signUpModal";
import {LogInModal} from "./Log-In/LogInModal"


export function NavBar () {


    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">FAQ | Mission Statement</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <LogInModal/>

                            <SignUpModal/>


                            <Nav.Link className={"navbar-item"} activeClassName={"is-active"}
                                      to='/browse'
                                      exact>

                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
    )
}