import {Container, Button} from "react-bootstrap";
import React from 'react'
import ImageUploader from "../Components/ImageUploader";
import {TextField} from "@material-ui/core";



export function Profile() {
    return (
        <>
                <div>
                <h1 className={"text-center"}>Welcome To your Profile</h1>
                </div>
                <div>
                    <ImageUploader>Upload An Image</ImageUploader>
                    <br/>
                    <h2>Bio</h2>

                </div>


        </>
    )
}
