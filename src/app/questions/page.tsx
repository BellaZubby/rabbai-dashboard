"use client"
import React, { useState } from 'react'
import ParentContainer from '@/components/ui/parentContainer'
import {FileQuestion, FileUp, XIcon } from 'lucide-react'
import Image from 'next/image'
import question from '@/assets/question.png'
import { Trash2, Edit3, CirclePlus} from 'lucide-react'
import CardContainer from '@/components/ui/CardContainer'
import Select from 'react-select'
import QuestionsPage from './questionsPage'
import Navbar from '@/components/Navbar'
import SideNavbar from '@/components/SideNavbar'
type Props = {}

const SubjectPage = (props: Props) => {
 

  const [showForm, setShowForm] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [output, setOutput] = useState([{image:"", title: "", description: ""}]);
  const [file, setFile] = useState(null);

  // for dragOver
  const handleDragOver = (e:any) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    if(selectedFile) {
      setFile(selectedFile.name);
    }
  };

  // to clear file
  const handleClearFile = () => {
    setFile(null);
  };


  const handleOutputAdd = () => {
    setOutput([...output, {image: "", title: "", description:""}] )
    setPageOpen(false)
  }
  
  const handleDisplayForm = () => {
      setShowForm(true);
  }

  const handlePageOpen = () => {
      setOutput([...output, {image: "", title: "", description:""}] )
      setPageOpen(true);
  }

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // defining the function
  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file) {
      setSelectedImage(file);
    }
  };

  const [value, setValue] = useState(null);
  const options = [
    {value:"JAMB", label: "JAMB"},
    {value:"WAEC", label: "WAEC"},
    {value:"NECO", label: "NECO"},
    {value:"GCE", label: "GCE"}
  ]

  

  
  return (
    <>
    <Navbar/>
    <div className="flex gap-5 min-h-screen w-full pt-24">
      <SideNavbar/>
      <div className='w-[95%] mx-auto'>
        <h4 className='text-[#525150] font-bold text-[16px] mb-5 ml-7'>Questions</h4>
  <div className='w-full'>
  {
            showForm ? (
              <ParentContainer className={pageOpen ? "hidden": "drop-shadow-md h-auto bg-[#FDFDFC] flex flex-row items-center justify-center gap-5 pt-7"}>
                {/* image */}
                <Image src={question} alt='books' className='w-[45%] h-5/6 object-cover rounded-lg ml-6'/>
                
                <div className="w-[50%]" >
                  <div className="text-center" >
                    <h6 className="text-sm font-bold mb-1 text-[#333333]">Question Creation</h6>
                    <p className=" text-lg font-medium text-[#333333]">Create Questions</p>
                    <p className='text-center mt-3 text-[#666666] text-sm'>Upload Past Question</p>
                  </div>
                 
                 <div className='mt-3 border-[1.5px] border-[#525150] border-dashed rounded-lg w-[60%] mx-auto h-[300px] flex flex-col items-center justify-center'>
                  {
                    file ? 
                    (<>
                        <div className='relative flex flex-col items-center border p-3 bg-[#c9c9c9]'>
                          <p className='text-xs'> <span className='text-[#000] font-bold text-xs'>File name:</span>{file}</p>
                          <button onClick={handleClearFile} className='absolute top-[-7px] right-[-7px]'><XIcon className='w-4 h-4 text-[#525150]'/></button>
                        </div>
                    
                    
                    </>) : 
                    
                    
                    (<>

                        <label htmlFor='dragdrop-file' className='cursor-pointer'>

                          <div className='flex flex-col items-center gap-2'>
                          <FileUp className='text-[#282A37]'/>
                          <p className='text-[#282A37] text-xs font-bold'>Drag & Drop or <span className='text-[#0086FF]'>choose</span> file to upload</p>
                          <p className='text-[#515978] text-xs'>Select pdf, ms.word, csv</p>
                          </div>
                          
                        </label>
                        <input id='dragdrop-file' type='file' className='hidden' onChange={handleDragOver} multiple/>
                        
                    
                    </>)
                  }
                 </div>
                 <div className='text-center'><button onClick={handlePageOpen} className='bg-[#0086FF] text-[#FFFFFF] text-xs font-bold py-3 px-3 mt-4 rounded-lg'>Manually Input Past Question</button></div>
                </div>
                
                
               
                
      
            </ParentContainer>
            ): (
                <ParentContainer className="drop-shadow-md h-screen bg-[#FDFDFC] relative flex flex-col items-center justify-center gap-3">
                <FileQuestion className="w-12 h-12 text-[#525150]" />
                <h4 className="text-[#525150] font-bold text-lg">Questions</h4>
                <div className="text-center mb-1">
                  <p className="text-[#525150] font-bold">
                    You dont have any questions yet...
                  </p>
                  <p className="text-[#525150]">
                    Click{" "}
                    <span className="text-[#525150] font-bold">Create Your First Question</span>{" "}
                    to Create Your First Question
                  </p>
                </div>
    
                <button
                  onClick={handleDisplayForm}
                  className="bg-[#0086FF] text-[#FDFDFC] font-bold text-xs py-3 w-[25%] rounded-md mb-2 "
                >
                  Create Your First Question
                </button>
                <div className="bg-[#C8CDD6] w-[5%] h-1 rounded-3xl"></div>
              </ParentContainer>
            )
        }

         
        </div>
        {pageOpen && 
            <>
        
              <QuestionsPage/>
           </>
//         <div className='flex gap-4'>
//         <CardContainer className='w-[72%] h-[400px] relative flex flex-col items-center'>
//           <table className='mb-9'>
//             <thead>
//                 <tr className='text-[#444444] text-[12.5px] font-bold'>
//                   <th><input type="checkbox"/></th>
//                   <th className='py-3 px-4'>Certification</th>
//                   <th className='py-3 px-4'>Topic</th>
//                   <th className='py-3 px-4'>Questions</th>
//                   <th className='py-3 px-4'>Past Questions</th>
//                   <th className='py-3 px-4'>Enrolled</th>
//                   <th className='py-3 px-4'>Completion Rate</th>
//                 </tr>
//             </thead>
//             <tbody className='text-center text-[14px]'>
//                 <tr className='border'>
//                   <td><input type='checkbox'/></td>
//                       <td className='p-3'>
//                       Mathematics
//                     </td>

                  
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3 text-[#4285F4] font-bold'>100%</td>
//                   <td><Trash2 className='text-[#000000] '/></td>
//                 </tr>
//                 <tr>
//                   <td><input type='checkbox'/></td>
//                   <td className='p-3'>
//                     English
//                   </td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3 text-[#4285F4] font-bold'>100%</td>
      
//                   <td><Trash2 className='text-[#000000]'/></td>
//                 </tr>
//                 <tr>
//                   <td><input type='checkbox'/></td>
                  
//                   <td className='p-3'>
//                     Physics
//                   </td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3 text-[#4285F4] font-bold'>100%</td>
                  
//                   <td><Trash2/></td>
//                 </tr>
//                 <tr>
//                   <td><input type='checkbox'/></td>
                  
//                   <td className='p-3'>
//                     Chemisty
//                   </td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3'>20</td>
//                   <td className='p-3 text-[#4285F4] font-bold'>100%</td>
                  
//                   <td><Trash2/></td>
//                 </tr>
//             </tbody>
//           </table>
//           <button onClick={handleOutputAdd} type='submit' className='flex items-center justify-center gap-4 border-[1.5px] border-[#172041] rounded-lg px-5 py-2 w-[40%]'>
//               <CirclePlus className='w-5 h-5 text-[#000000]'/>
//               <span className='text-[#172041] font-bold text-sm'>Subject</span>
//           </button>
//         </CardContainer>
  
//         <CardContainer className='w-[27%] h-[400px]'>
//           <form>
//             <label htmlFor='title' className='text-sm text-[#444444] font-bold'>Certification Title</label>
//             <div className='relative mt-1'>
//               <Edit3 className='absolute right-2 cursor-pointer bottom-2 text-[#525150]'/>
//               <input type='text' id='title' name='title' className='text-[#444444] text-lg border border-[#CDCBC9] rounded-md w-full py-1 mb-2'/>
//             </div>
//             <label htmlFor='description' className='text-sm text-[#444444] font-bold'>Description</label>
//             <div className='relative mt-1'>
//               <Edit3 className='absolute right-2 cursor-pointer bottom-2 text-[#525150]'/>
//               <textarea id='description' name='description' rows={4} cols={30} className='text-[#444444] text-lg border border-[#CDCBC9] rounded-md w-full'></textarea>
//             </div>
//             <label htmlFor='image-input' className='text-sm text-[#444444] font-bold'>Certifications</label>
//             <div className='relative mt-1'>
//               {/* <Edit3 className='absloute right-0 cursor-pointer text-[#525150]'/> */}
//               <Select

// options={options}
// defaultValue={value}
// onChange={() => setValue}
// placeholder=""
// isSearchable
// isMulti

// styles={{
//   placeholder: (baseStyles, state) => ({
//     ...baseStyles,
//     fontSize: 12,
//     color: "#C9C9C9"
//   }),
//   dropdownIndicator : (baseStyles) => ({
//     ...baseStyles,
//     color: "#4D4D4D",
//     backgroundColor: "FAF9F8"
//   }),
//   container: (baseStyles) => ({
//     ...baseStyles,
//     borderColor: "transparent"
//   }),
//   option: (baseStyles) => ({
//     ...baseStyles,
//     color: "#666666",
//     fontSize: 15,
//     fontWeight: 400,
//     backgroundColor: "transparent"
//   }),
//   valueContainer: (baseStyles) => ({
//     ...baseStyles,
//     borderColor: "transparent",
//     backgroundColor: "FAF9F8"
//   }),
//   singleValue: (baseStyles) => ({
//     ...baseStyles,
//     color: "#666666",
//     fontSize: 15,
//     fontWeight: 400
//   })
// }}
// />
//             </div>
            
//           </form>
  
//         </CardContainer>
//         </div>
        }
    </div>
    </div>
    </>
    
  )
}

export default SubjectPage