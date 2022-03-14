import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {SignInForm} from "./SignInForm"
import {BorrowRequestToggleForm} from "./BorrowRequestToggleForm";




export const SignInModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant={'primary'} onClick={handleShow}>
                Log In!
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Log In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BorrowRequestToggleForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}