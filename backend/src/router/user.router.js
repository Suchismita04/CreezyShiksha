// user.route.js
import { Router } from "express";
import { signInUser } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route("/signIn").post(
    upload.single("dp"),
    signInUser
);

export default router;