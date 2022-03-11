import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {FormDebugger} from "../FormDebugger";

export const ToolFormContent = (props) => {
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
    } = props;
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}
                {/*Tool Name*/}
                <div className="form-group">
                    <label htmlFor="toolName">Enter your tool name.</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"></div>
                        </div>
                        <input
                            className="form-control"
                            name="toolName"
                            type="text"
                            value={values.toolName}
                            placeholder="Enter Tool Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.toolName && touched.toolName && (
                            <div className="alert alert-danger">
                                {errors.toolName}
                            </div>
                        )
                    }
                </div>

                {/* Tool Category */}
                <div className="form-group">
                    <label htmlFor="toolCategoryId">Tool Category</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"></div>
                        </div>
                        <input
                            className="form-control"
                            name="toolCategoryId"
                            type="text"
                            value={values.toolCategoryId}
                            placeholder="Enter Tool Category"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.toolCategoryId && touched.toolCategoryId && (
                            <div className="alert alert-danger">
                                {errors.toolCategoryId}
                            </div>
                        )

                    }
                </div>

                {/* Tool Description */}
                <div className="form-group">
                    <label htmlFor="toolDescription">Tool Description</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"></div>
                        </div>
                        <input
                            className="form-control"
                            name="toolDescription"
                            type="text"
                            value={values.toolDescription}
                            placeholder="Enter Tool Description"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.toolDescription && touched.toolDescription && (
                            <div className="alert alert-danger">
                                {errors.toolDescription}
                            </div>
                        )

                    }
                </div>

                {/* Tool Lend Rules */}
                <div className="form-group">
                    <label htmlFor="toolLendRules">Tool Lend Rules</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"></div>
                        </div>
                        <input
                            className="form-control"
                            name="toolLendRules"
                            type="text"
                            value={values.toolLendRules}
                            placeholder="Enter Tool Lend Rules"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.toolLendRules && touched.toolLendRules && (
                            <div className="alert alert-danger">
                                {errors.toolLendRules}
                            </div>
                        )

                    }
                </div>

                {/*LAT LONG Goes Here*/}



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
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>


    )
};
