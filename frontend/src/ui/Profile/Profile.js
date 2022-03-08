import {Container,  Form, Row, Col} from "react-bootstrap";
import React from 'react'
import  {ImageDropZone} from "../Components/ImageDropZone";
import {ProfilePostButton} from "../Components/Profile/ProfilePostButton";
import {ProfilePost} from "../Components/Profile/ProfilePost"








export function Profile() {
    return (
        <>


        <Container >
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
                <div style={{margin: "auto",width: 250}} className="col-2 bg-secondary text-light border border-secondary text-center">
                    <p>Welcome to your content section! <br/> On the right you will find a place to start your posting journey. </p>
                </div>
                <div style={{margin: "auto",width: 250, height: 150, padding:25}} className="col-2 bg-secondary  border border-secondary text-center">
                    <ProfilePostButton/>
                </div>
            </div>
                    <br>
                    </br>
                <div className="row mt-5">
                    <div style={{margin: "auto",  width: 250}} className="col-2 border border-secondary text-center">
                        <ProfilePost/>
                    </div>
                    <div style={{margin: "auto",  width: 250}} className="col-2 border border-secondary text-center">
                        <ProfilePost/>
                    </div>
                    <div  style={{margin: "auto",  width: 250}} className="col-2 border border-secondary text-center">
                        <ProfilePost/>
                    </div>
                </div>
            </Container>


        </>



    )
}


