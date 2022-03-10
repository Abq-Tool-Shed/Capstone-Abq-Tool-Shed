import {Container} from "react-bootstrap";
import React from "react";
import headerStyles from "../../styles/shared/header.module.css";

//
// <Container>
//     <header >
//         <h1 className={"text-center pb-4"} >ABQ Tool Shed</h1>
//         <h2 className={"text-start pb-2 "} >A neighborhood resource for borrowing tools</h2>
//         <h2 className={"text-center p-4 "} >To complete your project</h2>
//         <h2 className={"text-end p-3 "} >Save money and build community</h2>
//     </header>
// </Container>


export function TitleBG({bigBackground}, props) {




    return (
        <div className={headerStyles.bigBackground}>
            <Container>
                     <div>
                         <h1 className={"text-center pb-4"} >{headerStyles.bigBackground.test1}</h1>
                         <h2 className={"text-start pb-2 "} >{props.test2}</h2>
                         <h3 className={"text-center p-4 "} >{props.test3}</h3>
                         <h3 className={"text-end p-3 "} >{props.test4}</h3>
                     </div>
            </Container>

        </div>
    )
}