import React from "react"
import "../styles/Post.css"
import {Jumbo} from "../Components/Shared/Jumbo";
import {Container} from "@material-ui/core";
import {ToolForm} from "../Components/Post/ToolForm";
import Jumbobg from "../styles/shared/jumbo.module.css"




export function Post() {


    // Conditional Components example with Marty
    // This checks if the user is logged in and if they are it will display the div below
    // const isLoggedIn = true

    return (
        <>

            {/* Tool Post Header */}
            <Jumbo
                display1={"Post A Tool"}
                display2={"⇩"}
            />

            {/*Post Form 1*/}
            <div className={Jumbobg.reversedJumbo2}>

                    <ToolForm/>

            </div>

        </>

    )
}