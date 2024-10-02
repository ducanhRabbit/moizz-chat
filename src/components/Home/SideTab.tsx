import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import Chat from './Chat'
import Group from './Group'

function SideTab() {
  const {isOpen,content} = useAppSelector(state => state.sideTab)
  const renderContent = ()=>{
    if(content === 'chat'){
      return <Chat/>
    }else if(content === 'group'){
      return <Group/>
    }
    return <Chat/>
  }
  return (
    <div className="w-[320px] bg-paper shrink-0 grow-0 h-full shadow-[0px_0px_2px_rgba(0,0,0,0.25)] z-10">
      {renderContent()}
    </div>
  )
}

export default SideTab