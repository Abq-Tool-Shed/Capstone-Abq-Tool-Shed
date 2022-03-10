import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Button, } from "react-bootstrap";
import {Form} from "formik";
import {SignUpModal} from "./Sign-up/signUpModal";
import {SignInModal} from "./Log-In/SignInModal";


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

                            <SignInModal/>

                            <SignUpModal/>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



    </>
    )
}