import React from 'react'
import logo from '@/assets/logo.png'
import user from '@/assets/Image 4.png'
import Image from 'next/image'
import search from '@/assets/Search.svg'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
        <div className='w-full fixed bg-[#F9F8F6] shadow-md py-2 z-[40]'>
            <div className='w-[90%] mx-auto flex items-center justify-between'>
                <Image src={logo} alt='logo'/>
                <div className='flex items-center gap-12'>
                    <div className='relative'>
                        <Image src={search} alt='search-icon' className='absolute top-3 left-2'/>
                        <input type='text' placeholder='Search' className='py-2 px-4 placeholder:text-[#525150] placeholder:pl-5 border border-[#525150] rounded-lg'/>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button className='bg-[#0086FF] text-[#FFFFFF] py-2 px-3 rounded-lg'>Create Subject</button>
                        <Image src={user} alt='user' className='rounded-full'/>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Navbar