import React from 'react'
import "../../styles/Profile.css"
import * as Yup from "yup";
import {Formik} from "formik";
import {httpConfig} from "../../../utils/http-config";

export const ProfilePost = () => {
    const Post = {
        toolProfileId: '',
        toolDescription: '',
        toolImage: '',
        toolLendRules: '',
        toolName: '',
        toolPostDate: ''
    };

    const validator = Yup.string().shape({
        toolProfileId: Yup.string()
            .profileName("Profile Name Must Match Your own")
            .required("Name Is Required"),
        toolDescription: Yup.string()
            .description("Please Provide A Valid Description")
            .required("A Description Is Required"),
        toolImage: Yup.object()
            .image("Pick An Image For Your Tool")
            .required("An Image Is Required"),

    })




    return (
        <>
            <div className="mainBoxModel">
                <input onSubmit={postMessage}

                />
            </div>


        </>
    )
}
