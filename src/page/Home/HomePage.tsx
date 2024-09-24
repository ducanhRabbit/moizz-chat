import { useGetCurrentUser } from "@/api/queries";
import Chat from "@/components/Home/Chat";
import Conversation from "@/components/Home/Conversation";
import SideTab from "@/components/Home/SideTab";
import { useAppSelector } from "@/redux/hooks";
import { Outlet } from "react-router-dom";

function HomePage() {
  const {isOpen, content} = useAppSelector((state)=> state.sideTab)
  return (
    <div className="flex w-full  h-screen">
      {isOpen && <SideTab/>}
      {/* <Chat /> */}
      <Outlet/>
      {/* <div className="flex-1 h-full flex justify-center items-center bg-[url(./src/assets/img/animaildoodle500.png)]">
        <div className="bg-paper/80 backdrop-blur-[4px] p-3 rounded-xl text-center">
          <p className="text-xl font-semibold mb-1">Wellcome to Moizz Chat!</p>
          <p className="text-lg">Tweet something with your friend</p>
        </div>
      </div> */}
      {/* Conversation */}
      {/* <Conversation/> */}
    </div>
  );
}

export default HomePage;
