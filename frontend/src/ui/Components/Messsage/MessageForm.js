import React, {useEffect} from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Form} from "react-bootstrap";
import tools, {fetchAllTools, fetchToolsByProfileId} from "../../../store/tools";
import auth from "../../../store/auth";
import {FormDebugger} from "../FormDebugger";




export const MessageForm = () => {

    const validator = Yup.object().shape({
        message: Yup.string()
            .required("Message Is Required")
    })

    const Message = {
        toolId: '',
        message: ''

    };

    const signedInUser = useSelector(state => state ? state.auth : null)


    const submitMessage = (values, {resetForm, setStatus}) => {
        console.log("Is this thing on?")
        const borrowProfileId = signedInUser?.profileId ?? null

        const tool = {borrowProfileId, ...values}
        console.log(tools)

        httpConfig.post("/apis/message/", tool)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type})
                if(reply.status ===200) {
                    resetForm()
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



   function MessageContent (props) {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props

       const tools = useSelector(state => state.tools ? state.tools : [])
console.log(tools)
    return (
        <>
            <Form  onSubmit={handleSubmit}  noValidate>
            <Form.Group className="mb-3" controlId="formCategory">
                <Form.Label>Tool Name</Form.Label>

                {/*<ToolDropdown/>*/}
                <label htmlFor="toolId" className={"mb-3"}>Choose a Category:</label>

                <select name="toolId" id="toolId" onChange={handleChange} onBlur={handleBlur}>
                    <option value={""}> Select a Tool to Borrow </option>
                    {tools.map(tools =>  <option key={tools.toolId} value={tools.toolId}>{tools.toolName}</option>)}
                </select>

            </Form.Group>
            {
                errors.toolId && touched.toolId && (
                    <div className="alert alert-danger">
                        {errors.toolId}
                    </div>
                )

            }

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-comment"/></span>
                        </div>
                        <textarea className="form-control" maxLength="2000" name="message"
                                  placeholder="Your Message (2000 characters max)" value={values.message} required rows="5" onChange={handleChange} onBlur={handleBlur}/>
                    </div>
                </div>



                <button className="btn btn-primary btn-info" onClick={handleSubmit} type="submit">Submit</button>
                <button className="btn btn-default btn-primary" onClick={handleReset} type="reset">Reset</button>

                {/*<FormDebugger {...props} />*/}
            </Form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
   }