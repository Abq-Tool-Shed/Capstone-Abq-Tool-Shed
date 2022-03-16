import JumboStyles from "../../styles/shared/jumbo.module.css";
import {Container} from "react-bootstrap";
import React from "react";

export function ProfileJumbo({display1, display2, heading2, heading3, heading4, Image, ImageAlt}) {

    return (
        <div className={JumboStyles.colorJumbo}>
            <Container className={"d-flex justify-content-center align-items-center flex-md-column"}>
                    <h2 className={"text-sm-center m-2 p-3 display-1"} >{display1}</h2>
                    <h2 className={"text-sm-center m-2 p-3 display-2"} >{display2}</h2>
                    <img className="" style={{ maxWidth: "350px"}}  src={Image} alt={ImageAlt}/>
                    <h2 className={"text-sm-start m-2 p-3 "} >{heading2}</h2>
                    <h2 className={"text-sm-center m-2 p-3 "} >{heading3}</h2>
                    <h2 className={"text-sm-end m-2 p-3 "} >{heading4}</h2>
            </Container>
        </div>
    )
}

// aspectRatio: "1 / 1"
// Never set absolute heights