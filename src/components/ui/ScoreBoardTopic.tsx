import React from 'react'

type Props = {
    topic: number
}

const ScoreBoardTopic = ({topic}: Props) => {
  return (
    <div>
        <p className='text-xs text-[#444444] mt-3'>{topic}</p>
    </div>
  )
}

export default ScoreBoardTopic