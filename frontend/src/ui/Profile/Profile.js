import {Container, Form, Row, Col, Nav, Button} from "react-bootstrap";
import React, {useEffect} from 'react';
import  {ImageDropZone} from "../Components/ImageDropZone";
import {ProfilePostButton} from "../Components/Profile/ProfilePostButton";
import {ProfileTool} from "../Components/Profile/ProfileToolCard";
import {useDispatch, useSelector} from "react-redux";
import map, {fetchProfileByProfileId} from "../../store/profiles";
import tools, {fetchAllTools, fetchAllToolsAndBorrows, fetchToolsByProfileId} from "../../store/tools";
import {Link} from "react-router-dom";
import {ProfileSettingsFormContent} from "../Components/Profile/ProfileSettingsFormContent";
import {ProfileSettingsForm} from "../Components/Profile/ProfileSettingsForm";
import {MessageModal} from "../Components/Messsage/MessageModal";
import {object} from "yup";
import {Jumbo} from "../Components/Shared/Jumbo";
// import {ProfileTool} from "../Components/Profile/ProfileToolCard";
import borrows from "../../store/borrows";
// import {filter} from "overmind";
import * as availableTools from "react-bootstrap/ElementChildren";

import {useParams} from "react-router";

import {ProfileJumbo} from "../Components/Shared/ProfileJumbo";



export const UserProfile=() => {
    const {profileId} = useParams()
    console.log(profileId)

    const borrow = useSelector(state => state.borrows ? state.tool: object)

    const tools = useSelector(state => state.tools ? state.tools: [])

   const profile = useSelector(state => state.profile ? state.profile: object);

    const dispatch = useDispatch();

    function sideEffects() {
        dispatch(fetchProfileByProfileId(profileId))
        dispatch(fetchToolsByProfileId(profileId))
    }

    useEffect(sideEffects,  [profileId, dispatch]);
    console.log(profile)

    const {borrowId, borrowProfileId, borrowToolId, borrowCompleted, borrowDateTime, borrowReturnedDateTime} = borrows

    const {profileHandle, profileImage, profileEmail, profileName} = profile



    return (
        < >


            <ProfileJumbo className="text-center img-fluid"
                   Image={profileImage}
                   ImageAlt={"Profile Image Placeholder"}
                   display1={profileHandle}
                   heading3={"Welcome To My Profile Page"}

            />
<div style={{backgroundColor: 'burlywood'}}>
            <Container  >
                <Container>
                <Row>

                    <Col className="text-center">
                    <Link  to="/user-settings">
                        <Button variant="outline-danger"   size="lg">
                            Settings Page
                        </Button>
                    </Link>
                    </Col>
                     <Col className="text-center">
                    <MessageModal/>
                     </Col>
                </Row>
                </Container>
                <br/>
                <Row>
                    <Col style={{border: "transparent 75", height: 150, width: 250}} className="text-center" >
                        <h2 >User Status</h2>
                        <p>
                            Tools Borrowed: 15 |
                            Tools Lent:5
                        </p>
                    </Col>

                </Row>
            </Container>

            <Container >
                <div className='row mt-5'>
                    <div style={{margin: "auto",width: 250, backgroundColor: "cadetblue" }} className="col-2 bg-secondary text-light border border-secondary text-center">
                        <p>Welcome to your content section! <br/> On the right you will find a place to start your posting journey. </p>
                    </div>
                    <div style={{margin: "auto",width: 250, height: 150, padding:25, backgroundColor:"grey"}} className="col-2  border border-secondary text-center">
                        <ProfilePostButton/>
                    </div>
                </div>
                <br>
                </br>
            </Container>
            <Container className="container-fluid" >


                    <Row className='d-flex flex-wrap bg-light '>
                    {tools.map((tool, index) => <ProfileTool className='mw-30' key={index} tool={tool}/>)}
                    </Row>

            </Container>
</div>
        </>
    )
}