import React from "react"
import {NavBar} from '../Components/NavBar'
import {Container, Row, Col, Image} from "react-bootstrap";
import homeStyles from "../home/faq.module.css";


export function Faq() {
    return (
        <>
            <div className={homeStyles.header}>
                <Container>
                    <header>
                        <h1 className={"text-center "}>ABQ Tool Shed</h1>
                        <h2>Frequently Asked Questions</h2>
                        <h4>about the site and community</h4>
                    </header>
                </Container>
            </div>

        </>
    )
}