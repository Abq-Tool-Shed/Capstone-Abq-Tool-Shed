import {Container, Form, Row, Col, Nav, Button} from "react-bootstrap";
import React, {useEffect} from 'react';
import  {ImageDropZone} from "../Components/ImageDropZone";
import {ProfilePostButton} from "../Components/Profile/ProfilePostButton";
import {Tool} from "../Components/Post/Tool";
import {useDispatch, useSelector} from "react-redux";
import map, {fetchProfileByProfileId} from "../../store/profiles";
import {fetchAllToolsAndBorrows} from "../../store/tools";
import {Link} from "react-router-dom";
import {ProfileSettingsFormContent} from "../Components/Profile/ProfileSettingsFormContent";
import {ProfileSettingsForm} from "../Components/Profile/ProfileSettingsForm";
import {MessageModal} from "../Components/Messsage/MessageModal";
import {object} from "yup";
import {GradientJumbo} from "../Components/Shared/GradientJumbo";



export const UserProfile=() => {

    const tool = useSelector(state => state.tool ? state.tool: object)

   const profile = useSelector(state => state.profile ? state.profile: object);

    const dispatch = useDispatch();

    function sideEffects() {
        dispatch(fetchProfileByProfileId())
    }

    useEffect(sideEffects, [dispatch]);
    console.log(profile)


    const {profileId, profileHandle, profileImage, profileEmail, profileName} = profile

    const {toolName, toolDescription, toolImage, toolLendRules} = tool






    return (
        <>




            <GradientJumbo
                display1={profileHandle}
                heading3={"Welcome To My Profile Page"}
                Image={profileImage}
                ImageAlt={"Profile Image"}
            />
            <Container >
                <Container>
                <Row>

                <Col>
                    <Link to="/user-settings">
                        <Button   size="lg">
                            Settings Page
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <MessageModal/>
                </Col>
                </Row>
                </Container>
                <br/>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        {profileImage}
                    </Col>
                    <Col style={{border: "transparent 75", height: 150, width: 250}} >
                        <h2>User Status</h2>
                        <p>
                            Tools Borrowed:5 |
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
                        {toolImage}
                        {toolName}
                        {toolDescription}
                        {toolLendRules}
                        </div>
                    </Col>
                </Row>
            </Container>



        </>



    )
}


