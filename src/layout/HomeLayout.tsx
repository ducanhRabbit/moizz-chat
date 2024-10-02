import { Outlet, useNavigate } from "react-router-dom"
import SideNav from "./SideNav"
import { useGetCurrentUser } from "@/api/queries"
import { useEffect, useLayoutEffect } from "react"
import { useAppSelector } from "@/redux/hooks"
import { connectSocket, socket } from "@/socket"
import { useQueryClient } from "@tanstack/react-query"
import { QUERY_FRIENDS_REQUEST_KEY } from "@/constant/queries/query.constant"

function HomeLayout() {
  const queryClient = useQueryClient()
  const {data:currentUser} = useGetCurrentUser()
  const navigate = useNavigate()
  const {isLogged} = useAppSelector(state => state.auth)
  useLayoutEffect(()=>{
    if(currentUser && !currentUser.data.verified){
      navigate('/auth/verify-email',{replace:true})
    }
  },[currentUser])
  console.log('render')
 useEffect(()=>{
  console.log(currentUser)
  if(currentUser && !socket){
    connectSocket(currentUser.data._id)
    console.log(socket)

  }
  if(socket){
    socket.on('newFriendRequest',(data)=>{
      console.log(data)
      queryClient.invalidateQueries({
        queryKey:[QUERY_FRIENDS_REQUEST_KEY]
      })
    })

    socket.on("sendFriendRequest",(data)=>{
      
      console.log(data)
    })
  }
  
  // Unsubcribed Socket event
  return ()=>{
    socket?.off('newFriendRequest')
  }
 },[isLogged,currentUser])
  return (
    <div className='flex h-screen overflow-hidden'>
        
        <SideNav/>
        <Outlet/>        
    </div>
  )
}

export default HomeLayout