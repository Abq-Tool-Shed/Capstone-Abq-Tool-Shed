import React from 'react';
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {ToolFormContent} from "./ToolFormContent";
import { useSelector, useDispatch } from 'react-redux'
import {fetchAllTools} from "../../../store/tools";

export const ToolForm = () => {
    const tool = {
        toolName: "",
        toolCategoryId:"",
        toolDescription:"",
        toolLendRules:"",
        toolImage:""
        // toolPosition:"",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);
    console.log(auth)

    const validator = Yup.object().shape({
        toolName: Yup.string()
            .required("Tool Name is required"),
        toolCategoryId: Yup.string()
            .required("Valid Tool Category is required"),
        toolDescription: Yup.string()
            .required("Tool Description is required"),
        toolLendRules: Yup.string()
            .required("Lend Rules are required"),
        toolImage: Yup.mixed()
        // toolPosition: Yup.string()
        //     .required("Tool Location is required"),
    });

    const submitTool = (values, {resetForm, setStatus}) => {
        // console.log("tool auth", auth)
        const toolProfileId = auth?.profileId ?? null
        // console.log(toolProfileId)
        const tool = {toolProfileId, ...values}
        httpConfig.post("/apis/tool/", tool)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        dispatch(fetchAllTools())
                    }
                    setStatus({message, type});
                }
            );



    };

    // const submitCategory = (values, {setStatus})


    return (
        <Formik
            initialValues={tool}
            onSubmit={submitTool}
            validationSchema={validator}
        >
        {ToolFormContent}
        </Formik>

    )
};
