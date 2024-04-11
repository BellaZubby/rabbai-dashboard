import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

const CardContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
    {...props} 
    className={cn(
        "rounded-lg border border-[#CDCBC9] p-5 shadow",
        props.className
    )}></div>
  )
}

export default CardContainer