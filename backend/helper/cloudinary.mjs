// export const uploads = (file, folder) => {
//   console.log("Cloudinary Uploading.");
//   return new Promise((resolve) => {
//     try {
//       cloudinary.v2.uploader.upload(
//         file,
//         (result) => {
//           resolve({
//             url: result.url,
//             id: result.public.id,
//           });
//         },
//         { resource_type: "auto", folder: folder }
//       );
//       console.log("Properties", upload.url);
//       return response.status(200).send(upload);
//     } catch (error) {
//       console.log("Cloudinary uploads - ", error);
//     }
//   });
// };
