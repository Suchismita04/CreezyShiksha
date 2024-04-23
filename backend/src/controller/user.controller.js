import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.models.js"
import { uploadeOnCloudinary } from "../utils/cloudinary.js"

//problem in upload pic

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;

        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generate Access And Refresh Tokens")
    }
}

const signInUser = asyncHandler(async (req, res) => {

    //get details from frontend
    const { fullName, email, password } = req.body
    console.log("this is data:", req.body)

    //check all fields 
    if ([fullName, email, password].some((field) =>
        field?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    //check if the user is alredy exists:email

    const userExisted = await User.findOne({
        $or: [{ email }, { fullName }]
    })

    if (userExisted) {
        throw new ApiError(409, "User is already existed")
    }

    //check for dp
    let dpLocalPath;
    if (req.file && Array.isArray(req.file.dp) && req.file.dp.length > 0) {
        dpLocalPath = req.file.dp[0].path
    }
    console.log(dpLocalPath)

    //uploade them into cloudinary
    const dp = await uploadeOnCloudinary(dpLocalPath)
    console.log(dp)

    //create user obj-create entry in db

    const user = await User.create({
        fullName,
        password,
        email,
        dp: dp?.url || ""
    })
    const createdUser = User.findById(user._id).select("-password -refreshToken")
    if (!createdUser) {
        throw new ApiError(500, "Something is went wrong while registaring user")
    }

    return res.status(201).json(
        new ApiResponse(200, {
            _id: createdUser._id,
            fullName: createdUser.fullName,
            email: createdUser.email,
            dp: createdUser.dp,
        }, "User is successfully created")
    );


})


const logInUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "email or password is required");
    }
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {
                user: {
                    _id: loggedInUser._id,
                    fullName: loggedInUser.fullName,
                    email: loggedInUser.email,
                }, accessToken, refreshToken
            }, "User logged In successfully")
        )




})

const forgetPassword = asyncHandler(async (req, res) => {
    //Error-pending
    const { email, newPassword } = req.body;
    console.log("Email =",email);
    console.log("password =",newPassword);
    if (!email && !newPassword) {
        throw new ApiError(400, "email or password is required")
    }
    const user = await User.findById(req.user?._id)
  
    if (!user) { // Check if user is null
        throw new ApiError(404, "User not found");
    }
    user.password = newPassword
    await user.save({ validateBeforeSave: false })
    return res.status(200).json(new ApiResponse(200, {}, "Password Changed Successfully"))

})

const getUserDetails=asyncHandler(async(req,res)=>{
    try {
         const data=await User.find()
         res.json(data)
    } catch (error) {
        throw new ApiError(500,"Server Error")
    }

})



export { signInUser, logInUser, forgetPassword,getUserDetails }