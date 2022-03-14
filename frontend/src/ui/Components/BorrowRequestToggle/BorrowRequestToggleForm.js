import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import jwt_decode from "jwt-decode"
import { getAuth } from '../../../store/auth'
import {useDispatch} from "react-redux";
import {BorrowRequestToggleContent} from "./BorrowRequestToggleContent";

export const BorrowRequestToggleForm = () => {
    const dispatch = useDispatch()



    const submitBorrowRequest = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/borrow/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type})
                if(reply.status ===200 ) {
                    resetForm()
                }
                setStatus({message, type});}

            );
    };

    return (

        <Formik
            initialValues={signIn}
            onSubmit={submitBorrowRequest}
            validationSchema={validator}
        >
            {BorrowRequestToggleContent}
        </Formik>

    )

};
