import ScoreBoard from '@/components/ScoreBoard'
import ScoreBoardPie from '@/components/ScoreBoardPie'
import CardContainer from '@/components/ui/CardContainer'
import ScoreBoardEnrolled from '@/components/ui/ScoreBoardEnrolled'
import React from 'react'

type Props = {}

const ElementFive = (props: Props) => {
  return (
    <CardContainer className='pt-0 px-0 bg-[#F9F8F6]'>
        <h4 className='bg-[#07CA9E] text-[#FAF9F8] text-xs font-bold rounded-tr-md rounded-tl-md pl-4 py-3'>Overall Summary</h4>
        <div className='flex items-center justify-center'>
          <ScoreBoard/>
          <ScoreBoardPie/>
        </div>
        
    </CardContainer>
  )
}

export default ElementFive