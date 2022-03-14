import {Dropdown, DropdownButton} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import * as list from "react-bootstrap/ElementChildren";




export function CategoryDropdown() {



    return(
        <>
            <DropdownButton align="end" title="Dropdown end" id="dropdown-menu-align-end">
                <Dropdown.Item eventKey="1">fasdfasd</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Other</Dropdown.Item>
            </DropdownButton>
        </>
    )
}