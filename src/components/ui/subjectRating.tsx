import React from 'react'
import { SubjectsType, ScoreType } from '@/app/shared/types';
import RatingProgress from './RatingProgress';
import SubjectCompletion from './SubjectCompletion';



const Data: Array<SubjectsType> = [
  {
      subject: "Mathematics",
  },
  {
      subject: "English",
  },
  {
      subject: "Physics",
  },
  {
      subject: "Chemistry",
  }
]

const Score: Array<ScoreType> = [
  {
    score: 80
  },
  {
    score: 60
  },
  {
    score: 70
  },
  {
    score: 70
  },
]

const SubjectRating = () => {
  return (
    <section className='w-[50%] px-2'>
      <div className='flex items-center gap-16'>
        <div>
          <h5 className='text-[#525150] text-sm font-bold mb-5'>Subject</h5>
        {
          Data.map((item, i) => (
            <SubjectCompletion key={i} subject={item.subject}/>
          ))
        }
      </div>
    <div className=''>
      <h5 className='text-[#525150] text-sm font-bold mb-5'>Completion</h5>
       {
          Score.map((item, i) => (
            <RatingProgress
              key={i}
              score={item.score}
            />
          ))
       }
    </div>
    </div>
    </section>
  )
}

export default SubjectRating;