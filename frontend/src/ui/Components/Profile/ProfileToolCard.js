import React from "react"
import {Col, Row, Image} from "react-bootstrap";
import {useSelector} from "react-redux";

export const ProfileTool = ({tool}) => {

    const {toolName, toolDescription, toolImage, toolLendRules} = tool

    const borrows = useSelector(state => state.borrows ? state.borrows : [])
    console.log(borrows)

    return (
        <>
            <Col md={'4'} >
                    <div className={'d-flex flex-sm-column align-items-center'}>
                        <div className={'d-flex flex-sm-column align-items-center'}>
                            <p>{toolName}</p>
                            <p>{toolDescription}</p>
                            <p>{toolLendRules}</p>
                        </div>
                        <Image className={"p-2"} fluid src={toolImage}/>
                    </div>
            </Col>
        </>
    )
}