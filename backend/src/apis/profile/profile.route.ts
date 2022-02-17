import {getProfileByProfileId, putProfileByProfileId, putProfileController} from "profile.controller";
import {Router} from "express";
import {asycValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../..utils/controllers/isLoggedIn.controler";
import {profileValidator} from "./profile.validator";

export const ProfileRoute: Router = Router();
ProfileRoute.route('/')
    .post(putProfileController);

ProfileRoute.route("/:profileId")
    .get(
        asycValidatorController([check('profileId', 'please provide as valid profileId').isUUID()]), getProfileByProfileId

    )
    .put(isLoggedIn, asycValidatorController(checkSchema(profileValidator)), putProfileController)
