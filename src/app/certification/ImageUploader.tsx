// "use client";
// import React, { useState } from "react";
// import { ImageIcon } from "lucide-react";
// import Image from "next/image";
// import image from "@/assets/Image 4.png";

// type Props = {};
// const styles = {
//   image: {
//     maxWidth: "100%",
//     maxHeight: 320,
//   },
//   preview: {
//     marginTop: 50,
//     display: "flex",
//     flexDirection: "column",
//   },
// };

// const ImageUploader: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   // const [previewImage, setPreviewImage] = useState<string | null>(null);

//   const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];

//     if (file) {
//       setSelectedImage(file);
//     }
//   };

//   return (
//     <div>
//       <div>
//         {selectedImage ? (
//           <p>{selectedImage.name}</p>
//         ) : (
//           <>
//             <label htmlFor="image-input">
//               <ImageIcon className="text-[#4D4D4D] w-5 h-5" />
//               <p className="text-[#525150] font-medium text-sm">
//                 Upload certification image
//               </p>
//             </label>
//             <input
//               id="image-input"
//               type="file"
//               accept=".png, .jpg, .jpeg, .gif"
//               onChange={handleFile}
//               style={{ visibility: "hidden" }}
//             />
//           </>
//         )}
//       </div>
//       <div className="bg-[#CDCBC9] w-[2px] h-full">3</div>
//       <div>
//         <h5>Certification</h5>
//         <label htmlFor="cert-title" className="text-[#525150] text-sm">Certification Title</label>
//         <input id="cert-title" type="text" className="w-full text-[#525150] rounded-md border border-[#CDCBC9] text-lg"/>
//         <label htmlFor="cert-description" className="text-[#525150] text-sm">Description</label>
//        
//         <button className='bg-[#0086FF] text-[#FDFDFC] font-bold text-sm py-2 px-6 rounded-md'>create certification</button>
//       </div>
//     </div>
//   );
// };

// export default ImageUploader;
