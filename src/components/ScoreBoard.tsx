import { ScoreboardEnrolledType, ScoreboardQuestionType, ScoreboardSigninType, ScoreboardSubjectType, ScoreboardSuccessRateType, ScoreboardTopicType } from '@/app/shared/types'
import React from 'react'
import ScoreBoardSubject from './ui/ScoreBoardSubject'
import ScoreBoardTopic from './ui/ScoreBoardTopic'
import ScoreBoardQuestion from './ui/ScoreBoardQuestion'
import ScoreBoardSign from './ui/ScoreBoardSign'
import ScoreBoardEnrolled from './ui/ScoreBoardEnrolled'
import ScoreBoardSuccess from './ui/ScoreBoardSuccess'
import ScoreBoardPie from './ScoreBoardPie'

type Props = {}

const SubjectData: Array<ScoreboardSubjectType> = [
    {
      subject: 'Mathematics'  
    },
    {
      subject: 'English'  
    },
    {
      subject: 'Physics'  
    },
    {
      subject: 'Chemistry'  
    },
]

const TopicData: Array<ScoreboardTopicType> = [
  {
    topic: 5 
  },
  {
    topic: 9  
  },
  {
    topic: 10 
  },
  {
    topic: 8 
  },
]

const QuestionData: Array<ScoreboardQuestionType> = [
  {
    question: 5  
  },
  {
    question: 9  
  },
  {
    question: 10  
  },
  {
    question: 8  
  },
]

const SignData: Array<ScoreboardSigninType> = [
  {
    sign: 5  
  },
  {
    sign: 9 
  },
  {
    sign: 10  
  },
  {
    sign: 8  
  },
]

const EnrolledData: Array<ScoreboardEnrolledType> = [
  {
    enrolled: 5 
  },
  {
    enrolled: 9 
  },
  {
    enrolled: 10 
  },
  {
    enrolled: 8  
  },
]

const RateData: Array<ScoreboardSuccessRateType> = [
  {
    rate: 5
  },
  {
    rate: 9  
  },
  {
    rate: 10 
  },
  {
    rate: 8 
  },
]




const ScoreBoard = (props: Props) => {
  return (
    <div className='flex gap-12 py-3 pl-3'>
      <div>
        <h4 className='text-[#444444] text-xs font-bold'>Subject</h4>
        {
          SubjectData.map((d, i) => (
            <ScoreBoardSubject key={i} subject={d.subject}/>
          ))
        }
      </div>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex flex-col items-center'>
        <h4 className='text-[#444444] text-xs font-bold'>Topic</h4>
        {
          TopicData.map((d, i) => (
            <ScoreBoardTopic key={i} topic={d.topic}/>
          ))
        }
        </div>
        <div className='flex flex-col items-center'>
        <h4 className='text-[#444444] text-xs font-bold'>Questions</h4>
        {
          QuestionData.map((d, i) => (
            <ScoreBoardQuestion key={i} question={d.question}/>
          ))
        }
        </div>
        <div className='flex flex-col items-center'>
        <h4 className='text-[#444444] text-xs font-bold'>Sign in</h4>
        {
          SignData.map((d, i) => (
            <ScoreBoardSign key={i} sign={d.sign}/>
          ))
        }
        </div>
        <div className='flex flex-col items-center'>
        <h4 className='text-[#444444] text-xs font-bold'>Enrolled</h4>
        {
          EnrolledData.map((d, i) => (
            <ScoreBoardEnrolled key={i} enrolled={d.enrolled}/>
          ))
        }
        </div>
        <div className='flex flex-col items-center'>
        <h4 className='text-[#444444] text-xs font-bold'>Success Rate</h4>
        {
          RateData.map((d, i) => (
            <ScoreBoardSuccess key={i} rate={d.rate}/>
          ))
        }
        </div>
        <div className='flex flex-col items-center'>
          <h4 className='text-[#444444] text-xs font-bold'>Enrolled</h4>
          {
            EnrolledData.map((d, i) => (
            <ScoreBoardEnrolled key={i} enrolled={d.enrolled}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard