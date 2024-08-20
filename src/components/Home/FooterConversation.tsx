import Tiptap from "@/tiptapEditor/TipTap";
import { FiPlusCircle } from "react-icons/fi";
import { BsEmojiSmile,BsSend } from "react-icons/bs";
import { Button } from "../ui/button";

function FooterConversation() {
  return (
    <div className="p-4 flex items-start gap-2 shadow-[2px_0px_2px_rgba(0,0,0,0.25)]">
      <div className="flex bg-grey-100 items-start flex-1 w-0 rounded-xl relative">
        <div className="p-3 hover:cursor-pointer">
          <FiPlusCircle size={24} />
        </div>
        <div className="flex-1 w-0 ">
          <Tiptap />
        </div>
        <div className="p-3">
          <BsEmojiSmile size={24}/>
        </div>
      </div>
      <div>
        <Button className="py-3 px-3 rounded-xl" variant={"secondary"}>
        <BsSend size={24}/>
        </Button>
      </div>
    </div>
  );
}

export default FooterConversation;
