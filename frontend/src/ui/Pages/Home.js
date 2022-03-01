import React from "react"
import {NavBar} from '../Components/NavBar'
import {Container} from "react-bootstrap";
import {HowItWorks} from "../Components/HowItWorks";




export function Home() {
    return (
        <>
            <Container>
            <div>
                <header  style={{padding: 50,color: 'black',backgroundImage: 'url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_494605768_2000133320009280151_316966.jpg)'}}>
            <h1 className={"text-center"} >ABQ Tool Shed</h1>
                </header>
            </div>
            </Container>

        </>
    )
}