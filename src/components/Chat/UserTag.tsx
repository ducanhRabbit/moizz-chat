import React from "react";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

function UserTag() {
  return (
    <div className="p-4 bg-white flex items-center rounded-lg shadow-[1px_5px_10px_-5px_rgba(0,0,0,0.25)]">
      {/* left */}
      <div className="flex items-center gap-2">
        <div className="avatar">
          <Avatar>
            <AvatarImage sizes="40px" src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
        <div className="flex flex-col gap-1">
          <div className="name text-sm font-bold">Ahua</div>
          <div className="message line-clamp-1 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elitste, quia
            repellat modi
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-2">
        <div className="time text-xs font-bold">10:35</div>
        <div className="unread-count text-xs rounded-full   flex items-center justify-end font-bold text-primary-foreground">
          <p className="bg-destructive/90 px-1 rounded-full flex justify-center items-center min-w-4 min-h-4">1</p>
        </div>
      </div>
    </div>
  );
}

export default UserTag;
