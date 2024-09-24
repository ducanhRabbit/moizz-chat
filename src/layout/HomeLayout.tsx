import { Outlet, useNavigate } from "react-router-dom"
import SideNav from "./SideNav"
import { useGetCurrentUser } from "@/api/queries"
import { useLayoutEffect } from "react"

function HomeLayout() {
  const {data:currentUser} = useGetCurrentUser()
  const navigate = useNavigate()
  console.log(1)

  useLayoutEffect(()=>{
    console.log(currentUser?.data.verified)
    if(currentUser && !currentUser.data.verified){
      console.log(currentUser.data.email)
      navigate('/auth/verify-email',{replace:true})
    }
  },[currentUser])
  return (
    <div className='flex h-screen overflow-hidden'>
        
        <SideNav/>
        <Outlet/>        
    </div>
  )
}

export default HomeLayout