"use client"

// import { Calendar } from '@/components/ui/calendar'
// import CardContainer from '@/components/ui/CardContainer'
import React, { useState } from 'react'
import Select from 'react-select'
import {format} from 'date-fns';
import { DateFormatter, DayPicker} from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
import './day-picker.css'

type Props = {}

const ElementFour = (props: Props) => {
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  // rendering my date
  const current = new Date();
  const date = `${current.toLocaleString("en-US", {month: "short"})}. ${current.getDate()}, ${current.getFullYear()}.`;
  const [value, setValue] = useState(null);
  const options = [
    {value:"TOPIC BASED TEST", label: "Topic Based Test"},
    {value:"SCIENCE BASED TEST", label: "Science Based Test"},
    {value:"CoOMPUTER BASED TEST", label: "Computer Based Test"}
  ]

  const formatWeekdayName: DateFormatter = (date, options) => (
    <>
      {format(new Date(date), 'EEE', {locale: options?.locale})}
    </>
  )
  return (
    <div className='w-[35%]'>
        <div className='bg-[#07CA9E] flex items-center justify-center rounded-md gap-6 py-2'>
        <div className='text-[#FAF9F8] font-bold'>
          <h5 className='text-lg' >Schedule Test</h5>
          {/* <p className='text-sm'>Date Picked.</p> */}
          {
            selectedDate ? <p className='text-sm'>{format(selectedDate, 'PP')}</p> : <p className='text-sm'>{date}</p>
          }
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
      <div className='w-full border-[1.5px] border-[#CDCBC9] mt-3 rounded-md'>
        {/* <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border-[1.5px] mt-3 border-[#CDCBC9] w-[100%]"
        /> */}
        <DayPicker
          className='flex items-center justify-center'
          mode='single'
          selected={selectedDate}
          onSelect= {setSelectedDate}
          showOutsideDays
          fixedWeeks
          styles={{
            caption_label: {color: '#525150', fontSize: '14px'},
            head_cell: {color: '#525150', fontSize: '12px', textTransform:'revert'},
          }}
          formatters={{formatWeekdayName}}
        />
      </div>
    </div>
  )
}

export default ElementFour