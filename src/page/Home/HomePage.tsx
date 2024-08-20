import Chat from "@/components/Home/Chat"
import Conversation from "@/components/Home/Conversation"


function HomePage() {
  return (
    <div className='flex w-full  h-screen'>
        <Chat/>

        {/* Conversation */}
        <Conversation/>
    </div>
  )
}

export default HomePage