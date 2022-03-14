import React from 'react'
import {Form} from "formik";
import {FormDebugger} from "../FormDebugger";



export const MessageContent = (props) => {
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
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user"/></span>
                        </div>
                        <input className="form-control" id="name" name="name" placeholder="Your Name" type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-envelope"/></span>
                        </div>
                        <input className="form-control" id="email" name="email" placeholder="Your Email"
                               type="email"/>
                    </div>
                </div>
                {
                    errors.profileEmail && touched.profileEmail && (
                        <div className="alert alert-danger">
                            {errors.profileEmail}
                        </div>
                    )

                }
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-pencil"/></span>
                        </div>
                        <input className="form-control" id="subject" name="subject" placeholder="Subject"
                               type="text"/>
                    </div>
                </div>

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
                <FormDebugger {...props} />
            </form>
            <script src="MessageScript.js"/>
        </>
    )
}