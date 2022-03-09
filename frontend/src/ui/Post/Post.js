import React from "react"
import "../styles/Post.css"
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import "../styles/Post.css"
import {PostFAQ} from "../Components/Post/PostFAQ";
import toolsIMG from "../Components/Images/tech-tools1.jpg"
import {Image} from "@material-ui/icons";
import {ImageDropZone} from "../Components/ImageDropZone";

export function Post() {


    // Conditional Components example with Marty
    // This checks if the user is logged in and if they are it will display the div below
    const isLoggedIn = true

    return (
        <>
            {/*Tool Post Header*/}
            <container>
                    <header className={"img-fluid"} style={{padding: 50, backgroundImage: 'url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_494605768_2000133320009280151_316966.jpg)'}}>
                        <div className={" border border border-3 border-danger text-center "}>
                            <h3 className={"white"}>Tool Posting</h3>
                            <p className={"white"}>Post your tools here!</p>
                        </div>
                    </header>
            </container>

            {/*Post Form 1*/}
            <container className={"bg-secondary"}>
                <div  className={"col-sm-6 centered mx-auto "}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Post Title:</Form.Label>
                            <Form.Control type="email" placeholder="Title" />
                            {/*<Form.Text className="text-muted">*/}
                            {/*    We'll never share your email with anyone else.*/}
                            {/*</Form.Text>*/}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formType">
                            <Form.Label>Tool Type:</Form.Label>
                            <Form.Control type="email" placeholder="Type" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control type="email" placeholder="Lending Terms" />
                        </Form.Group>

                        <div className="m-3 text-center">
                            <ImageDropZone/>
                        </div>

                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Cross Streets / Address :</Form.Label>
                            <Form.Control type="email" placeholder="MAP GOES HERE" />
                        </Form.Group>

                        {/*/!*<Form.Group className="mb-3" controlId="formBasicCheckbox">*!/*/}
                        {/*/!*    <Form.Check type="checkbox" label="Check me out" />*!/*/}
                        {/*</Form.Group>*/}
                        <Button variant="primary" type="submit">
                            Post Tool
                        </Button>
                    </Form>
                </div>
            </container>
        </>

    )
}