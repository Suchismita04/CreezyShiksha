// user.route.js
import { Router } from "express";
import { logInUser, signInUser,forgetPassword, getUserDetails } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/signIn").post(
    upload.single("dP"),
    signInUser
);
router.route("/logIn").post(logInUser)
router.route("/forgetPassword").post(forgetPassword)
router.route("/getUserDetails").post(verifyJWT,getUserDetails)

export default router;