export interface PartialProfile {
    profileId : string|null
    profileHandle: string,
    profileName: string,
    profilePhoneNumber: string,
    profileEmail: string,
    profileProfileImage: string,
}

export interface Profile {
    profileId : string|null
    profileActivationToken: string|null,
    profileHandle: string,
    profileName: string,
    profilePhoneNumber: string,
    profileEmail: string,
    profileProfileImage: string,
    profileProfileHash: string,
}