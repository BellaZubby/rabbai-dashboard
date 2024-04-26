import React from 'react'
import ProfileNavbar from './profileNavbar'
import ProfileSideNavbar from './profileSideNav'

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <div className='mt-5 flex gap-5 min-h-screen w-full'>
        <ProfileSideNavbar/>
        <ProfileNavbar/>
    </div>
  )
}

export default ProfilePage