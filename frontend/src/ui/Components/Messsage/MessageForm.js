import React from "react";
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";




export const MessageForm = () => {
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        message: Yup.string()
            .required("Message Is Required")
    })

    const Message = {
        message: ''
    };

    const signedInUser = useSelector(state => state ? state.auth : null)


    const submitMessage = (values, {resetForm, setStatus}) => {
        //TODO Gather data required to create a batched borrow and email them
        // Just hardwire a tool id in there to send this.
        //Grab a tool id, grab the message from the user.
        httpConfig.post("/apis/message/", values)
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
    return (
        <>
            <form   id="contact" method="post" noValidate>
                {/*TODO add a select to choose tools TLDR - Hit up Jon*/}

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-comment"/></span>
                        </div>
                        <textarea className="form-control" id="message" maxLength="2000" name="message"
                                  placeholder="Your Message (2000 characters max)" required rows="5"></textarea>
                    </div>
                </div>



                <button className="btn btn-primary btn-info" type="submit">Submit</button>
                <button className="btn btn-default btn-primary" type="reset">Reset</button>


                <div id="output-area"/>
            </form>
        </>
    )
}