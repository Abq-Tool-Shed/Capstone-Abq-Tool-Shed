import React from "react";
import {Form} from "formik";
import {FormDebugger} from "../FormDebugger";

export const BorrowRequestToggleContent = (props) => {
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
        <Form onSubmit={handleSubmit}>
            <label htmlFor={"BorrowRequest"}>Select the tools you would like to borrow</label>
                {['checkbox'].map((type) => (
                    <div key={type} className="mb-3">
                        <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                        </Form.Check>
                    </div>
                ))}

            <div className="form-group">
                <button className="btn btn-primary mb-2" type="submit">Submit</button>
                <button
                    className="btn btn-danger mb-2"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >Reset
                </button>
            </div>

            <FormDebugger {...props} />
        </Form>


        </>
    )
}
