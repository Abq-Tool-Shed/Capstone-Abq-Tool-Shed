import {Container, Button} from "react-bootstrap";
import React from "react";
import JumboStyles from "../../styles/shared/jumbo.module.css"
import {Link} from "react-router-dom";


export function ButtonJumbo({colorJumbo, display1, display2, heading2, heading3, heading4, Image, ImageAlt}) {

    return (
        <div className={JumboStyles.colorJumbo}>
            <Container className={"d-sm-flex justify-content-center align-items-center flex-sm-column"}>
                    <h2 className={"text-sm-center m-2 p-3 display-1"} >{display1}</h2>
                    <h2 className={"text-sm-center m-2 p-3 display-2"} >{display2}</h2>
                    <h2 className={"text-sm-start m-2 p-3 "} >{heading2}</h2>
                    <h2 className={"text-sm-center m-2 p-3 "} >{heading3}</h2>
                    <h2 className={"text-sm-end m-2 p-3 "} >{heading4}</h2>
                    <Link to="/post">
                        <Button className={"btn btn-outline-light btn-lg btn-block"} variant={"outline-light"} size={"lg"}>
                            Post A Tool
                        </Button>
                    </Link>
            </Container>
        </div>
    )
}
