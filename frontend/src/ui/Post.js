import React from "react"
import {Col, Container, Row} from "react-bootstrap";

export function Post() {

    // Conditional Components example with Marty
    // This checks if the user is logged in and if they are it will display the div below
    const isLoggedIn = true

    return (

    <>
        <div>
            <container>
                <div className={"col-sm-9 mx-auto"} >
                <image>
                    <Row>
                        <Col className={"text-center"} md={9}>
                            <div className={" border border border-3 border-info text-dark"} style={{backgroundColor: '#ABCDEF50'}}>
                            <h3>Tool Posting</h3>
                            <p>The instructions below will assist you with your tool listing!</p>
                            </div>
                        </Col>
                        <Col className={"al"} md={3}>
                            <button>List a tool</button>
                        </Col>
                    </Row>

                </image>
                {/*<div>*/}
                {/*    {*/}
                {/*        isLoggedIn && <pretendComponent/>*/}
                {/*    }*/}
                {/*</div>*/}
                </div>
            </container>
        </div>


    </>
    )
}