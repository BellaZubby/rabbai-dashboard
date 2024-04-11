import React from 'react'
// import { useState } from 'react';
import { Progress } from './progress';

export type Props = {
    score: number;
}

const RatingProgress = ({score}: Props) => {
  
  return (
    <div className='flex justify-center items-center gap-2'>
            <Progress value={score}/>
            <span className={score >= 70 ? 'text-[#07CA9E] text-[10px] mb-2' : 'text-[#FF9C09] text-[10px] mb-2'}>{score}%</span>
    </div>
  )
}

export default RatingProgress