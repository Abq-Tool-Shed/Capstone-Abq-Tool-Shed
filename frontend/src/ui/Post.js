import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import "../styles/Post.css"
import {postFAQ} from "../Components/PostFAQ";
import toolsIMG from "../styles/tech-tools1.jpg"
import {Image} from "@material-ui/icons";


export function Post() {

    // Conditional Components example with Marty
    // This checks if the user is logged in and if they are it will display the div below
    const isLoggedIn = true

    return (

    <>
        <div>
            <container>
                <div className={"col-sm-9 mx-auto"} >
                <Image className={"img-fluid "} src={toolsIMG} alt={"tools image background"}>
                    <Row>
                        <Col className={"text-center"} md={9}>
                            <div className={" border border border-3 border-info text-dark test"}>
                            <h3>Tool Posting</h3>
                            <p>The instructions below will assist you with your tool listing!</p>
                            </div>
                        </Col>
                        <Col className={"al"} md={3}>
                            <button className={"rounded test"}>List a tool</button>
                        </Col>
                    </Row>

                </Image>
                {/*<div>*/}
                {/*    {*/}
                {/*        isLoggedIn && <pretendComponent/>*/}
                {/*    }*/}
                {/*</div>*/}
                </div>
            </container>
        </div>
        <div>
            <Row>
                <Col className={"m-5 text-center bg-light"}>
                    <div className={" rounded m-5"}>
                        <h3 className={"rounded mb-5"}>First,</h3>
                        <p>Click <strong>List a tool</strong> to go to our tool posting page.</p>
                    </div>
                </Col>
                <Col className={"m-5 text-center bg-light"}>
                    <div className={"rounded m-5"}>
                        <h3 className={" rounded mb-5"}>Then,</h3>
                        <p>Fill out the form with all necessary information.</p>
                    </div>
                </Col>
                <Col className={"m-5 text-center bg-light"}>
                    <div className={"rounded m-5"}>
                        <h3 className={"rounded mb-5"}>Finally,</h3>
                        <p>Post your tool!</p>
                    </div>
                </Col>
            </Row>
        </div>
        <div>
            <Row>
                <Col className={"m-3 text-center bg-warning"}>
                    <div className={" rounded m-5"}>
                        <h3 className={"rounded mb-5"}>Be clear about your terms.</h3>
                        <p>Deadlines and boundaries are vital for a smooth tool lending process.</p>
                    </div>
                </Col>
                <Col className={"m-3 text-center bg-primary"}>
                    <div className={"rounded m-5"}>
                        <h3 className={" rounded mb-5"}>Take high quality photos.</h3>
                        <p>A clear picture of your tool is a must.</p>
                    </div>
                </Col>
                <Col className={"m-3 text-center bg-success"}>
                    <div className={"rounded m-5"}>
                        <h3 className={"rounded mb-5"}>Meet in a safe environment.</h3>
                        <p>Meet people in safe public spaces and take proper precautions.</p>
                    </div>
                </Col>
            </Row>
        </div>
        <div>
            <strong><h3 className={"text-center m-3 p-3"}>FAQ</h3></strong>
            {postFAQ()}
            {postFAQ()}
            {postFAQ()}
        </div>

    </>
    )
}