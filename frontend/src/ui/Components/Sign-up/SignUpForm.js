import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContent} from "./SignUpFormContent";

export const SignUpForm = () => {
    const signUp = {
        profileEmail: '',
        profileHandle: '',
        profilePassword: '',
        profilePasswordConfirm: '',
        profilePhoneNumber: '',
    };

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email address must be a valid email")
            .required("email is required"),
        profileHandle: Yup.string()
            .required('profile handle is required'),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        profilePasswordConfirm: Yup.string()
            .required("Password confirm is required")
            .min(8, "Password must be at least eight characters"),
        profilePhoneNumber: Yup.string()
            .min(10, "phone number is too short")
            .max(10, "phone number is too long"),
        profileName: Yup.string()
            .min(1, "profile name is too short")
            .max(32, "profile name is too long"),
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
            {SignUpFormContent}
        </Formik>

    )

};