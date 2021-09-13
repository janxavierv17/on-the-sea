import multer from "multer";
// Storage Engine
// const storage = multer.diskStorage({
//   destination: function (request, file, cb) {
//     console.log("Storage");
//     cb(null, "./uploads/");
//   },
//   filename: function (request, file, cb) {
//     console.log("Storage");
//     cb(null, newDate().toISOString() + "-" + file.originalname);
//   },
// });

// File validation to only upload files.
const fileFilter = (request, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    console.log("File Filter");

    cb(null, true);
  } else {
    // Prevent upload
    cb({ message: "Please upload jpeg or png file format." }, false);
  }
};

export const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: fileFilter,
});
