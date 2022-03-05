import {Container,  Form, Row, Col} from "react-bootstrap";
import React from 'react'
import  {ImageDropZone} from "../Components/ImageDropZone";






export function Profile() {
    return (
        <>

        <Container>
            <div className="text-center"><h1>Austins Tool Shed 🛠</h1></div>
            <div className="row">
            <div className=" col">
                <ImageDropZone/>
            </div>
            <div className="col">
                <h2 className="text-center">Austins BIO</h2>
                <Form style={{border:"transparent 50", height: 150, width: 500}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </div>
                <div style={{border: "transparent 75", height: 150, width: 250}} className="col">
                    <h2>User Status</h2>
                    <p>
                        Tools Borrowed:5 |
                        Tools Lent:5 |
                        User Rating:3/5
                    </p>
                </div>
            </div>

        </Container>

            <Container>
            <div className='row mt-5'>
                <div style={{margin: "auto", padding: 150, height: 150, width: 150}} className="col border border-secondary text-center">
                    <p>Lets Get A Tool Posted</p>
                </div>
                <div style={{margin: "auto", padding: 150, height: 150, width: 150}} className="col border border-secondary text-center">
                    <p>This is a place holder for post component</p>
                </div>
            </div>

                <div className="row">
                    <div style={{margin: "auto", padding: 150, height: 150, width: 150}} className="col border border-secondary text-center mt-5">
                        <p>This is a place holder for post component</p>
                    </div>
                    <div style={{margin: "auto", padding: 150, height: 150, width: 150}} className="col border border-secondary text-center mt-5">
                        <p>This is a place holder for post component</p>
                    </div>
                    <div style={{margin: "auto", padding: 150, height: 150, width: 150}} className="col border border-secondary text-center mt-5">
                        <p>This is a place holder for post component</p>
                    </div>
                </div>
            </Container>


        </>


    )
}


