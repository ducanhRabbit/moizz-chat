import axiosInstance from "@/axios/axios"

//POST Register User
export const POST_REGISTER_USER = '/auth/register'

export const postRegisterUser = async (formValues)=>{
    return await axiosInstance.post("/auth/register",{
        ...formValues
    })
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
//POST Login
export const POST_LOGIN = '/auth/login'