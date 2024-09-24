import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { GoGear } from "react-icons/go";
import { Nav_Buttons, Nav_Setting } from "@/data/data";
import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "@/api/queries";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { switchTab, toggleOpen } from "@/redux/slices/sideTabReducer";
import { useTheme } from "@/custom/hooks/useTheme";

function SideNav() {
  const {data:currentUser} = useGetCurrentUser()
  console.log(currentUser)
  const {theme} = useTheme()
  console.log(theme)
  const dispatch = useAppDispatch();
  const { isOpen, content } = useAppSelector((state) => state.sideTab);
  const handleNav = (btn) => {
    const isActive = content === btn.name;
    if(!isOpen){
      sessionStorage.setItem("currentTab", btn.name);
      dispatch(toggleOpen())
      dispatch(switchTab(btn.name));
    }else{
      if (isActive) {
        dispatch(toggleOpen());
      }else{
        sessionStorage.setItem("currentTab", btn.name);
        dispatch(switchTab(btn.name));
      }
    }
  };

  return (
    <div className="w-[100px] shrink-0 p-2 bg-primary h-full overflow-hidden flex flex-col justify-between">
      <div className="flex flex-col items-center gap-4">
        <div className="logo">
          <img className="object-cover" src="./src/assets/img/logo.png" />
        </div>
        <div className="navigation flex flex-col gap-2">
          {Nav_Buttons.map((btn, index) => {
            const isActive = content === btn.name;
            return (
              <div key={index}>
                <Button
                  Icon={btn.icon}
                  iconSize={24}
                  placement="left"
                  className={`p-4 rounded-xl ${
                    isOpen && isActive ? "" : "hover:bg-secondary/20"
                  } `}
                  variant={isOpen && isActive ? "secondary" : "default"}
                  onClick={() => {
                    handleNav(btn);
                  }}
                ></Button>
              </div>
            );
          })}
          <div className="divider w-full bg-background h-[2px] rounded-full"></div>
          {Nav_Setting.map((btn, index) => {
            const isActive = content === btn.name;
            return (
              <div key={index}>
                <Button
                  Icon={btn.icon}
                  iconSize={24}
                  placement="left"
                  className={`p-4 rounded-xl ${
                    isOpen && isActive ? "" : "hover:bg-secondary/20"
                  } `}
                  variant={isOpen && isActive ? "secondary" : "default"}
                  onClick={() => {
                    handleNav(btn);
                  }}
                ></Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="dark-mode">
          <Switch />
        </div>
        <div className="ava-menu">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
