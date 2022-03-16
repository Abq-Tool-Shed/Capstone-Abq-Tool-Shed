import React, {useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Tool} from "../Post/Tool";
import {fetchAllToolsAndBorrows} from "../../../store/tools";

import {SearchBar} from "./SearchBar";
import SearchCSS from "./searchBar.css";
import headerStyles from "../../styles/shared/header.module.css";
import {BrowseJumbo} from "../Shared/BrowseJumbo";




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


            <BrowseJumbo
                display1 = " ABQ Tool Shed 🛠"
                heading3 = "Browse Available Tools"
            />


            {/*<SearchBar placeHolder={"Search for a tool..."} data={tools} />*/}
            <Container>
                <h1>Recent tools available for lend</h1>

                <Row>
                    {availableTools.map((tool, index) => <Tool key={index} tool={tool}/>)}
                </Row>
            </Container>
        </>
    )
}

