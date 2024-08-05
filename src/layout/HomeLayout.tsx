import { Outlet } from "react-router-dom"
import SideNav from "./SideNav"

function HomeLayout() {
  return (
    <div className='flex'>
        <SideNav/>
        <Outlet/>        
    </div>
  )
}

export default HomeLayout