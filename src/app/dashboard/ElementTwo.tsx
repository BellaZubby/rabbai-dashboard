import CardContainer from '@/components/ui/CardContainer'
import React from 'react'
import { PastQuestionType, SubjectType, SuccessRateType, TopicType } from '../shared/types'
import SubjectsComponent from '@/components/SubjectComponent'
import TopicsComponent from '@/components/TopicsComponent'
import PastQuestionComponent from '@/components/PastQuestionComponent'
import SuccessRateComponent from '@/components/SuccessRateComponent'
type Props = {}

const Subjects: Array<SubjectType> = [
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
  }
]

const Topics: Array<TopicType> = [
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

const PastQuestions: Array<PastQuestionType> = [
  {
    pastQuestion: 5
  },
  {
    pastQuestion: 9
  },
  {
    pastQuestion: 10
  },
  {
    pastQuestion: 8
  },
]

const SuccessRates: Array<SuccessRateType> = [
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

const SubjectSummary = (props: Props) => {
  return (
    <div>
        <CardContainer className='border-none pt-0 px-0 w-[100%] bg-[#FDFDFC] h-64'>
            <h4 className='w-full bg-[#07CA9E] text-[#FAF9F8] rounded-tl-md rounded-tr-md py-5 text-xs font-bold pl-4'>Subject Summary</h4>
            <div className='flex items-center justify-center gap-16 w-[90%] mx-auto mt-5'>
             <div>
             <h6 className='text-[#444444] text-xs font-bold'>Subject</h6>
              {
                Subjects.map((subject, i) => (
                  <SubjectsComponent key ={i} subject ={subject.subject}/>
                ))
              }
              </div>
              <div className='flex items-center gap-9'>
                <div className='flex flex-col items-center justify-center'>
                  <h6 className='text-[#444444] text-xs font-bold'>Topic</h6>
                  {
                    Topics.map((topic, i) => (
                      <TopicsComponent key={i} topic={topic.topic}/>
                    ))
                  }
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h6 className='text-[#444444] text-xs font-bold'>Past Question</h6>
                  {
                    PastQuestions.map((item,i) => (
                      <PastQuestionComponent key={i} pastQuestion={item.pastQuestion}/>
                    ))
                  }
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h6 className='text-[#444444] text-xs font-bold'>Success Rate</h6>
                  {
                    SuccessRates.map((item, i) => (
                      <SuccessRateComponent key={i} rate ={item.rate}/>
                    ))
                  }
                </div>
              </div>
            </div>

        </CardContainer>
    </div>
  )
}

export default SubjectSummary