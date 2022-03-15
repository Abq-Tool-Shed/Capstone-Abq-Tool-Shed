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
        toolCategoryId: Yup.string(),
        toolDescription: Yup.string()
            .required("Tool Description is required"),
        toolLendRules: Yup.string()
            .required("Lend Rules are required"),
        toolImage: Yup.mixed()
        // toolPosition: Yup.string()
        //     .required("Tool Location is required"),
    });

    const submitTool = (values, {resetForm, setStatus}) => {
        console.log("is this thing on")
        const toolProfileId = auth?.profileId ?? null
        // console.log(toolProfileId)
        const tool = {toolProfileId, ...values}

        const submitToolImage = (toolSubmit) => {
            httpConfig.post("/apis/tool/", toolSubmit)
                .then(reply => {
                        let {message, type} = reply;

                        if (reply.status === 200) {
                            resetForm();
                            // dispatch(fetchAllTools())
                        }
                        setStatus({message, type});
                        return (reply)
                    }
                );
        }

            if (values.toolImage !== "") {
                httpConfig.post(`/apis/image-upload/`, values.toolImage)
                    .then(reply => {
                            let {message, type} = reply;

                            if (reply.status === 200) {
                                submitToolImage({...tool, toolImage: message})
                            } else {
                                setStatus({message, type});
                            }
                        }
                    );
        } else {
            submitToolImage(tool);
        }

    }


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
