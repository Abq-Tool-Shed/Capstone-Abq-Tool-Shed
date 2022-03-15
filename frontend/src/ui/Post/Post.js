import React from "react"
import "../styles/Post.css"
import {Jumbo} from "../Components/Shared/Jumbo";
import {Container} from "@material-ui/core";
import {ToolForm} from "../Components/Post/ToolForm";





export function Post() {


    // Conditional Components example with Marty
    // This checks if the user is logged in and if they are it will display the div below
    // const isLoggedIn = true

    return (
        <>

            {/*Tool Post Header*/}
            <Jumbo
                display1={"Post A Tool"}
                heading3={"V"}
            />

            {/*Post Form 1*/}
            <Container>
                <ToolForm/>
            </Container>

        </>

    )
}