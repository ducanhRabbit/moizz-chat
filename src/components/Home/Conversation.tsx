
import BodyConversation from './BodyConversation'
import FooterConversation from './FooterConversation'
import HeaderConversation from './HeaderConversation'

function Conversation() {
  return (
    <div className='flex-1 min-w-0 flex flex-col h-full overflow-hidden'>
        <HeaderConversation/>
        <BodyConversation/>
        <FooterConversation/>
    </div>
  )
}

export default Conversation