import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { PiCircleDashed } from "react-icons/pi";
function Chat() {
  return (
    <div className='w-[320px] bg-paper shadow-[0px_0px_2px_rgba(0,0,0,0.25)]'>
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-4xl font-bold tracking-wide'>Chats</h2>
          <Button variant={"outline"} className='w-[32px] h-[32px] p-2 rounded-full inline-flex items-center'>
            <PiCircleDashed size={16}/>
          </Button>
        </div>
        <div>
          <label htmlFor='search'>123</label>
          <Input id='search' className='pl-8' placeholder='Search'/>
        </div>
      </div>
    </div>
  )
}

export default Chat