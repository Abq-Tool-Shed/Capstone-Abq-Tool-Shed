import React from 'react'
import {Post} from '../../Post/Post'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export const ProfilePostButton = () =>  {
    return (
        <>
        <div>
            <Link to="/prepost">
                <Button variant="outline-light" size="lg">
                    Create A Post
                </Button>
            </Link>
        </div>
        </>
    )
}