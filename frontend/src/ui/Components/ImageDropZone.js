
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function ImageUploader() {
}


export function ImageDropZone({formikProps}) {


    const onDrop = useCallback(acceptedFiles => {

       // const formData = new FormData();
       // formData.append('image', acceptedFiles[0]);


       // formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    return (
        <div className="form-group" {...getRootProps()}>
            <div style={{borderRadius: 250}} className="input-group input-group-lg  border border-5 w-25 " >
                <input className="form-control-file"
                    accept="image/*"
                   // onChange={formikProps.handleChange}
                    //onBlur={formikProps.handleBlur}
                    {...getInputProps()}/>
                {

                    isDragActive ?
                        <p>Place Image here</p> :
                        <p> Drag an Image Here  <br></br> Click To Add An Image </p>
                }
            </div>
        </div>
    )
}
