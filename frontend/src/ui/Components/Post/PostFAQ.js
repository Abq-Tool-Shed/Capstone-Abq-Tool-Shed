import {Container} from "react-bootstrap";
import React from "react";
import ColorStyles from "../../styles/shared/colors.module.css"

export function PostFAQ({Question, Answer}) {

    return(
        <div>
            <Container className={ColorStyles.brown2}>
                <div>
                    <strong><p className={"text-sm-left"}>{Question}</p></strong>
                    <p className={"text-sm-right"}>{Answer}</p>
                </div>
            </Container>
        </div>
    )

}