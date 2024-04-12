import React from 'react'
import { ChatType } from '../shared/types'
import { UserRound, MessageCircleMore } from 'lucide-react'
import CardContainer from '@/components/ui/CardContainer'
import Chats from '@/components/chats'
import './chats.css'
type Props = {}

const Data: Array<ChatType> = [
    {
        icon: UserRound,
        name: "Esthera Jackson",
        text: "Hi! I need more",
        reply: "REPLY"
    },
    {
        icon: UserRound,
        name: "Luke Ike",
        text: "Awesome work, can you change...",
        reply: "REPLY"
    },
    {
        icon: UserRound,
        name: "Luke Ike",
        text: "Awesome work, can you change...",
        reply: "REPLY"
    },
    {
        icon: UserRound,
        name: "Luke Ike",
        text: "Awesome work, can you change...",
        reply: "REPLY"
    },
    {
        icon: UserRound,
        name: "Esthera Jackson",
        text: "Hi! I need more",
        reply: "REPLY"
    },
    {
        icon: UserRound,
        name: "Esthera Jackson",
        text: "Hi! I need more",
        reply: "REPLY"
    },
    {
        icon: UserRound,
        name: "Esthera Jackson",
        text: "Hi! I need more",
        reply: "REPLY"
    },
    {
        icon: UserRound,
        name: "Esthera Jackson",
        text: "Hi! I need more",
        reply: "REPLY"
    }, 
    
    
]

const ElementThree = (props: Props) => {
  return (
   <CardContainer className='pt-0 px-0 w-[65%]'>
    <h4 className='text-[#FAF9F8] bg-[#2B9AFF] rounded-tr-md rounded-tl-md py-4 pl-4 font-bold text-sm'>Chat Summary</h4>
    <div className='flex items-center gap-3 pl-4 mt-7'>
        <MessageCircleMore className='text-[#525150]'/>
        <p className='text-[#525150] text-sm font-bold'>Student Conversations</p>
    </div>
    <div className="px-5 h-[250px] pb-7 chat mr-5">
        {
            Data.map((item, i) => (
              <Chats 
                key={i}
                icon={item.icon}
                name={item.name}
                text={item.text}
                reply={item.reply}
              />  
            ))
        }
    </div>

   </CardContainer>
  )
}

export default ElementThree