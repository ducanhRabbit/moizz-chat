import axiosInstance from "@/axios/axios"

// Auth
export const postRegisterUser = async (formValues)=>{
    return await axiosInstance.post("/auth/register",{
        ...formValues
    })
}

export const postLogin = async ({data,option})=>{
    return await axiosInstance.post("/auth/login",{
        ...data
    },option)
}

export const postResendOTP = async (email)=>{
    return await axiosInstance.post("/auth/resendOtp",{
        email
    })
}

export const postVerifyOTP = async (values)=>{
    return await axiosInstance.post("/auth/verifyOtp",{
        ...values
    })
}

export const postLogOut = async ()=>{
    return await axiosInstance.post("/auth/logOut")
}

// User
export const getUserById = async (id)=>{
    return await axiosInstance.get(`/user/${id}`).then(res => res.data)
}
export const getCurrentUser = async ()=>{
    return await axiosInstance.get(`/user/currentUser`).then(res => res.data)
}

export const getUserFriend = async ()=>{
    return await axiosInstance.get(`/user/getFriends`).then(res =>res.data)
}

// FriendRequest
export const getFriendRequest = async()=>{
    return await axiosInstance.get(`/user/getFriendsRequest`).then(res => res.data)
}