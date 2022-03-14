import React from "react"
import {Col, Row, Image} from "react-bootstrap";
import {useSelector} from "react-redux";

export const ProfileTool=({tool, profile}) => {

    const {profileId, profileHandle, profileImage, profileEmail, profileName} = profile

    const {toolName, toolDescription, toolImage, toolLendRules} = tool

    const borrows = useSelector(state => state.borrows ? state.borrows : [])
    console.log(borrows)

    return (
        <>
            <Col md={6} className={"border border-2 rounded border-secondary bg-light py-2"}>

                <Image src={toolImage}/>
                <div className={'text-center'}>
                    <p>{toolName}</p>
                    <p>{toolDescription}</p>
                    <p>{toolLendRules}</p>
                </div>
            </Col>

        </>
    )
}