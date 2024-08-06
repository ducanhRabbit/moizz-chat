import React from 'react'
import Chat from './Chat'
import Conversation from './Conversation'

function HomePage() {
  return (
    <div className='flex w-full'>
        <Chat/>

        {/* Conversation */}
        <Conversation/>
    </div>
  )
}

export default HomePage