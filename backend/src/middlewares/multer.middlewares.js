import multer from "multer";




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be stored
    cb(null, 'public/temp');
  },
  filename: function (req, file, cb) {
    // Specify how uploaded files should be named
    cb(null,file.originalname);
  }
});

export const upload = multer({ storage: storage });