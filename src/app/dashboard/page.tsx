import React from 'react'
import PageTitle from '@/components/ui/PageTitle'
import SubjectUpload from './elementOne'
import SubjectSummary from './ElementTwo'
import ElementThree from './ElementThree'
import ElementFour from './ElementFour'
import ElementFive from './ElementFive'
import ParentContainer from '@/components/ui/parentContainer'

type Props = {
    
}

const Dashboard = (props: Props) => {
  return (
    <div className='flex flex-col gap-5 w-full'>
       <PageTitle title='Dashboard' name='Mark'/>
       <ParentContainer>
        <div className='w-[95%] mx-auto mt-5'>
        {/* first column */}

        <div className='flex gap-4'>
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
       </ParentContainer>
    </div>
  )
}

export default Dashboard