import React from 'react'
import {Form} from "formik";
import {Button} from "react-bootstrap";


export function Settings() {
    return (
        <>
            <div>
                <h1>Welcome To Your Settings Page!</h1>
                <p>Please Fill Out The Fields Bellow To Customize Your Profile</p>
            </div>
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Upload Photo</Form.Label>
                    <Form.Control type="Image" placeholder="Upload A photo here" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Bio Update</Form.Label>
                    <Form.Control type="bio" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Apply
                </Button>
            </Form>
            </div>
        </>
    )
}