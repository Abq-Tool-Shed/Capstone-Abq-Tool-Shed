import {Container,  Form, Row, Col} from "react-bootstrap";
import React from 'react'
import  {ImageDropZone} from "../Components/ImageDropZone";






export function Profile() {
    return (
        <>

        <Container>
            <div>
                <h1 className="text-center">Austins Tool Shed 🛠</h1>
            </div>
            <div className="container text-center text-light border border-2 border-secondary bg-secondary">
                <div className="row">
                    <p className="col fs-2"> Tools Borrowed:5</p>
                    <p className="col fs-2">Tools Lent:5</p>
                    <p className="col fs-2">User Rating:3/5</p>
                </div>
            </div>
            <div className="w-25 mt-2">
                <h2 className="text-center">BIO | TELL US ABOUT YOU!</h2>
                <Form className="border border-secondary border-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Your Bio Info Here</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button>Save</button>
                </Form>
            </div>

            <br/>

            <div className="mt-5 text-center">
                <ImageDropZone/>
            </div>
        </Container>
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>





        </>


    )
}


