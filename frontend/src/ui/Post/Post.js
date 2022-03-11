import React from "react"
import "../styles/Post.css"
import {Button, Form} from "react-bootstrap";
import {ImageDropZone} from "../Components/ImageDropZone";
import {GradientJumbo} from "../Components/Shared/GradientJumbo";
import {ToolForm} from "../Components/Post/ToolForm";





export function Post() {


    // Conditional Components example with Marty
    // This checks if the user is logged in and if they are it will display the div below
    const isLoggedIn = true

    return (
        <>
            {/*Tool Post Header*/}

            <GradientJumbo
                display1={"Post A Tool"}
                heading3={"V"}

            />



            {/*<container>*/}
            {/*        <header className={"img-fluid"} style={{padding: 50, backgroundImage: 'url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_494605768_2000133320009280151_316966.jpg)'}}>*/}
            {/*            <div className={" border border border-3 border-danger text-center "}>*/}
            {/*                <h3 className={"white"}>Tool Posting</h3>*/}
            {/*                <p className={"white"}>Post your tools here!</p>*/}
            {/*            </div>*/}
            {/*        </header>*/}
            {/*</container>*/}

            {/*Post Form 1*/}
            <container>
                <ToolForm/>
                <div  className={"col-sm-6 centered mx-auto bg-light m-5 p-5"}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Tool Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Tool's name." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Tool Type:</Form.Label>
                            <Form.Control type="text" placeholder="Tool Category" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your Tool description here." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLendRules">
                            <Form.Label>Lend Rules:</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your Lend and return terms here." />
                        </Form.Group>

                        <div className="m-3 p-3 text-center mx-auto">
                            Upload a Tool image.
                            <ImageDropZone />
                        </div>

                        {/*<Form.Group className="mb-3" controlId="formPosition">*/}
                        {/*    <Form.Label>Cross Streets / Address :</Form.Label>*/}
                        {/*    <Form.Control type="text" placeholder="LAT LONG converter necessary" />*/}
                        {/*</Form.Group>*/}

                        {/*/!*<Form.Group className="mb-3" controlId="formBasicCheckbox">*!/*/}
                        {/*/!*    <Form.Check type="checkbox" label="Check me out" />*!/*/}
                        {/*</Form.Group>*/}
                        <Button className={"m-5"} variant="secondary" type="submit">
                            Post Tool
                        </Button>
                    </Form>
                </div>
            </container>
        </>

    )
}