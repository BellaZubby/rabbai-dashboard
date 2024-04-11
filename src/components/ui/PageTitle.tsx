import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    title: string;
    name: string;
    className?: string;
}

const PageTitle = ({title, className, name}: Props) => {
  return (
    <div>
        <h6 className={cn("text-[#525150] text-sm", className)}>{title}</h6>
        <p className={cn("text-2xl font-semibold text-[#525150]")}>Welcome Back <span>{name}</span></p>
    </div>
  )
}

export default PageTitle