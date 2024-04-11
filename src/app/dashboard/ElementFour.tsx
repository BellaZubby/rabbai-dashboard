"use client"

import { Calendar } from '@/components/ui/calendar'
// import CardContainer from '@/components/ui/CardContainer'
import React, { useState } from 'react'
import Select from 'react-select'
useState

type Props = {}

const ElementFour = (props: Props) => {
  
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [value, setValue] = useState(null);
  const options = [
    {value:"TOPIC BASED TEST", label: "Topic Based Test"},
    {value:"SCIENCE BASED TEST", label: "Science Based Test"},
    {value:"CoOMPUTER BASED TEST", label: "Computer Based Test"}
  ]
  return (
    <div className='w-[35%]'>
        <div  className='bg-[#07CA9E] flex items-center justify-center rounded-md gap-6 py-2'>
        <div className='text-[#FAF9F8] font-bold'>
          <h5 className='text-lg' >Schedule Test</h5>
          <p className='text-sm'>Date Picked</p>
        </div>
        <div className='w-[50%]'>
          <Select

            options={options}
            defaultValue={value}
            onChange={() => setValue}
            placeholder="Select Test"
            isSearchable

            styles={{
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: 12,
                color: "#C9C9C9"
              }),
              dropdownIndicator : (baseStyles) => ({
                ...baseStyles,
                color: "#A4A3A1",
                backgroundColor: "FAF9F8"
              }),
              container: (baseStyles) => ({
                ...baseStyles,
                borderColor: "transparent"
              }),
              option: (baseStyles) => ({
                ...baseStyles,
                color: "#525150",
                fontSize: 10,
                fontWeight: 700,
                backgroundColor: "transparent"
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                borderColor: "transparent",
                backgroundColor: "FAF9F8"
              }),
              singleValue: (baseStyles) => ({
                ...baseStyles,
                color: "#525150",
                fontSize: 14,
                fontWeight: 700
              })
            }}
          />
        </div>
      </div>
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border-[1.5px] mt-3 border-[#CDCBC9] w-[100%]"
        />
      </div>
    </div>
  )
}

export default ElementFour