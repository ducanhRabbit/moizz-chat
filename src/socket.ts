import {io, Socket} from'socket.io-client'


let socket:Socket|null = null

const connectSocket = (userID)=>{
    socket = io('http://localhost:3000',{
        query:{
            userID
        }
    })
}

export {socket,connectSocket}