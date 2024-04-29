"use client"
import React, { useState } from 'react'
import ParentContainer from '@/components/ui/parentContainer'
import {FileQuestion, FileUp, XIcon } from 'lucide-react'
import Image from 'next/image'
import question from '@/assets/question.png'
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
        }
    </div>
    </div>
    </>
    
  )
}

export default SubjectPage