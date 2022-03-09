import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";

import {LogInContent} from "./LogInContent";



export const LogInForm = () => {
    const signUp = {
        profileEmail: '',
        profilePassword: '',
    };

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email address must be a valid email")
            .required("email is required"),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
    })

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up", values)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status ===200) {
                        resetForm();
                    }
                    setStatus({message, type});

                }

            );
    };

    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {LogInContent}
        </Formik>

    )

};
