import React, {useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Tool} from "../Post/Tool";
import {fetchAllToolsAndBorrows} from "../../../store/tools";
import {TitleBG} from "../Shared/Jumbo";
import {SearchBar} from "./SearchBar";


export function Browse() {

    const tools = useSelector(state => state.tools ? state.tools : []);
    const borrows = useSelector(state => state.borrows ? state.borrows : []);
    const dispatch = useDispatch();

    function sideEffects() {
        dispatch(fetchAllToolsAndBorrows())
    }

    useEffect(sideEffects, [dispatch]);
    console.log(tools)
    const availableTools = tools.filter(tool => {
        for (let borrow of borrows) {
            if (borrow.borrowToolId === tool.toolId && borrow.borrowReturnedDateTime === null) {
                return false
            }
        }
return true

    } )

    return (
        <>

            <TitleBG
                test1 = "Big Test Header"
                test2 = "second header test"
                test3 = "third header test"
                test4 = "final header test"
            />
            <SearchBar placeHolder={"Search for a tool..."}  />
            <Container>
                <h1>Recent tools available for lend</h1>

                <Row>
                    {availableTools.map((tool, index) => <Tool key={index} tool={tool}/>)}
                </Row>
            </Container>
        </>
    )
}

