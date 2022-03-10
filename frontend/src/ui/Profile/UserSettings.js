import React from 'react';
import {Button, Form, Container} from "react-bootstrap";
import {ImageDropZone} from "../Components/ImageDropZone";



export function UserSettings() {
    return (
        <>
            <Container>
            <div>
                <h1>Welcome To Your Settings Page!</h1>
                <p>Please Fill Out The Fields Bellow To Customize Your Profile</p>
            </div>
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1>Upload An Image Bellow</h1>
                    <ImageDropZone/>
                </Form.Group>

                <Form.Group>
                    <h1>Update Your Profile Handle</h1>
                    <Form.Control type="ProfileHandle" placeholder="User Handle"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h1>Update Your Bio Bellow</h1>
                    <Form.Label>Bio Update</Form.Label>
                    <Form.Control type="bio" placeholder="User Bio" />
                </Form.Group>
                <Button variant="outline-danger" type="submit">
                    Apply
                </Button>
            </Form>
            </div>
            </Container>
        </>
    )
}