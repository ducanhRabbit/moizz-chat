
import React from 'react'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'

type OnlineDotProps ={
    isOnline:boolean
} & React.HTMLAttributes<HTMLDivElement>

function OnlineDot({isOnline , className,...props}:OnlineDotProps) {
  return (
    <>
        <Badge {...props} className={cn (`p-1 relative after:contents-[""]  after:border-[1px]  after:rounded-full after:absolute  after:h-full after:w-full after:top-0 after:left-0`,isOnline?"bg-success after:animate-ripple after:border-success":"bg-grey",className)}></Badge>
    </>
  )
}

export default OnlineDot