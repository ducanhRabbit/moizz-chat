import { Outlet } from "react-router-dom"
import SideNav from "./SideNav"

function HomeLayout() {
  return (
    <div className='flex h-screen overflow-hidden'>
        <SideNav/>
        <Outlet/>        
    </div>
  )
}

export default HomeLayout