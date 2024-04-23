import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

const ParentContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
    {...props} 
    className={cn(
        "border border-[#C9C9C9] rounded-lg w-full h-[100%] pb-7",
        props.className
    )}></div>
  )
}

export default ParentContainer