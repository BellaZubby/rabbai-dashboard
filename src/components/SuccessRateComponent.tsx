import React from 'react'

type Props = {
    rate: number
}

const SuccessRateComponent = ({rate}: Props) => {
  return (
    <div>
        <p className='text-[#444444] text-xs mt-5'>{rate}</p>
    </div>
  )
}

export default SuccessRateComponent