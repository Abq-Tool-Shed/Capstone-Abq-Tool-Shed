import JumboStyles from "../../styles/shared/jumbo.module.css";
import {Container} from "react-bootstrap";
import React from "react";

export function BackgroundJumbo({colorJumbo, display1, display2, heading2, heading3, heading4, Image, ImageAlt}) {

    return (
        <div className={JumboStyles.colorJumbo}>
            <Container>
                <div>
                    <h2 className={"text-sm-center m-2 p-3 display-1"} >{display1}</h2>
                    <h2 className={"text-sm-center m-2 p-3 display-2"} >{display2}</h2>
                    <h2 className={"text-sm-start m-2 p-3 "} >{heading2}</h2>
                    <h2 className={"text-sm-center m-2 p-3 "} >{heading3}</h2>
                    <h2 className={"text-sm-end m-2 p-3 "} >{heading4}</h2>
                </div>
            </Container>
        </div>
    )
}
