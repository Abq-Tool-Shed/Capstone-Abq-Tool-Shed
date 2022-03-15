import {Container} from "react-bootstrap";
import React from "react";
import Jumbo from "../../styles/shared/jumbo.module.css"


export function GradientJumbo({colorJumbo, display1, heading2, heading3, heading4, Image, ImageAlt}) {

    return (
        <div className={Jumbo.colorJumbo}>
            <Container>
                     <div>

                         <img className="align-content-center me-5 ms-5" height='250' width='250'  src={Image} alt={ImageAlt}/>
                         <h1 className={"text-sm-center pb-4 display-1"} >{display1}</h1>
                         <h2 className={"text-start pb-2 "} >{heading2}</h2>
                         <h3 className={"text-center p-4 "} >{heading3}</h3>
                         <h3 className={"text-end p-3 "} >{heading4}</h3>
                     </div>
            </Container>
        </div>
    )
}