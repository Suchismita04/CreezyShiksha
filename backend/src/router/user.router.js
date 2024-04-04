// user.route.js
import { Router } from "express";
import { logInUser, signInUser,forgetPassword } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route("/signIn").post(
    upload.single("dP"),
    signInUser
);
router.route("/logIn").post(logInUser)
router.route("/forgetPassword").post(forgetPassword)

export default router;