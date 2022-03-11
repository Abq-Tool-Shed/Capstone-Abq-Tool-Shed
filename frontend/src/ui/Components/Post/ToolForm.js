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
        // toolPosition:"",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);

    const validator = Yup.object().shape({
        toolName: Yup.string()
            .required("Tool Name is required"),
        toolCategoryId: Yup.string()
            .required("Valid Tool Category is required"),
        toolDescription: Yup.string()
            .required("Tool Description is required"),
        toolLendRules: Yup.string()
            .required("Lend Rules are required"),
        // toolPosition: Yup.string()
        //     .required("Tool Location is required"),
    });

    const submitTool = (values, {resetForm, setStatus}) => {
        const toolProfileId = auth?.profileId ?? null
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
