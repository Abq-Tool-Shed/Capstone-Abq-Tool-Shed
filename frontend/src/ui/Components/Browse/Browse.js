import React, {useEffect, useState} from "react";
import {Col, Row, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Tool} from "../Post/Tool";
import {fetchAllToolsAndBorrows} from "../../../store/tools";

import {SearchBar} from "./SearchBar";
import SearchCSS from "./searchBar.css";
import headerStyles from "../../styles/shared/header.module.css";
import JumboStyles from "../../styles/shared/jumbo.module.css";


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
    })
    const [filteredData, setFilteredData] = useState(availableTools)

    console.log(filteredData)
    console.log(availableTools)
    const handleFilter = (event) => {
        const searchWord = event.target.value
        console.log(searchWord)
        const newFilter = availableTools.filter((value) => {
            return value.toolName.toLowerCase().includes(searchWord.toLowerCase())
        });

        if (searchWord === "") {
            setFilteredData(availableTools)
        } else {
            setFilteredData(newFilter)
        }
    };


    return (
        <>
            <div className={JumboStyles.colorJumbo}>
                <Container className={"d-flex justify-content-center align-items-center flex-md-column"}>
                    <h2 className={"text-sm-center m-2 p-3 display-1"}>ABQ Tool Shed 🛠</h2>
                    <h2 className={"text-sm-center m-2 p-3 "}>Browse Available Tools</h2>
                    <SearchBar handleFilter={handleFilter} className={SearchCSS} placeHolder={"Search for a tool..."}
                               filteredData={availableTools}/>
                </Container>
            </div>


<<<<<<< HEAD
=======
        <div className={"d-sm-flex"} style={{backgroundColor: "rgba(18, 109, 166, 1)"}}>
>>>>>>> 09e947935040d3d191093b3997c2e6e13812452e
            {/*<SearchBar placeHolder={"Search for a tool..."} data={tools} />*/}
            <Container style={{backgroundColor: "rgba(18, 109, 166, 1)"}}>
                <h1 className={"text-white text-center p-3"}>Available Tools</h1>

<<<<<<< HEAD
                <Row>
                    {(filteredData.length ? filteredData : availableTools).map((tool, index) => <Tool key={index}
                                                                                                      tool={tool}/>)}
=======
                <Row className={"justify-content-center"}>
                    {(filteredData.length ? filteredData : availableTools).map((tool, index) => <Tool key={index} tool={tool}/>)}
>>>>>>> 09e947935040d3d191093b3997c2e6e13812452e
                </Row>
            </Container>
        </div>
        </>
    )
}

