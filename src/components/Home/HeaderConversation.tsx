import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import OnlineDot from '../common/OnlineDot'
import { Divider } from '../ui/divider'
import { Button } from '../ui/button'
import { PiVideoCamera } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '../ui/dropdown-menu'
function HeaderConversation() {
  return (
    <div className='flex justify-between items-center p-4 shadow-[2px_0px_2px_rgba(0,0,0,0.25)] z-10'>
        {/* Left */}
        <div className='user flex items-center gap-2'>
            <div className='avatar relative'>
                <Avatar>
                <AvatarImage sizes="40px" src="https://github.com/shadcn.png" />
                </Avatar>
                <OnlineDot className="absolute -bottom-[2px] right-[2px] border-2 border-white" isOnline={true}/>
            </div>
            <div className=''>
                <div className='font-bold'>Jonathan</div>
                <div className='online-state'>Online</div>

            </div>
        </div>
        {/* Right */}
        <div className='options flex gap-2'>
            <Button className='px-2 py-2 rounded-full border-none' variant={'outline'}>
                <PiVideoCamera size={20}/>
            </Button>
            <Button className='px-2 py-2 rounded-full border-none' variant={'outline'}>
                <BsTelephone size={20}/>
            </Button>
            <Button className='px-2 py-2 rounded-full border-none' variant={'outline'}>
                <FiSearch size={20}/>
            </Button>
            <Divider className='w-[2px]' variant={"vertical"}/>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='px-2 py-2 rounded-full border-none' variant={'outline'}>
                        <FaChevronDown size={20}/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Users
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    </div>
  )
}

export default HeaderConversation