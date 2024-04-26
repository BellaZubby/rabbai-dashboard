import React from 'react'
import { MessageCircleMore, UserRound } from 'lucide-react'
import { ChatType } from '../shared/types'
import CardContainer from '@/components/ui/CardContainer'
import StudentChats from '@/components/studentChats'

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
        text: "Awesome work, can you change",
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

const StudentFeedback = (props: Props) => {
  return (
    <CardContainer className='pt-0 px-0 h-full border-none'>
    <h4 className='text-[#FAF9F8] bg-[#2B9AFF] rounded-tr-md rounded-tl-md py-4 pl-4 font-bold text-sm'>Student Feedback</h4>
    <div className='flex items-center gap-3 pl-4 mt-4'>
        <MessageCircleMore className='text-[#525150]'/>
        <p className='text-[#525150] text-sm font-bold'>Chat</p>
    </div>
    <div className="px-5 h-[420px] pb-7 chat mr-5">
        {
            Data.map((item, i) => (
              <StudentChats 
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

export default StudentFeedback