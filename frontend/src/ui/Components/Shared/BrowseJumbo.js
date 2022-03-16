import {Container} from "react-bootstrap";
import React, {useEffect} from "react";
import JumboStyles from "../../styles/shared/jumbo.module.css"
import {SearchBar} from "../Browse/SearchBar";
import tools, {fetchAllToolsAndBorrows} from "../../../store/tools";
import SearchCSS from "../../Components/Browse/searchBar.css"
import {useDispatch, useSelector} from "react-redux";


export function BrowseJumbo({display1, display2, heading2, heading3, heading4}) {

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
            <div className={JumboStyles.colorJumbo}>
                <Container className={"d-flex justify-content-center align-items-center flex-md-column"}>
                    <h2 className={"text-sm-center m-2 p-3 display-1"}>{display1}</h2>
                    <h2 className={"text-sm-center m-2 p-3 display-2"}>{display2}</h2>
                    <h2 className={"text-sm-start m-2 p-3 "}>{heading2}</h2>
                    <h2 className={"text-sm-center m-2 p-3 "}>{heading3}</h2>
                    <SearchBar className={SearchCSS} placeHolder={"Search for a tool..."} data={tools}/>
                    <h2 className={"text-sm-end m-2 p-3 "}>{heading4}</h2>
                </Container>
            </div>
        )
    }
