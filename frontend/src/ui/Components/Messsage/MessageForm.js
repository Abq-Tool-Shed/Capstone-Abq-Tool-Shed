import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import jwt_decode from "jwt-decode"
import { getAuth } from '../../../store/auth'
import {MessageContent} from "./MessageContnent";
import {useDispatch} from "react-redux";




export const MessageForm = () => {
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email address must be a valid email")
            .required("Email Is Required"),
        messageSubject: Yup.string()
            .required("Subject Is Required"),
        messageName: Yup.string()
            .required("Name Is Required"),
        messageMessage: Yup.string()
            .required("Message Is Required")
    })

    const Message = {
        profileEmail: '',
        messageName: '',
        messageSubject: '',
        messageMessage: ''
    };


    const submitMessage = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/message/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type})
                if(reply.status ===200 && reply.headers['authorization']) {
                    window.localStorage.removeItem('authorization')
                    window.localStorage.setItem('authorization', reply.headers['authorization'])
                    resetForm()
                    let jwtToken = jwt_decode(reply.headers['authorization'])
                    console.log(jwtToken)
                    dispatch(getAuth(jwtToken))
                }
                setStatus({message, type});}

            );
    };

    return (

        <Formik
             initialValues={Message}
             onSubmit={submitMessage}
             validationSchema={validator}
        >
            {MessageContent}
        </Formik>

    )

};