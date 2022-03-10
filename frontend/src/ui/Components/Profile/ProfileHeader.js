import React from 'react'
import {fetchAllProfiles} from "../../../store/profiles";
import {setAllProfiles} from "../../../store/profiles";
import {useDispatch, useSelector} from "react-redux";




export const Profile=({profile}) => {


const {profileName, profileHandle, profileImage} = profile

const name = useSelector(state => state.names ? state.names : {})
console.log(name)


    return (
        <>
            <h1>{profileName} Tool Shed 🛠</h1>
        </>
    )
}