import React from "react"
import {Col, Row, Image} from "react-bootstrap";
import {useSelector} from "react-redux";

export const ProfileTool=({tool}) => {


    const {toolName, toolDescription, toolImage, toolLendRules} = tool

    const borrows = useSelector(state => state.borrows ? state.borrows : [])
    console.log(borrows)

    return (
        <>
            <Col md={6} className={"border border-2 rounded border-secondary bg-light py-2"}>
                <div className={'text-center'}>
                    <p>{toolName}</p>
                    <p>{toolDescription}</p>
                    <p>{toolLendRules}</p>
                    <Image fluid src={toolImage}/>
                </div>
            </Col>

        </>
    )
}