"use client"
import CardContainer from '@/components/ui/CardContainer'
// import ProgressPieChart from '@/components/ui/ProgressPieChart'
import { Button } from '@/components/ui/button'
import React from 'react'
import SubjectRating from '@/components/ui/subjectRating';
import ProgressPieChart from '@/components/ui/ProgressPieChart';
import Line from '@/components/ui/Line';




type Props = {}



const SubjectUpload = (props: Props) => {
   
  return (
    <div className='w-[60%]'>
    <CardContainer className='shadow-none h-64'>
        <h4 className='text-[#525150] font-bold text-sm'>Subject Upload Overview</h4>
        <div className='flex py-3'>
            <ProgressPieChart/>
            <Line/>
            <SubjectRating/>
        </div>
           

        <Button className='shadow-none bg-[#0086FF] text-[#FDFDFC] text-sm font-bold w-full rounded-lg'>Create Subject</Button>

    </CardContainer>
    </div>
  )
}

export default SubjectUpload