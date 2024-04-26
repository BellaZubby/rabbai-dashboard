import React from 'react'
import { CircleHelp, Bell, Edit3, MessageCircle } from 'lucide-react'
import image from '@/assets/Image 4.png'
import image2 from '@/assets/lady.png'
import Image from 'next/image'
import './profile.css'
import CardContainer from '@/components/ui/CardContainer'
import { teacherType } from '../shared/types'
import StudentFeedback from './studentFeedback'
import StaffConversation from './staffConversation'

type Props = {}

const Teachers:Array<teacherType> = [
    {
        image: image,
        name: 'Mark John',
        tag: 'teacher_001',
        status: 'Online'
    },
    {
        image: image2,
        name: 'Ada Igwe',
        tag: 'teacher_001',
        status: 'Offline'
    },
    {
        image: image,
        name: 'Ugochukwu Oke',
        tag: 'teacher_001',
        status: 'Online'
    },
]

const ProfileNavbar = (props: Props) => {
  return (
    <div className='w-full h-auto'>
        <div className='w-[98%] mx-auto relative'>
            <div className='bg-[#cac9c8] h-48 rounded-lg'>
                <div className='flex justify-between py-4 px-5'>
                    <div className='text-[#FDFDFC]'>
                        <p className='text-xs font-light'>profile</p>
                        <h5 className='text-xs font-bold'>My Profile</h5>
                    </div>
                    <div className='flex items-center justify-center gap-1 text-[#FDFDFC]'>
                        <Bell className='w-5 h-5'/>
                        <CircleHelp className='w-5 h-5'/>
                        <Image src={image} alt='image' className='rounded-full w-10 h-10'/>
                    </div>
                </div>
            </div>
            <div className='w-[95%] mx-auto border-[2px] border-[#FDFDFC] rounded-lg h-20 bg-[#ECECEC] absolute bottom-[-40px] left-6'>
                <div className='flex items-center gap-3 pl-4 py-2'>
                    <div className='relative'>
                        <Image src={image} alt='image' className='rounded-full'/>
                        <Edit3 className='w-5 h-5 p-1 text-[#07CA9E] bg-[#FFFFFF] rounded-full absolute right-0 top-9'/>
                    </div>
                    <div className='text-[#525150]'>
                        <h5 className='text-xs font-bold'>Mark John</h5>
                        <p className='text-xs font-light'>teacher_001</p>
                    </div>
                </div>
            </div>
            </div>
       
        <div className='grid-container mt-20 h-auto w-full'>
        <CardContainer className='first-item bg-[#FAF9F8] h-auto border-none'>
            <h4 className='text-[#525150] font-bold text-lg mb-3'>Profile Information</h4>
            <div className='flex flex-col gap-2'>
                <span className='flex items-center justify-between'>
                    <p className='text-[#7B7A79] text-sm'><span className='font-bold'>First Name:</span> Mark</p>
                    <Edit3 className='w-5 h-5 text-[#07CA9E]'/>
                </span>
                <span className='flex items-center justify-between'>
                    <p  className='text-[#7B7A79] text-sm'><span className='font-bold'>Last Name:</span> John</p>
                    <Edit3  className='w-5 h-5 text-[#07CA9E]'/>
                </span>
                <span className='flex items-center justify-between'>
                    <p className='text-[#7B7A79] text-sm'><span className='font-bold'>Email:</span> markjohn@gmail.com</p>
                    <Edit3  className='w-5 h-5 text-[#07CA9E]'/>
                </span>
                <span className='flex items-center justify-between'>
                    <p className='text-[#7B7A79] text-sm'><span className='font-bold'>User Tag:</span> teacher_001</p>
                    <Edit3  className='w-5 h-5 text-[#07CA9E]'/>
                </span>
                <span className='flex items-center justify-between mt-2'>
                    <p className='text-[#7B7A79] text-sm'><span className='font-bold'>Password:</span> *******</p>
                    <Edit3  className='w-5 h-5 text-[#07CA9E]'/>
                </span>
            </div>
        </CardContainer>
        <CardContainer className='second-item h-auto bg-[#FAF9F8] border-none'>
        <h4 className='text-[#525150] text-lg font-bold mb-2'>Teacher</h4>
        <table>
            <thead>
            <tr className='text-[#525150] font-bold text-sm'>
                    <th className='pr-24'>Teacher</th>
                    <th className='pr-20'>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    Teachers.map((d, i) => (
                        <tr key={i}>
                            <td className='flex items-center gap-2 py-1'>
                                <Image src={d.image} alt='image' className='w-8 h-8 rounded-full'/>
                                <span className='text-xs text-[#7B7A79]'>
                                    <p className='font-bold'>{d.name}</p>
                                    <p className='text-[10px]'>{d.tag}</p>
                                </span>
                            </td>
                            <td className=''>
                            <div className='flex items-center justify-center gap-2'>
                                    <div className={d.status === 'Online' ? "flex items-center justify-center w-12 h-4 bg-[#07CA9E] text-[#FAF9F8] font-light p-1 rounded-lg text-[9px]" : "flex items-center justify-center w-12 h-4 bg-[#CDCBC9] text-[#FAF9F8] text-[9px] font-light p-1 rounded-lg"}>{d.status === "Online" ? "Online" : "Offline"}</div>
                                    <span className='text-[#7B7A79] flex items-center justify-center gap-1 text-[11.5px]'>
                                        <MessageCircle className='w-4 h-4'/>
                                        <p>Message</p>
                                    </span>
                                    </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </CardContainer>
        <div className='third-item bg-[#FAF9F8] h-auto'>
            <StudentFeedback/>
        </div>
        <div className='fourth-item h-72'>
           <StaffConversation/>
        </div>
       </div>
    </div>
  )
}

export default ProfileNavbar