import React from 'react'

type Props = {
    question: number
}

const ScoreBoardQuestion = ({question}: Props) => {
  return (
    <div>
        <p className='text-xs text-[#444444] mt-3'>{question}</p>
    </div>
  )
}

export default ScoreBoardQuestion