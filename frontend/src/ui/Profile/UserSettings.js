import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import {ImageDropZone} from "../Components/ImageDropZone";
import { useDispatch, useSelector } from 'react-redux';
import {ProfileSettingsForm} from "../Components/Profile/ProfileSettingsForm"
import {fetchProfileByProfileId} from "../../store/profiles";
import {Link} from "react-router-dom";





export function UserSettings() {

    const dispatch = useDispatch()
    const profile = useSelector(state => {return state.profile ? state.profile : null})

    const sideEffects = () => {
        dispatch(fetchProfileByProfileId())
    }

    React.useEffect(sideEffects, [])
    return (
        <>

            <div className="text-lg-center">
                <h1>Welcome To Your Settings Page!</h1>
                <p>Please Fill Out The Fields Bellow To Customize Your Profile</p>
            </div>

            <div className="text-center">
                <Link to="/profile">
                    <Button variant="outline-danger" size="lg">
                        Back To Your Profile
                    </Button>
                </Link>
            </div>

            <Container>
                <Row>
                    <Col>
                        {profile && <ProfileSettingsForm profile={profile}/>}
                    </Col>

                </Row>
            </Container>
        </>
    )
}