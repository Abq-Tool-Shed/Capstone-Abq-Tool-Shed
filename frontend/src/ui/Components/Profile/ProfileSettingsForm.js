import React from "react"
import * as Yup from "yup";
import { httpConfig } from '../../../utils/http-config'
import { Formik } from "formik";
import { ProfileSettingsFormContent } from './ProfileSettingsFormContent'

export const ProfileSettingsForm = (props) => {
    const {profile} = props

    const validationObject = Yup.object().shape({
        profileImage: Yup.mixed(),
        profileBio: Yup.string()
            .max(200, "Bio is to long."),
        profileHandle: Yup.string()
            .required("A Profile Handle Is Required"),
    });

    function submitProfileSettings (values, {resetForm, setStatus}) {
        console.log("is this thing on?")
        const submitUpdatedProfileSettings = (updatedProfile) => {
            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                    return (reply)
                })
        };

        if (values.profileImage !== undefined) {
            httpConfig.post(`/apis/image-upload/`, values.profileImage)
                .then(reply => {
                        let {message, type} = reply;

                        if (reply.status === 200) {
                            submitUpdatedProfileSettings({...values, profileImage:message})
                        } else {
                            setStatus({message, type});
                        }
                    }
                );
        } else {
            submitUpdatedProfileSettings(values);
        }
    }

    return (
        <Formik
            initialValues={profile}
            onSubmit={submitProfileSettings}
            validationSchema={validationObject}
        >
            {ProfileSettingsFormContent}
        </Formik>
    )

};