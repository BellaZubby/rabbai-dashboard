import React from 'react'
import PageTitle from '@/components/ui/PageTitle'
import SubjectUpload from './elementOne'
import SubjectSummary from './ElementTwo'
import ElementThree from './ElementThree'
import ElementFour from './ElementFour'
import ElementFive from './ElementFive'

type Props = {
    
}

const Dashboard = (props: Props) => {
  return (
    <div className='flex flex-col gap-5 w-full'>
       <PageTitle title='Dashboard' name='Mark'/>
       <div className='border border-[#C9C9C9] rounded-lg w-full h-auto pb-7'>
        <div className='w-[95%] mx-auto mt-5'>
        {/* first column */}

        <div className='grid grid-cols-2 gap-4'>
          <SubjectUpload/>
          <SubjectSummary/>
        </div>
        {/* second col */}
        <div className='flex gap-4 mt-4'>
          <ElementThree/>
          <ElementFour/>
        </div>

        {/* third col */}
        <div className='grid grid-cols-1 mt-4'>
          <ElementFive/>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Dashboard