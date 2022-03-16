import React, {useEffect} from "react"
import {Col, Row, Image, Nav} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import profiles from "../../../store/profiles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fetchAllToolsAndBorrows} from "../../../store/tools";

export const Tool=({tool}) => {

    console.log(profiles)
    // toolCategoryId: "cecbc787-94f8-11ec-bfae-0242c0a82002"
    // toolDescription: "random text ahhhhh"
    // toolId: "76e2cc76-94ff-11ec-ae94-0242c0a83002"
    // toolImage: null
    // toolLat: null
    // toolLendRules: "yada yada yada agldff"
    // toolLong: null
    // toolName: "Super Hammer"
    // toolProfileId: "f5780527-9435-11ec-aaa5-0242ac1f0002"

    // const {borrowStatus} = available

    const {toolProfileId, toolName, toolDescription, toolImage, toolLendRules} = tool
    // const profiles = useSelector(state => state.profiles ? state.profiles : [])
    const borrows = useSelector(state => state.borrows ? state.borrows : [])
    // const dispatch = useDispatch();
    //
    // function sideEffects() {
    //     dispatch(fetchAllToolsAndBorrows())
    // }
    // useEffect(sideEffects, [dispatch]);
    // console.log(profiles)
    // const toolProfileId = profiles.filter(tool => {
    //     for (let profile of profiles()) {
    //         if (borrow.borrowToolId === tool.toolId && borrow.borrowReturnedDateTime === null) {
    //             return false
    //         }
    //     }
    //     return true
    //
    // } )

    return (
        <>
            <Col md={6} className={"border border-2 rounded border-secondary bg-light py-2"}>

                <Row>
                    <Col className={'text-start pe-5'} md={8}>
                        <h5>Available</h5>
                    </Col>
                    <Col className={'text-center'} md={4}>
                        <>
                            <Nav.Link href={`/profile/${toolProfileId}`} className="btn ">
                                <FontAwesomeIcon icon="user" />&nbsp;&nbsp; Visit User's Profile
                            </Nav.Link>
                        </>

                    </Col>
                </Row>
                <Image fluid src={toolImage}/>
                {/*<Image className={"p-3"} fluid  rounded src={kitten1} alt={"kitten"}/>*/}
                <div className={'text-center'}>

                    <p>{toolName}</p>

                    <p>{toolDescription}</p>
                    <p>{toolLendRules}</p>
                    {/*<p>{toolDescription}</p>*/}
                </div>
            </Col>

    </>
)
}