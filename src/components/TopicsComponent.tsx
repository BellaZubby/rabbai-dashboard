import React from 'react'

type Props = {
    topic: number
}

const TopicsComponent = ({topic}: Props) => {
  return (
    <div>
        <p className='text-[#444444] text-xs mt-5'>{topic}</p>
    </div>
  )
}

export default TopicsComponent