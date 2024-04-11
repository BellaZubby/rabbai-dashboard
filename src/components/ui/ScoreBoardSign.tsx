import React from 'react'

type Props = {
    sign: number
}

const ScoreBoardSign = ({sign}: Props) => {
  return (
    <div>
        <p className='text-xs text-[#444444] mt-3'>{sign}</p>
    </div>
  )
}

export default ScoreBoardSign