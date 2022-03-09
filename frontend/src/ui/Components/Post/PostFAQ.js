import {Container} from "react-bootstrap";
import React from "react";

export function PostFAQ() {

    return(
        <div>
            <Container className={"align-content-center text-center bg-secondary"}>
                <div className="btn-group m-3">
                    <p className={"m-auto px-auto "} >This is a very important and frequently asked question?</p>
                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split me-3"
                            id="FAQ-dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only"></span>
                    </button>
                    <div className={"dropdown-menu"} aria-labelledby={"FAQ-dropdown"}>
                        <div className={"dropdown-item"}>
                            <p className="dropdown-item-text">The Answer to your FAQ!</p>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )

}