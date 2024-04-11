import React from 'react'

type Props = {
    subject: string
}

const SubjectsComponent = ({subject}: Props) => {
  return (
    <div>
        <p className='mt-5 text-xs text-[#444444]'>{subject}</p>
    </div>
  )
}

export default SubjectsComponent