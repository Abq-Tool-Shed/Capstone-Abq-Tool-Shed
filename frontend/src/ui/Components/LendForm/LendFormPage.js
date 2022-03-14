import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {LendForm} from "./LendForm";
import {useSelector} from "react-redux";

export const LendFormPage = () => {

    const borrows = useSelector(state => state.borrows ? state.borrows : [])
    console.log(borrows)


    return (
        <>


        </>

    );

}