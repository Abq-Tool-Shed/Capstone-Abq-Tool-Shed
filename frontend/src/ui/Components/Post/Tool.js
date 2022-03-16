import React from "react"
import {Col, Row, Image, Nav} from "react-bootstrap";
import {useSelector} from "react-redux";
import JumboStyles from "../../styles/shared/jumbo.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ColorStyles from "../../styles/shared/colors.module.css"
import {Container} from "@material-ui/core";

export const Tool=({tool}) => {


    const {toolProfileId, toolName, toolDescription, toolImage, toolLendRules} = tool
    const borrows = useSelector(state => state.borrows ? state.borrows : [])

    return (
        <>


            <Col sm={5} className={"border border-2 rounded border-secondary bg-light border-dark m-2  align-items-center"}>
                <Row className={""}>
                    <Col className={'text-center  p-3'}>
                        <>
                            <Nav.Link href={`/profile/${toolProfileId}`} className="btn btn-outline-dark ">
                                <FontAwesomeIcon icon="user" />&nbsp;&nbsp;  Lender's Profile
                            </Nav.Link>
                        </>
                    </Col>
                </Row>
                <Image className={"p-2"} fluid src={toolImage}/>

                <div className={'d-flex flex-sm-column align-items-center'}>
                    <strong><p>{toolName}</p></strong>
                    <p className={ColorStyles.toolCard}>{toolDescription}</p>
                    <p className={ColorStyles.toolCard}>{toolLendRules}</p>
                </div>
            </Col>



    </>
)
}