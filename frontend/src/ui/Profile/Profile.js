import {Container, Form, Row, Col, Nav, Button} from "react-bootstrap";
import React, {useEffect} from 'react';
import  {ImageDropZone} from "../Components/ImageDropZone";
import {ProfilePostButton} from "../Components/Profile/ProfilePostButton";
import {ProfileTool} from "../Components/Profile/ProfileToolCard";
import {useDispatch, useSelector} from "react-redux";
import map, {fetchProfileByProfileId} from "../../store/profiles";
import tools, {fetchAllTools, fetchAllToolsAndBorrows} from "../../store/tools";
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


export const UserProfile=() => {

    const borrow = useSelector(state => state.borrows ? state.tool: object)

    const tool = useSelector(state => state.tools ? state.tools: [])

   const profile = useSelector(state => state.profile ? state.profile: object);

    const dispatch = useDispatch();

    function sideEffects() {
        dispatch(fetchProfileByProfileId())
        dispatch(fetchAllTools())
    }

    useEffect(sideEffects, [dispatch]);
    console.log(profile)

    const {borrowId, borrowProfileId, borrowToolId, borrowCompleted, borrowDateTime, borrowReturnedDateTime} = borrows

    const {profileId, profileHandle, profileImage, profileEmail, profileName} = profile

    const {toolName, toolDescription, toolImage, toolLendRules} = tool

    const tools = tool.filter(tool => {
        for (let tool of tools) {
            if (tool.toolProfileId === profile.profileId  && null) {
                return false
            }
        }
        return true

    } )


    return (
        <>

            <Jumbo className="text-center img-fluid"
                   Image={profileImage}
                   ImageAlt={"Profile Image Placeholder"}
                   display1={profileHandle}
                   heading3={"Welcome To My Profile Page"}

            />

            <Container >
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
                        <h2>User Status</h2>
                        <p>
                            Tools Borrowed:{borrowCompleted} |
                            Tools Lent:5
                        </p>
                    </Col>

                </Row>
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
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div>
                            {tools.map((tool, index) => <ProfileTool key={index} tool={tool}/>)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}