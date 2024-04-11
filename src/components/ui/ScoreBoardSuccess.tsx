import React from 'react'

type Props = {
    rate: number
}

const ScoreBoardSuccess = ({rate}: Props) => {
  return (
    <div>
        <p className='text-xs text-[#444444] mt-3'>{rate}</p>
    </div>
  )
}

export default ScoreBoardSuccess