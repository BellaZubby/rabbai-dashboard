import React from 'react'
import { ChatType } from '@/app/shared/types'


const StudentChats = (props: ChatType) => {
  return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-3'>
                <props.icon className='text-[#525150] mt-4'/>
                <div className='mt-7'>
                    <p className='text-[#313130] text-xs font-bold'>{props.name}</p>
                    <p className='text-[#525150] text-xs'>{props.text}</p>
                </div>
            </div>
            <p className='text-[#525150] font-bold text-xs mt-4 mr-4'>{props.reply}</p>
       </div>
  )
}

export default StudentChats