import React from 'react'
import {headerType, ratingType } from '@/app/shared/types';
import { Progress } from './progress';


const Header: Array<headerType> = [
  {
    header: 'Subject'

  },
  {
    header: 'Completion'
  }
]
const Scores: Array<ratingType> = [
  {
    subject: 'Mathematics',
    score: 80
  },
  {
    subject: 'English',
    score: 60
  },
  {
    subject: 'Physics',
    score: 70
  },
  {
    subject: 'Chemistry',
    score: 70
  },
]
const SubjectRating = () => {
  return (

    <div>
      <table className='text-[#525150]'>
        <thead>
          <tr className='text-sm'>
            {
              Header.map((d, i) => (
                <th key={i} className='pl-7 pr-10 pb-3'>{d.header}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className=''>
            {
              Scores.map((d, i) => (
                <tr key={i} className='text-xs'>
                  <td className='pl-7 py-1'>{d.subject}</td>
                  <td className='px-6'>
                    <span className='flex items-center justify-center gap-3'>
                      <Progress value={d.score}/>
                      <span className={d.score >= 70 ? 'text-[#07CA9E] text-[10px] mb-2' : 'text-[#FF9C09] text-[10px] mb-2'}>{d.score}%</span>
                    </span>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default SubjectRating;