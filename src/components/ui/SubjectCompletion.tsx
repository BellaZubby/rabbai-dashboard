import React from 'react'

type Props = {
    subject: string
}

const SubjectCompletion = ({subject}: Props) => {
  return (
    <div className='mb-2'>
        <p className='text-xs text-[#525150]'>{subject}</p>
    </div>
  )
}

export default SubjectCompletion