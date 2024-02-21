import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadeOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //uploade the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("File is uploaded successfully", response.url)
        fs.unlinkSync(localFilePath) //when the file has been successfully then its unlink the file
        return response;
    } catch (error) {
        console.log("File is not uploaded", error)
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload oparetion got failed  
        return null
    }
}

export { uploadeOnCloudinary }