"use client"
import React, { useState } from 'react'
import ParentContainer from '@/components/ui/parentContainer'
import { AwardIcon, ImageIcon, FilePlus } from 'lucide-react'
import Image from 'next/image'
import books from '@/assets/subjects.png'
import logo from '@/assets/ic_baseline-whatsapp.svg'
import { Trash2, Edit3, CirclePlus} from 'lucide-react'
import CardContainer from '@/components/ui/CardContainer'
import Select from 'react-select'
import Navbar from '@/components/Navbar'
import SideNavbar from '@/components/SideNavbar'
type Props = {}

const SubjectPage = (props: Props) => {
 

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
        <h4 className='text-[#525150] font-bold text-[16px] mb-5 ml-7'>Subjects</h4>
  <div className='w-full'>
  {
            showForm ? (
              <ParentContainer className={pageOpen ? "hidden": "drop-shadow-md h-[460px] bg-[#FDFDFC] flex flex-row items-center justify-center gap-5 pt-7"}>
                {/* image */}
                <Image src={books} alt='books' className='w-[45%] h-5/6 object-cover rounded-lg'/>
                <div className="bg-[#CDCBC9] w-[0.5px] h-5/6"></div>
                
                <div className="w-[45%]" >
                  <div className=" text-[#525150] text-center mb-3" >
                    <h6 className="text-lg font-bold mb-3">Subjects Creation</h6>
                    <p className=" text-sm font-medium">Subject Details</p>
                  </div>
                <form className="flex flex-col">
                  <div className='flex flex-col'>
                    <label htmlFor="subject-title" className="text-[#525150] text-sm mb-2">Subject Title</label>
                    <input id="suject-title" name="subject-title" type="text" required className="text-[#525150] text-lg border py-1 border-[#CDCBC9] rounded-md"/>
                  </div>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="description" className="text-[#525150] text-sm mb-2">Description</label>
                    <textarea id="cert-decription" rows={4} cols={50} required className="text-[#525150] rounded-md border border-[#CDCBC9] text-lg"></textarea>
                  </div>
                  <div className="flex flex-col mt-2">
                    <label htmlFor='subject-certifications' className='text-[#525150] text-sm'>Certification</label>
                    <Select

            options={options}
            defaultValue={value}
            onChange={() => setValue}
            placeholder=""
            isSearchable
            isMulti

            styles={{
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: 12,
                color: "#C9C9C9"
              }),
              dropdownIndicator : (baseStyles) => ({
                ...baseStyles,
                color: "#4D4D4D",
                backgroundColor: "FAF9F8"
              }),
              container: (baseStyles) => ({
                ...baseStyles,
                borderColor: "transparent"
              }),
              option: (baseStyles) => ({
                ...baseStyles,
                color: "#666666",
                fontSize: 15,
                fontWeight: 400,
                backgroundColor: "transparent"
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                borderColor: "transparent",
                backgroundColor: "FAF9F8"
              }),
              singleValue: (baseStyles) => ({
                ...baseStyles,
                color: "#666666",
                fontSize: 15,
                fontWeight: 400
              })
            }}
          />
                  </div>
                  
                  <button type="submit" onClick={handlePageOpen} className="text-[#FFFFFF] text-sm font-medium cursor-pointer bg-[#0086FF] rounded-md w-[50%] mx-auto mt-4 py-3">Create Subject</button>
                </form>
                </div>

                
                
               
                
      
            </ParentContainer>
            ): (
            <ParentContainer className='drop-shadow-md h-screen bg-[#FDFDFC] relative'>
                <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center gap-5'>
                    <FilePlus className='w-12 h-12 text-[#525150]'/>
                    <h4 className='text-[#525150] font-bold text-lg'>Subjects</h4>
                    <p className='text-[#525150]'>Opps...There is no subject here...</p>
                    <button onClick={handleDisplayForm} className='bg-[#0086FF] text-[#FDFDFC] font-bold text-sm py-2 px-6 w-5/6 rounded-md'>Create Subject</button>
                    <div className='bg-[#C8CDD6] w-[17%] h-1 rounded-3xl'></div>
                </div>
            </ParentContainer>
            )
        }

         
        </div>
        {pageOpen && 
        
        <div className='flex w-full gap-4'>
        <CardContainer className='w-[75%] h-[400px] relative flex flex-col items-center'>
          <table className='mb-9'>
            <thead>
                <tr className='text-[#444444] text-xs font-bold'>
                  <th><input type="checkbox"/></th>
                  <th className='py-3 px-4 text-sm'>Certification</th>
                  <th className='py-3 px-4'>Topic</th>
                  <th className='py-3 px-4'>Questions</th>
                  <th className='py-3 px-4'>Past Questions</th>
                  <th className='py-3 px-4'>Enrolled</th>
                  <th className='py-3 px-4'>Completion Rate</th>
                </tr>
            </thead>
            <tbody className='text-center text-[14px]'>
                <tr className='border'>
                  <td><input type='checkbox'/></td>
                      <td className='p-3'>
                      Mathematics
                    </td>

                  
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3 text-[#4285F4] font-bold'>100%</td>
                  <td><Trash2 className='text-[#000000] '/></td>
                </tr>
                <tr>
                  <td><input type='checkbox'/></td>
                  <td className='p-3'>
                    English
                  </td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3 text-[#4285F4] font-bold'>100%</td>
      
                  <td><Trash2 className='text-[#000000]'/></td>
                </tr>
                <tr>
                  <td><input type='checkbox'/></td>
                  
                  <td className='p-3'>
                    Physics
                  </td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3 text-[#4285F4] font-bold'>100%</td>
                  
                  <td><Trash2/></td>
                </tr>
                <tr>
                  <td><input type='checkbox'/></td>
                  
                  <td className='p-3'>
                    Chemisty
                  </td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3'>20</td>
                  <td className='p-3 text-[#4285F4] font-bold'>100%</td>
                  
                  <td><Trash2/></td>
                </tr>
            </tbody>
          </table>
          <button onClick={handleOutputAdd} type='submit' className='flex items-center justify-center gap-4 border-[1.5px] border-[#172041] rounded-lg px-5 py-2 w-[40%]'>
              <CirclePlus className='w-5 h-5 text-[#000000]'/>
              <span className='text-[#172041] font-bold text-sm'>Subject</span>
          </button>
        </CardContainer>
  
        <CardContainer className='w-[27%] h-[400px]'>
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
            <label htmlFor='image-input' className='text-sm text-[#444444] font-bold'>Certifications</label>
            <div className='relative mt-1'>
              {/* <Edit3 className='absloute right-0 cursor-pointer text-[#525150]'/> */}
              <Select

options={options}
defaultValue={value}
onChange={() => setValue}
placeholder=""
isSearchable
isMulti

styles={{
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: 12,
    color: "#C9C9C9"
  }),
  dropdownIndicator : (baseStyles) => ({
    ...baseStyles,
    color: "#4D4D4D",
    backgroundColor: "FAF9F8"
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    borderColor: "transparent"
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    color: "#666666",
    fontSize: 15,
    fontWeight: 400,
    backgroundColor: "transparent"
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    borderColor: "transparent",
    backgroundColor: "FAF9F8"
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "#666666",
    fontSize: 15,
    fontWeight: 400
  })
}}
/>
            </div>
            
          </form>
  
        </CardContainer>
        </div>
        }
    </div>
    </div>
    </>
    
  )
}

export default SubjectPage