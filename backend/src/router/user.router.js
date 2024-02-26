// user.route.js
import { Router } from "express";
import { logInUser, signInUser } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route("/signIn").post(
    upload.single("dp"),
    signInUser
);
router.route("/logIn").post(logInUser)

export default router;