import JumboStyles from "../../styles/shared/jumbo.module.css";
import {Container} from "react-bootstrap";
import React from "react";

export function ProfileJumbo({display1, display2, heading2, heading3, heading4, Image, ImageAlt}) {

    return (
        <div className={JumboStyles.colorJumbo}>
            <Container>
                <div>
                    <img className="align-content-center me-5 ms-5" height='250' width='250'  src={Image} alt={ImageAlt}/>
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