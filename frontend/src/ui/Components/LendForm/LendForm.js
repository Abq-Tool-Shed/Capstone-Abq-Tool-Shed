import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import jwt_decode from "jwt-decode"
import { getAuth } from "../../../store/auth";
import {LendFormContent} from "./LendFormContent";
import {useDispatch, useSelector} from "react-redux";
import {setBorrowByToolId} from "../../../store/borrows";


export const LendForm = () => {
    const borrow = {
        borrowId: "",
        borrowToolId: "",
        borrowCompleted: "",
        borrowDateTime: "",
        borrowReturnedDateTime: ""
    }

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);
    console.log(auth)

    const validator = Yup.object().shape({
        borrowCompleted: Yup.string()
            .required("Please select a status"),
        })
    const submitBorrowStatus = (values, {resetForm, setStatus}) => {
        console.log("borrow Auth", auth)
        const borrowProfileId = auth?.profileId ?? null
        console.log(borrowProfileId)
        const borrow = {borrowProfileId, ...values}
        httpConfig.post("/apis/borrow", borrow)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                    dispatch(setBorrowByToolId)
                }
                setStatus({message, type})
            });
    };

    return (
        <Formik
            initialValues={borrow}
            onSubmit={submitBorrowStatus}
            validationSchema={validator}
            >
            {LendFormContent}
        </Formik>
    )

};