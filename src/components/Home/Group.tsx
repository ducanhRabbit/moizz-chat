import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PiCircleDashed } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineArchive } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import UserTag from "@/components/Chat/UserTag";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_USER_KEY } from "@/constant/queries/query.constant";
import { useGetCurrentUser } from "@/api/queries";
function Group() {
  return (
    <div className="w-[320px] bg-paper shrink-0 grow-0 h-full shadow-[0px_0px_2px_rgba(0,0,0,0.25)] z-10">
      <div className="flex flex-col gap-4 p-6 h-full overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold tracking-wide">Group</h2>
          <Button
            variant={"outline"}
            className="w-[32px] h-[32px] p-2 rounded-full inline-flex items-center"
          >
            <BsChatDots size={16} />
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
        <div className="flex-1 overflow-auto pr-2 pb-2">
          <div className="mb-4">
            
          <h5 className="text-sm mb-2">Pinned</h5>
          <div className="flex flex-col gap-4">
            {/* Chat tag */}
          </div>
          </div>
          <div>
            <h5 className="text-sm mb-2">All chats</h5>
            <div className="flex flex-col gap-4">
              {/* Chat tag */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
