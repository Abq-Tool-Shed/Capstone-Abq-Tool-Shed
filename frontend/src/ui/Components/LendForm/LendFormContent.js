import React from "react";
import {Form, Field} from "formik";
import {FormDebugger} from "../FormDebugger";
import {DropdownButton, Dropdown, DropdownProps} from "react-bootstrap";

export const LendFormContent = () => {
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
                <div className={"form-group"}>
                    <label htmlFor={"borrowCompleted"}>Update tool lending status</label>

                        <div className="form-group">
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-1">Borrowed</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Returned</Dropdown.Item>
                            </DropdownButton>
                            <button className="btn btn-primary mb-2" type="submit">Submit</button>
                            <button
                                className="btn btn-danger mb-2"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >Reset
                            </button>
                        </div>
                </div>

            <FormDebugger {...props} />
            </Form>
    {
        status && (<div className={status.type}>{status.message}</div>)
    }



        </>
    )
}


