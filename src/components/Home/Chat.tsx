import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PiCircleDashed } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineArchive } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import UserTag from "@/components/Chat/UserTag";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  useGetFriendsRequestQuery,
  useGetUserFriendsQuery,
} from "@/api/queries";
import { socket } from "@/socket";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Request from "./Request";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateFriendRequest } from "@/redux/slices/friendRequestReducer";
import { Avatar, AvatarImage } from "../ui/avatar";
function Chat() {
  const { data: requestData, isFetching } = useGetFriendsRequestQuery();
  const dispatch = useAppDispatch();
  const { requests } = useAppSelector((state) => state.friendRequest);
  console.log("rerender");
  useEffect(() => {
    console.log(requestData);
    if (requestData) {
      dispatch(updateFriendRequest(requestData.data));
    }
  }, [requestData, dispatch]);
  return (
    <div className="w-[320px] bg-paper shrink-0 grow-0 h-full shadow-[0px_0px_2px_rgba(0,0,0,0.25)] z-10">
      <div className="flex flex-col gap-4 p-6 h-full overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold tracking-wide">Chats</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={"outline"}
                className="w-[32px] h-[32px] p-2 rounded-full inline-flex items-center"
              >
                <BsChatDots size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent className="[&_.close-btn]:hidden">
              <DialogTitle className="hidden">Friends</DialogTitle>
              <DialogDescription className="hidden">
                Add friend and request
              </DialogDescription>
              <Tabs defaultValue="friends">
                <TabsList className="w-full flex">
                  <TabsTrigger className="w-1/2" value="friends">
                    Explore
                  </TabsTrigger>
                  <TabsTrigger className="flex-1" value="request">
                    Request
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="friends">
                  <div className="Search"></div>
                  <div className="explore-list max-h-[280px] overflow-auto pr-2">
                    <div className="flex justify-between items-center min-h-9 py-2">
                      <div className="flex gap-2 items-center">
                        <Avatar className="">
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div className="font-bold">Anh Le</div>
                      </div>
                      <div>
                        <Button className="min-w-[68px]">Add</Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center min-h-9 py-2">
                      <div className="flex gap-2 items-center">
                        <Avatar className="">
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div className="font-bold">Anh Le</div>
                      </div>
                      <div>
                        <Button className="min-w-[68px]">Add</Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center min-h-9 py-2">
                      <div className="flex gap-2 items-center">
                        <Avatar className="">
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div className="font-bold">Anh Le</div>
                      </div>
                      <div>
                        <Button className="min-w-[68px]">Add</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="request">
                  {/* <div className="flex justify-between items-center">
                    <div>Jason</div>
                    <div className="">
                      <Button
                        onClick={() => {
                          socket?.emit(
                            "friendRequest",
                            {
                              from: "66f500d157410add7803ec4b",
                              to: "66f507dc57410add7803ec8f",
                            },
                          );
                        }}
                      >
                        add friend
                      </Button>
                    </div>
                  </div> */}
                  {requests?.map((req, index) => {
                    return (
                      <div key={index}>
                        <Request request={req} />
                      </div>
                    );
                  })}
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
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
