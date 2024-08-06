import React from 'react'
import { Badge } from '../ui/badge'

type OnlineDotProps ={
    isOnline:boolean
}

function OnlineDot({isOnline}) {
  return (
    <div>
        <Badge className='p-1 relative after:contents-[""] bg-success after:border-[1px] after:border-success after:rounded-full after:absolute after:animate-ripple after:h-full after:w-full after:top-0 after:left-0 '></Badge>
    </div>
  )
}

export default OnlineDot