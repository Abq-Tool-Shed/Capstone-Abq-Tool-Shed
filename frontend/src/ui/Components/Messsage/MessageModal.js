import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {MessageForm} from "./MessageForm"



export const MessageModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant={'primary'} onClick={handleShow} size="lg">
                Send A Message
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Message
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MessageForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"primary"} onClick={handleClose}> Send
                    </Button>
                    <Button variant={"secondary"} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}