import React, {useEffect} from "react";
import {FormDebugger} from "../FormDebugger";
import {ImageDropZone} from "../ImageDropZone";
import {DropdownButton, Form, Dropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CategoryDropdown} from "./CategoryDropdown";
import {fetchAllCategories} from "../../../store/categories";


export const ToolFormContent = (props) => {
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

    const categories = useSelector(state => state.categories ? state.categories : [])
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAllCategories())
    }
    useEffect(effects, [dispatch])


    return (
        <>
        <div>
            <Form onSubmit={handleSubmit} className={"col-sm-6 centered mx-auto p-3 text-white"}>
                {/*controlId must match what is passed to the initialValues prop*/}

                {/*Tool Name*/}
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Tool Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="toolName"
                        placeholder="Your Tool's name."
                        value={values.toolName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Group>

                {/* Tool Category */}
                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label>Tool Category: <br/>    </Form.Label>
                <br/>

                    <select name="toolCategoryId" id="toolCategoryId" onChange={handleChange} onBlur={handleBlur}>
                        <option value={""}> Select a Category </option>
                        {categories.map(category =>  <option value={category.categoryId}>{category.categoryName}</option>)}
                    </select>

                </Form.Group>
                {
                    errors.toolCategoryId && touched.toolCategoryId && (
                        <div className="alert alert-danger">
                            {errors.toolCategoryId}
                        </div>
                    )

                }


                {/* Tool Description */}
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Tool Description:</Form.Label>
                    <Form.Control
                        type="textarea"
                        name="toolDescription"
                        placeholder="Your Tool's Description."
                        value={values.toolDescription}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Group>
                {
                    errors.toolDescription && touched.toolDescription && (
                        <div className="alert alert-danger">
                            {errors.toolDescription}
                        </div>
                    )

                }


                {/* Tool Lend Rules */}
                <Form.Group className="mb-3" controlId="formLendRules">
                    <Form.Label>Lend Rules:</Form.Label>
                    <Form.Control
                        type="textarea"
                        name="toolLendRules"
                        placeholder="Enter Tool Lend Rules"
                        value={values.toolLendRules}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Group>
                    {
                        errors.toolLendRules && touched.toolLendRules && (
                            <div className="alert alert-danger">
                                {errors.toolLendRules}
                            </div>
                        )

                    }


                <Form.Group className="mb-3">
                    <Form.Label>Tool Image:</Form.Label>
                    <ImageDropZone
                        formikProps={{
                            values,
                            handleChange,
                            handleBlur,
                            setFieldValue,
                            fieldValue:"toolImage"
                        }}
                    />

                </Form.Group>



                {/*LAT LONG Goes Here - if we are still doing it*/}



                <Form.Group className="mb-3" controlId="formButton">
                    <button className="btn btn-outline-light m-2 p-2" type="submit">Submit</button>

                    <button
                        className="btn btn-outline-light m-2 p-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </Form.Group>

            </Form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </div>
        </>
    )
};
