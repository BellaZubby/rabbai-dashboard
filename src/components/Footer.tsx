import React from 'react'
import whatsapp from '@/assets/ic_baseline-whatsapp.svg'
import instagram from '@/assets/mdi_instagram.svg'
import telegram from '@/assets/mingcute_telegram-fill.svg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
        <div className='mt-12 flex items-center justify-center gap-24 text-xs'>
            <div className='flex items-center gap-10'>
                <Image src={whatsapp} alt='whatsapp' className='w-5 h-5'/>
                <Image src={instagram} alt='instagram' className='w-5 h-5'/>
                <Image src={telegram} alt='telegram' className='w-5 h-5'/>
            </div>
            <div className='flex items-center gap-10 text-[#525150]'>
                <Link href='#'>Terms of use</Link>
                <Link href='#'>Policy</Link>
                <Link href='#'>Contact</Link>
            </div>
            <div className='text-[#525150]'>
                <p>2024 myRabbAi. All Rights Reserved.</p>
            </div>
        </div>
    </>
  )
}

export default Footer