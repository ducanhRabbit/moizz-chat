import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PiCircleDashed } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineArchive } from "react-icons/md";
import UserTag from "@/components/Chat/UserTag";
function Chat() {
  return (
    <div className="w-[320px] bg-paper h-screen shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col gap-4 p-6 h-screen">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold tracking-wide">Chats</h2>
          <Button
            variant={"outline"}
            className="w-[32px] h-[32px] p-2 rounded-full inline-flex items-center"
          >
            <PiCircleDashed size={16} />
          </Button>
        </div>
        <div className="relative">
          <label
            className="absolute top-1/2 left-2 -translate-y-1/2"
            htmlFor="search"
          >
            <FiSearch size={20} />
          </label>
          <Input
            id="search"
            className="pl-8 rounded-full focus-visible:outline-primary/80"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineArchive size={24} />
          <Button
            className="border-none active:bg-primary/30"
            variant="outline"
          >
            Archived
          </Button>
        </div>
        <div className="divider w-full h-[1px] rounded-full bg-black/10"></div>
        <div className="flex-1 overflow-auto pr-2">
          <div className="mb-4">
            
          <h5 className="text-sm mb-2">Pinned</h5>
          <div className="flex flex-col gap-4">
            {/* Chat tag */}

            <UserTag />
            <UserTag />
          </div>
          </div>
          <div>
            <h5 className="text-sm mb-2">All chats</h5>
            <div className="flex flex-col gap-4">
              {/* Chat tag */}

              <UserTag />
              <UserTag />
              <UserTag />
              <UserTag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
