import { OverallDetailType, headerType } from '@/app/shared/types'
import React from 'react'
type Props = {}


const Header:Array<headerType> = [
  {
    header: 'Subject'
  },
  {
    header: 'Topic'
  },
  {
    header: 'Question'
  },
  {
    header: 'Sign in'
  },
  {
    header: 'Enrolled'
  },
  {
    header: 'Success Rate'
  },
  {
    header: 'Enrolled'
  },

]

const OverallDetails: Array<OverallDetailType> =[
  {
    subject: 'Mathematics',
    topic: 5,
    question: 5,
    signIn: 5,
    enrolled: 5,
    successRate: 5,
  },
  {
    subject: 'English',
    topic: 9,
    question: 9,
    signIn: 9,
    enrolled: 9,
    successRate: 9,
  },
  {
    subject: 'Physics',
    topic: 10,
    question: 10,
    signIn: 10,
    enrolled: 10,
    successRate: 10,
  },
  {
    subject: 'Chemistry',
    topic: 8,
    question: 8,
    signIn: 8,
    enrolled: 8,
    successRate: 8,
  },
]



const ScoreBoard = (props: Props) => {
  return (

    <div>
 <table className=''>
            <thead>
            <tr className='text-[#444444] text-xs font-bold'>
              {
                Header.map((d, i) => (
                  <th key={i} className='p-[14px]'>{d.header}</th>
                 
                ))
              }
              </tr>
            </thead>
            <tbody className='text-xs text-[#444444]'>

              {
                OverallDetails.map((d, i) => (
                  <tr key={i}>
                      <td className='pl-7 py-3'>
                      {d.subject}
                    </td>

                  
                  <td className='text-center py-3'>{d.topic}</td>
                  <td className='text-center py-3'>{d.question}</td>
                  <td className='text-center py-3'>{d.signIn}</td>
                  <td className='text-center py-3'>{d.enrolled}</td>
                  <td className='text-center py-3'>{d.successRate}</td>
                  <td className='text-center py-3'>{d.enrolled}</td>
                </tr>
                ))
              }
               
                </tbody>
                </table>
    </div>
    
  )
}

export default ScoreBoard