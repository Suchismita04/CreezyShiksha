// user.route.js
import { Router } from "express";
import { logInUser, signInUser,forgetPassword,  logOutUser } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/signIn").post(
    upload.single("dP"),
    signInUser
);
router.route("/logIn").post(logInUser)
router.route("/forgetPassword").post(forgetPassword)
router.route("/verifyToken").get(verifyJWT,(req,res)=>{
    res.status(200).json({success:true})
})
router.route("/logOut").post(logOutUser)

export default router;