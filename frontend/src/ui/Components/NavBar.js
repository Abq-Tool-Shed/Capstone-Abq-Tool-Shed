import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Button,  } from "react-bootstrap";
import {Form} from "formik";
import {SignUpModal} from "./Sign-up/signUpModal";
import {SignInModal} from "./Log-In/SignInModal";


export function NavBar () {


    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">ABQ Tool Shed 🛠</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <SignInModal/>

                            <SignUpModal/>


                            <Nav.Link href="/" className={"navbar-item"} >Home</Nav.Link>


                            <Nav.Link href="/profile" className={"navbar-item"} >Profile</Nav.Link>


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