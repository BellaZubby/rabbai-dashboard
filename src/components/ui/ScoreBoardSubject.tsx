import React from 'react'

type Props = {
    subject: string
}

const ScoreBoardSubject = ({subject}: Props) => {
  return (
    <div>
        <p className='text-xs text-[#444444] mt-3'>{subject}</p>
    </div>
  )
}

export default ScoreBoardSubject