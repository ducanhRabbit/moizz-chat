import React from "react";
import { Divider } from "../ui/divider";
import { FiCornerDownRight, FiDownload } from "react-icons/fi";
import { BsCardImage, BsThreeDots } from "react-icons/bs";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const TextMsg = () => {
  return (
    <div className="flex flex-row justify-start">
      <div className="px-4 py-2 rounded-xl bg-primary text-primary-foreground">
        <div className="">Hello there</div>
      </div>
    </div>
  );
};

const LinkMsg = () => {
  return (
    <div className="flex flex-row justify-start">
      <div>
        <div className="p-2 rounded-2xl bg-primary/90 text-primary-foreground">
          <div className=" px-0 rounded-xl bg-secondary/60">
            <img
              className="max-h-[300px] rounded-t-[10px]"
              src="https://github.com/shadcn.png"
            ></img>
            <div className="font-bold p-2">Creating chat app</div>
          </div>
          <div>Yes, I can do that</div>
        </div>
      </div>
    </div>
  );
};

const ImgMsg = () => {
  return (
    <div className="flex flex-row justify-start">
      <div>
        <div className="p-2 rounded-2xl bg-primary">
          <img
            className="max-h-[300px] rounded-[10px]"
            src="https://github.com/shadcn.png"
          ></img>
          <div className="text-primary-foreground">Hello world!</div>
        </div>
      </div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div className=" relative py-4">
      <Divider className=" h-[1px] bg-secondary" />
      <div className="text-sm bg-primary rounded-full text-primary-foreground/90 px-2 py-[2px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 border-primary/60">
        12/08/2024
      </div>
    </div>
  );
};

const ReplyMsg = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex justify-start">
      <div className="p-2 rounded-2xl bg-[#edcc68]">
        <div className="p-1 bg-[#c2a757]/70 text-[#59491b]/80 rounded-md">
          Reply message
        </div>
        <div className="flex items-center gap-1">
          <FiCornerDownRight size={14} className="text-[#59491b]/60" />
          <div>Message</div>
        </div>
      </div>
    </div>
  );
};

const DocMsg = () => {
  return (
    <div className="flex justify-end items-center gap-1">
      <div className="p-2 rounded-2xl bg-[#edcc68]">
        <div className="p-2">
          <div className="p-2 flex gap-2 text-[#59491b] bg-[#c2a757]/70 justify-center items-center rounded-sm">
            <BsCardImage size={48}></BsCardImage>
            <div>Yes sure, here you go!</div>
            <div className="px-2 rounded-full">
              <FiDownload size={20} />
            </div>
          </div>
          <div className="">Yes sure, here you go!</div>
        </div>
      </div>
      <MessageOptions/>
    </div>
  );
};

const MessageOptions = () => {
    return (<>
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button className="w-fit h-fit px-2 rounded-full">
                <BsThreeDots size={16}/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="bottom">
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    Reply
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Reply
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    </>)
}

export { TextMsg, LinkMsg, ImgMsg, TimeLine, ReplyMsg, DocMsg, MessageOptions};
