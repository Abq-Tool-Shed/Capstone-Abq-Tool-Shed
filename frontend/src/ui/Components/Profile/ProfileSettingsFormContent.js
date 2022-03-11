import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ImageDropZone}  from '../ImageDropZone'
import {FormDebugger} from "../FormDebugger";
import {Form} from 'react-bootstrap'

export const ProfileSettingsFormContent = (props) => {
    const {
        setFieldValue,
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
    console.log(values)

    return (
        <>
            <Form onSubmit={handleSubmit}>

                        <ImageDropZone
                            formikProps={{
                                values,
                                handleChange,
                                handleBlur,
                                setFieldValue,
                                fieldValue:"profileImage"
                            }}
                        />


                <div className="form-group">
                    <label htmlFor="profileHandle">Profile Handle</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="profileHandle"
                            type="text"
                            value={values.profileHandle}
                            placeholder="@Handle"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profileHandle && touched.profileHandle && (
                            <div className="alert alert-danger">
                                {errors.profileHandle}
                            </div>
                        )
                    }
                </div>


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

            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>


    )
};