import React from 'react'
import {Post} from '../Post'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export const ProfileTool = () =>  {
    return (
        <>
        <div>
            <Link to="/post">
                <Button variant="outline-light" size="lg">
                    Create A Post
                </Button>
            </Link>
        </div>
        </>
    )
}