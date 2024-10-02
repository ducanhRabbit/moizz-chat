import { Button } from "@/components/ui/button";
import { IconSwitch } from "@/components/ui/switch";
import { FaSun, FaMoon } from "react-icons/fa";
import { Nav_Buttons, Nav_Setting } from "@/data/data";
import { VscSignOut } from "react-icons/vsc";
import { PiUsers } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useGetCurrentUser, useLogOut } from "@/api/queries";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { switchTab, toggleOpen } from "@/redux/slices/sideTabReducer";
import { useTheme } from "@/custom/hooks/useTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { profile } from "console";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "@/redux/slices/authReducer";

function SideNav() {
  const { data: currentUser } = useGetCurrentUser();
  const { theme, setTheme } = useTheme();
  const {
    mutateAsync: logOutAsyncMutation,
    isPending,
    isSuccess,
  } = useLogOut();
  const navigate = useNavigate();
  const Profile_Menu = [
    {
      title: "Profile",
      icon: <PiUsers />,
      handler: () => {
        console.log("Profile");
      },
    },
    {
      title: "Settings",
      icon: <GoGear />,
      handler: () => {
        console.log("Settings");
      },
    },
    {
      title: "Log out",
      icon: <VscSignOut />,
      handler: async () => {
        try {
          console.log("Log out");
          dispatch(logout())
          await logOutAsyncMutation();
          toast.success("Logout",{
            autoClose:2000
          });
          localStorage.removeItem("accessToken");
          setTimeout(() => {
            navigate("/auth/login");
          }, 2000);
        } catch (err) {
          console.log(err);
        }
      },
    },
  ];
  const dispatch = useAppDispatch();
  const { isOpen, content } = useAppSelector((state) => state.sideTab);
  const handleNav = (btn) => {
    const isActive = content === btn.name;
    if (!isOpen) {
      sessionStorage.setItem("currentTab", btn.name);
      dispatch(toggleOpen());
      dispatch(switchTab(btn.name));
    } else {
      if (isActive) {
        dispatch(toggleOpen());
      } else {
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
      <div className="flex flex-col items-center gap-4">
        <div className="dark-mode">
          <IconSwitch
            className="text-track"
            icon={theme === "dark" ? <FaMoon className="" /> : <FaSun />}
            checked={theme === "dark" ? true : false}
            onCheckedChange={(checked) => {
              if (!checked) {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          />
        </div>
        <div className="ava-menu">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              sideOffset={4}
              align="end"
              alignOffset={16}
            >
              {Profile_Menu.map((item, index) => {
                return (
                  <DropdownMenuItem key={index}>
                    <div
                      onClick={() => {
                        item.handler();
                      }}
                      className="flex justify-between w-full items-center [&_.icon]:text-[18px]"
                    >
                      <div>{item.title}</div>
                      <div className="icon">{item.icon}</div>
                    </div>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
