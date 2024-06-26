import React from 'react'
import { ChatType } from '@/app/shared/types'


const Chats = (props: ChatType) => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center gap-3'>
           <props.icon className='text-[#7B7A79]'/>
            <div className='mt-7'>
                <p className='text-[#2D3748] text-xs font-bold'>{props.name}</p>
                <p className='text-[#7B7A79] text-xs text-ellipsis
                '>{props.text}</p>
            </div>
        </div>
        <h6 className='text-[#525150] font-medium text-[12px] mr-9'>{props.reply}</h6>
    </div>
  )
}

export default Chats