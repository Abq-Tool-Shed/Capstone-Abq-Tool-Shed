export interface PartialProfile {
    profileId : string|null
    profileEmail: string,
    profileHandle: string,
    profileImage: string | null,
    profileName: string,
    profilePhoneNumber: string | null
}

export interface Profile {
    profileId : string|null
    profileActivationToken: string|null,
    profileEmail: string,
    profileHandle: string,
    profileHash: string,
    profileImage: string | null,
    profileName: string,
    profilePhoneNumber: string | null
}