import React from 'react'

type Props = {
    pastQuestion: number
}

const PastQuestionComponent = ({pastQuestion}: Props) => {
  return (
    <div>
       <p className='text-[#444444] text-xs mt-5'>{pastQuestion}</p> 
    </div>
  )
}

export default PastQuestionComponent