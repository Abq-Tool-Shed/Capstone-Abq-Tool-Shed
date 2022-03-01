import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Button, } from "react-bootstrap";
import {Form} from "formik";


export function PreNavBar () {
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
                            <Nav.Link href="#action1">Login |</Nav.Link>
                            <Nav.Link href="#action2">Sign Up</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



    </>
    )
}