"use client"
import React, { useState } from 'react'
import EmptyState from './EmptyState'
import ParentContainer from '@/components/ui/parentContainer'
import CertScoreBoard from './CertScoreBoard'
import FormComponent from './FormComponent'
import { AwardIcon, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import logo from '@/assets/ic_baseline-whatsapp.svg'
import { Trash2, Edit3, CirclePlus} from 'lucide-react'
import CardContainer from '@/components/ui/CardContainer'

type Props = {}

const CertificationPage = (props: Props) => {
 

  const [showForm, setShowForm] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [output, setOutput] = useState([{image:"", title: "", description: ""}]);

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
    <div className='w-[96%] mx-auto'>
        <h4 className='text-[#525150] font-bold text-sm mb-5'>Certifications</h4>
  <div className=''>
  {
            showForm ? (
              <ParentContainer className={pageOpen ? "hidden": "drop-shadow-md h-auto bg-[#FDFDFC]"}>
              <form className="flex items-center justify-center gap-5 h-[340px] pt-7">
                <div className="bg-[#F6F6F6] border-[1.5px] border-dashed border-[#7B7A79] basis-1/3 rounded-md h-full">
                <label htmlFor="image-input" className="flex flex-col items-center relative top-[50%] translate-y-[-50%] cursor-pointer">
                  <ImageIcon className="text-[#4D4D4D] w-7 h-7"/><span className="text-[#525150] font-medium">Upload Certification Image</span></label>
                <input
                  id="image-input"
                  type="file"
                  accept=".png, .jpg, .jpeg, .gif"
                  onChange={handleFile}
                  style= {{visibility: "hidden" }}
                  required
                />
                </div>
                <div className="bg-[#CDCBC9] w-[0.5px] h-full"></div>
                
                <div className=" flex flex-col basis-1/2" >
                <h6 className="text-[#525150] text-lg font-bold text-center mb-3">Certification</h6>
               <div className="flex flex-col">
                <label htmlFor="title" className="text-[#525150] text-sm mb-2">Certification Title</label>
                <input id="title" name="title" type="text" required className="text-[#525150] text-lg border border-[#CDCBC9] rounded-md"/>
              </div>
                <div className="flex flex-col mt-2"><label htmlFor="description" className="text-[#525150] text-sm mb-2">Description</label>
                <textarea id="cert-decription" rows={4} cols={50} required className="w-full text-[#525150] rounded-md border border-[#CDCBC9] text-lg"></textarea>
                </div>
                <button type="submit" onClick={handlePageOpen} className="text-[#FFFFFF] text-sm font-medium cursor-pointer bg-[#0086FF] rounded-md w-[50%] mx-auto mt-4 py-3">Create Certification</button>
                
                </div>
              </form>
      
            </ParentContainer>
            ): (
            <ParentContainer className='drop-shadow-md h-screen bg-[#FDFDFC] relative'>
                <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center gap-5'>
                    <AwardIcon className='w-12 h-12 text-[#525150]'/>
                    <h4 className='text-[#525150] font-bold text-lg'>Certifications</h4>
                    <p className='text-[#525150]'>Opps...No certification created...</p>
                    <button onClick={handleDisplayForm} className='bg-[#0086FF] text-[#FDFDFC] font-bold text-sm py-2 px-6 rounded-md'>Create certification</button>
                    <div className='bg-[#C8CDD6] w-[17%] h-1 rounded-3xl'></div>
                </div>
            </ParentContainer>
            )
        }

         
        </div>
        {pageOpen && 
        
        <div className='flex items-center gap-5'>
        <CardContainer className='w-[70%] h-[400px] relative'>
          <table className='table mb-12'>
            <thead>
                <tr className='text-[#444444] text-sm font-bold'>
                  <th><input type="checkbox"/></th>
                  <th className='py-3 px-6'>Certification</th>
                  <th className='py-3 px-6'>Topic</th>
                  <th className='py-3 px-6'>Questions</th>
                  <th className='py-3 px-6'>Enrolled</th>
                  <th className='py-3 px-6'>Complete Rate</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                <tr className='border'>
                  <td><input type='checkbox'/></td>
                      <td className='p-3'>
                      <span className='flex items-center justify-center gap-1'>
                        <Image src={logo} alt='image' className='w-6 h-6'/>JAMB
                      </span>
                    </td>

                  
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td><Trash2 className='text-[#000000]'/></td>
                </tr>
                {/* <tr>
                  <td><input type='checkbox'/></td>
                  <td className='p-3'>
                    <span className='flex items-center justify-center gap-1'>
                      <Image src={logo} alt='image' className='w-6 h-6'/>WAEC
                    </span>
                  </td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
      
                  <td><Trash2 className='text-[#000000]'/></td>
                </tr>
                <tr>
                  <td><input type='checkbox'/></td>
                  
                  <td className='p-3'>
                    <span className='flex items-center justify-center gap-1'>
                      <Image src={logo} alt='image' className='w-6 h-6'/>NECO
                    </span>
                  </td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  
                  <td><Trash2/></td>
                </tr> */}
            </tbody>
          </table>
          <button onClick={handleOutputAdd} type='submit' className='flex items-center gap-5 absolute right-4 border-[1.5px] border-[#172041] rounded-lg px-5 py-2 '>
              <CirclePlus className='w-5 h-5 text-[#000000]'/>
              <span className='text-[#172041] font-bold text-sm'>Add New Certification</span>
          </button>
        </CardContainer>
  
        <CardContainer className='w-[30%] h-[400px]'>
          <form>
            <label htmlFor='title' className='text-sm text-[#444444] font-bold'>Certification Title</label>
            <div className='relative mt-1'>
              <Edit3 className='absolute right-2 cursor-pointer bottom-2 text-[#525150]'/>
              <input type='text' id='title' name='title' className='text-[#444444] text-lg border border-[#CDCBC9] rounded-md w-full py-1 mb-2'/>
            </div>
            <label htmlFor='description' className='text-sm text-[#444444] font-bold'>Description</label>
            <div className='relative mt-1'>
              <Edit3 className='absolute right-2 cursor-pointer bottom-2 text-[#525150]'/>
              <textarea id='description' name='description' rows={4} cols={30} className='text-[#444444] text-lg border border-[#CDCBC9] rounded-md w-full'></textarea>
            </div>
            <label htmlFor='image-input' className='text-sm text-[#444444] font-bold'>Image</label>
            <div className='relative mt-1'>
              <Edit3 className='absloute right-2 cursor-pointer bottom-1 w-full text-[#525150]'/>
              <input 
                type='file' 
                id='image-input'  
                name='image-input'
                accept=".png, .jpg, .jpeg, .gif" 
                className='text-[#444444] text-lg'
                style={{visibility: "hidden"}}
              />
            </div>
            
          </form>
  
        </CardContainer>
        </div>
        }
    </div>
  )
}

export default CertificationPage