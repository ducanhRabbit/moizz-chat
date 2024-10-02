import React, { useState } from "react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { GoCheckCircleFill } from "react-icons/go";
import { IoCloseCircle } from "react-icons/io5";
import {
  acceptRequest,
  denyRequest,
} from "@/redux/slices/friendRequestReducer";
import { socket } from "@/socket";
import { Avatar, AvatarImage } from "../ui/avatar";

function Request({ request }) {
  const dispatch = useAppDispatch();
  if (request.state === "accepted") {
    return (
      <>
        <div className="flex justify-between items-center min-h-9 py-2">
          <div className="flex gap-2 items-center">
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col justify-center">
              <div className="font-bold">{request.sender.username} </div>
              <div className="text-xs text-success">Request accepted</div>
            </div>
          </div>
          <div>
            <GoCheckCircleFill className="text-success" size={24} />
          </div>
        </div>
      </>
    );
  }
  if (request.state === "remove") {
    return (
      <>
        <div className="flex justify-between items-center min-h-9 py-2">
          <div className="flex gap-2 items-center">
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col justify-center">
              <div className="font-bold">{request.sender.username} </div>
              <div className="text-xs text-destructive">Request removed</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex justify-between items-center  py-2">
        <div className="flex gap-2 items-center">
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="flex flex-col justify-center">
            <div className="font-bold">{request.sender.username} </div>
            <div className="text-xs text-muted-foreground">Sent you a friend request</div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              //   socket?.emit("acceptFriendRequest", {
              //     requestId: request._id,
              //   });
              dispatch(acceptRequest({ id: request._id }));
            }}
          >
            Accept
          </Button>
          <Button
          variant={"ghost"}
            onClick={() => {
              // socket?.emit("acceptFriendRequest", {
              //   requestId: req._id,
              // });
              dispatch(denyRequest({ id: request._id }));
            }}
          >
            Remove
          </Button>
        </div>
      </div>
    </>
  );
}

export default Request;
