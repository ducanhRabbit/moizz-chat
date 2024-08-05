import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { GoGear } from "react-icons/go";
import { Nav_Buttons } from "@/data/data";
import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const [tabSelected, setTabSelected] = useState(0);
  const navigate = useNavigate()

  const getPath = (index:number)=>{
    switch(index){
        case 0:{
            return "/"
        }
        case 1:{
            return "/group"
        }
        case 2:{
            return "/call"
        }
        case 3:{
            return "/settings"
        }
        default:{
          return "/"
        }
    }
}

  return (
    <div className="w-[100px] p-2 bg-primary h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center gap-4">
        <div className="logo">
          <img className="object-cover" src="./src/assets/img/logo.png" />
        </div>
        <div className="navigation flex flex-col gap-2">
          {Nav_Buttons.map((btn, index) => {
            return tabSelected === btn.index ? (
              <div key={index}>
                <Button
                  Icon={btn.icon}
                  iconSize={24}
                  placement="left"
                  className="p-4 rounded-xl"
                  variant="secondary"
                ></Button>
              </div>
            ) : (
              <div key={index}>
                <Button
                  Icon={btn.icon}
                  iconSize={24}
                  placement="left"
                  className="p-4 rounded-xl hover:bg-secondary/20"
                  variant="default"
                  onClick={() => {
                    setTabSelected(index)
                    navigate(getPath(index))
                }}
                ></Button>
              </div>
            );
          })}
          <div className="divider w-full bg-background h-[2px] rounded-full"></div>
          {tabSelected === 3 ? (
              <div >
                <Button
                  Icon={GoGear}
                  iconSize={24}
                  placement="left"
                  className="p-4 rounded-xl"
                  variant="secondary"
                ></Button>
              </div>
            ) : (
              <div>
                <Button
                  Icon={GoGear}
                  iconSize={24}
                  placement="left"
                  className="p-4 rounded-xl hover:bg-secondary/20"
                  variant="default"
                  onClick={() => {
                    setTabSelected(3)
                    navigate("settings")
                }}
                ></Button>
              </div>
            )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="dark-mode">
          <Switch />
        </div>
        <div className="ava-menu">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
