// user.route.js
import { Router } from "express";
import { logInUser, signInUser, logOutUser } from "../controller/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/signIn").post(
    signInUser
);
router.route("/logIn").post(logInUser)
router.route("/verifyToken").get(verifyJWT, (req, res) => {
    res.status(200).json({ success: true })
})
router.route("/logOut").post(logOutUser)

export default router;