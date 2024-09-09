// Queries
import { useMutation } from "@tanstack/react-query";
import { postRegisterUser, postResendOTP, postVerifyOTP } from "./route";

export function useSignUp(){
    const {mutate:signUpMutation,isError,mutateAsync:signUpAsyncMutation} = useMutation({
        mutationFn: (formValues)=>{
            return postRegisterUser(formValues)
        },
        onError:(error)=>{
            console.log(error)
            throw error
        }
    })
    return {signUpMutation,signUpAsyncMutation}
}
export function useResendOTP(){
    const {mutate:resendOTPMutation,isError} = useMutation({
        mutationFn: (email:string)=>{
            return postResendOTP(email)
        },
        onError:(error)=>{
            console.log(error)
            throw error
        }
    })
    return {resendOTPMutation}
}

export function useVerifyOTP(){
    const {mutate:verifyOTPMutation,mutateAsync:verifyOTPAsyncMutation} = useMutation({
        mutationFn:(values)=>{
            return postVerifyOTP(values)
        },
        onError:(error)=>{
            console.log(error)
            throw error
        }
    })
    return {verifyOTPMutation,verifyOTPAsyncMutation}
}