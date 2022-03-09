import React, {useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Tool} from "../Post/Tool";
import {fetchAllToolsAndBorrows} from "../../../store/tools";


export function Browse() {

    const tools = useSelector(state => state.tools ? state.tools : []);

    const dispatch = useDispatch();

    function sideEffects() {
        dispatch(fetchAllToolsAndBorrows())
    }

    useEffect(sideEffects, [dispatch]);
    console.log(tools)

    return (
        <>
            <Container>
                <h1>Recent tools available for lend</h1>

                <Row>
                    {tools.map((tool, index) => <Tool key={index} tool={tool}/>)}
                </Row>
            </Container>
        </>
    )
}
