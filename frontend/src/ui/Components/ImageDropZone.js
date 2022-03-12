
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function ImageUploader() {
}


export function ImageDropZone({formikProps}) {


    const onDrop = useCallback(acceptedFiles => {

        const formData = new FormData();
        formData.append('image', acceptedFiles[0]);


        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    return (
        <div style={{border: "solid black 15",borderStyle: "dotted", height: 150, width: 150, padding: 30 }} className="form-group" {...getRootProps()}>
            <div  className="input-group input-group-lg " >
                <input className="form-control-file"
                    accept="image/*"
                   onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    {...getInputProps()}/>
                {

                    isDragActive ?
                        <p>+</p> :
                        <p>Upload An Image Here <br></br> +</p>
                }
            </div>
        </div>
    )
}
