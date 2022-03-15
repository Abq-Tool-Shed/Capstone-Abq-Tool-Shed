import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {MessageForm} from "./MessageForm"



export const MessageModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="outline-danger" onClick={handleShow} size="lg">
                Send Me A Message
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
                    <Button variant="outline-danger" onClick={handleClose}> Send
                    </Button>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}