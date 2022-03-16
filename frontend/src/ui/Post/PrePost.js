import React from "react"
import {Col, Container, Row, Button} from "react-bootstrap";
import "../styles/Post.css"
import {PostFAQ} from "../Components/Post/PostFAQ";
import {ButtonJumbo} from "../Components/Shared/ButtonJumbo";
import JumboStyles from "../styles/shared/jumbo.module.css"
import ColorStyles from "../styles/shared/colors.module.css"



export function PrePost() {

    // Conditional Components example with Marty
    // This checks if the user is logged in and if they are it will display the div below
    const isLoggedIn = true

    return (

    <>
        {/* Jumbo Header */}
        <container>
            <ButtonJumbo
                display1="Post Instructions"
                heading3="Hi, on this page you will find instructions for posting a Tool."
            />
        </container>

        {/* Jumbo Instructions */}
        <Container fluid className={JumboStyles.reversedJumbo}>

                <div className={"m-3 text-sm-center"} style={{backgroundColor: "rgba(136, 185, 144, 0.15)" }}>
                    <strong><h2 className={"m-3"}> First,</h2></strong>
                        <h3>Click <strong>Post A Tool</strong> to go to our tool posting page.</h3>
                </div>

                <div className={"m-3 text-sm-center "} style={{backgroundColor: "rgba(27, 175, 191, 0.15)"}}>
                    <strong> <h2 className={" m-3"}> Then,</h2></strong>
                        <h3>Enter your tool information.</h3>
                </div>

                <div className={"m-3 text-sm-center "} style={{backgroundColor: "rgba(18, 109, 166, 0.15)"}}>
                        <strong><h2 className={" m-3"}> Finally,</h2></strong>
                        <h3>Post your tool!</h3>
                </div>

        </Container>

        {/* Tip Boxes */}
        <div className={ColorStyles.blue150}>
        <Container className={"d-sm-flex justify-content-center align-items-center flex-sm-row text-white"}>
            <Col className={"m-3 text-sm-center"} style={{backgroundColor: "rgb(136, 185, 144)"}}>
                <div className={"rounded"}>
                    <h3 className={"rounded m-5 p-1"}>Be clear about your terms.</h3>
                    <p>Deadlines and boundaries are vital for a smooth tool lending process.</p>
                </div>
            </Col>

            <Col className={"m-3 text-sm-center"} style={{backgroundColor: "rgba(27, 175, 191, 1)"}}>
                <div className={"rounded"}>
                    <h3 className={" rounded m-5 p-3"}>Take high quality photos.</h3>
                    <p>A clear picture of your tool is vital.</p>
                </div>
            </Col>

            <Col className={"m-3 text-sm-center"} style={{backgroundColor: "rgba(18, 109, 166, 1)"}}>
                <div className={"rounded"}>
                    <h3 className={"rounded m-5 p-1"}>Meet in a safe environment.</h3>
                    <p>Meet people in safe public spaces and take proper precautions.</p>
                </div>
            </Col>


        </Container>
        </div>

        <div className={ColorStyles.green450}>
            <strong><h3 className={"text-center p-3"}>FAQ</h3></strong>
            <PostFAQ
            Question= "Q1:  Where can I view the tools that have been posted?"
            Answer="You can view the all available tools in the Browse Page."
            />
            <PostFAQ
                Question= "Q2:  Where can I change my profile information?"
                Answer="You are able to change your profile information through the settings button on your profile."
            />
            <PostFAQ
                Question= "Q3:  Where can I view the tools that have been posted?"
                Answer="Answer test"
            />

        </div>

    </>
    )
}