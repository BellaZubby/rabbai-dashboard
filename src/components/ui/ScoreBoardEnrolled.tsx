import React from 'react'

type Props = {
    enrolled: number
   
}

const ScoreBoardEnrolled = ({enrolled}: Props) => {
  return (
    <div className='flex items-center gap-16 mt-3'>
       <p className='text-xs text-[#444444]'>{enrolled}</p> 
    </div>
  )
}

export default ScoreBoardEnrolled