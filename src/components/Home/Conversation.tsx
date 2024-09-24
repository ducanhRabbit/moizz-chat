
import { useQueryClient } from '@tanstack/react-query'
import BodyConversation from './BodyConversation'
import FooterConversation from './FooterConversation'
import HeaderConversation from './HeaderConversation'
import { QUERY_USER_KEY } from '@/constant/queries/query.constant'
import { useEffect } from 'react'
import { useGetCurrentUser } from '@/api/queries'

function Conversation() {
  const currentUser = useGetCurrentUser()
  console.log(currentUser.data)
  return (
    <div className='flex-1 min-w-0 flex flex-col h-full overflow-hidden'>
        <HeaderConversation/>
        <BodyConversation/>
        <FooterConversation/>
    </div>
  )
}

export default Conversation