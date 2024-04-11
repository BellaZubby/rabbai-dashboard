"use client"

import React from 'react'
import { Nav } from './ui/nav'
import user from '@/assets/Image 4.png'
import {
    LayoutGrid,
    Award,
    FilePlus,
    FileText,
    FileQuestion,
    MessageCircleMore,
    UsersRound,
    Users,
    User,
    LogOut,
    MenuIcon
  } from "lucide-react"
import Image from 'next/image'

type Props = {}

const SideNavbar = (props: Props) => {
  return (
    <div className='pt-24 text-[#525150] px-5'>
        <div className='mb-7'>
            <Image src={user} alt='user' className='rounded-full'/>
            <p className='font-bold mt-2'>Mark John</p>
        </div>
        <div className='mb-7 flex gap-5'>
            <MenuIcon/>
            <p>Menu</p>
        </div>
        <div>
            <h6 className='font-bold'>Course Management</h6>
            <Nav
                isCollapsed={false}
                links={[
                {
                    title: "Dashboard",
                    href: "/",
                    icon: LayoutGrid,
                    variant: "default",
                },
                {
                    title: "Certification",
                    href: "/certification",
                    icon: Award,
                    variant: "ghost",
                },
                {
                    title: "Subjects",
                    href: "/subjects",
                    icon: FilePlus,
                    variant: "ghost",
                },
                {
                    title: "Topic",
                    href: "/topic",
                    icon: FileText,
                    variant: "ghost",
                },
                {
                    title: "Questions",
                    href: "/questions",
                    icon: FileQuestion,
                    variant: "ghost",
                },
                {
                    title: "Student Feedback",
                    href: "/studentfeedback",
                    icon: MessageCircleMore,
                    variant: "ghost",
                },
                {
                    title: "Enrolled",
                    href: "/enrolled",
                    icon: UsersRound,
                    variant: "ghost",
                },
             
            ]}
          />
          </div>
          
          <div>
            <h6 className='font-bold'>Profile Management</h6>
            <Nav
                isCollapsed={false}
                links={[
                {
                    title: "Profile",
                    href: "/profile",
                    icon: User,
                    variant: "ghost",
                },
                {
                    title: "Sign up/Log in",
                    href: "/signup",
                    icon: Users,
                    variant: "ghost",
                },
                {
                    title: "Logout",
                    href: "/logout",
                    icon: LogOut,
                    variant: "ghost",
                },
             
            ]}
          />
        </div>
    </div>
  )
}

export default SideNavbar