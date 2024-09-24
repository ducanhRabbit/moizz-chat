// Queries
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentUser, getUserById, postLogin, postRegisterUser, postResendOTP, postVerifyOTP } from "./route";
import { QUERY_USER_KEY } from "@/constant/queries/query.constant";

export function useGetUserQuery(id){
    const user = useQuery({
        queryKey: [QUERY_USER_KEY, id],
        queryFn: ()=> getUserById(id)
    })

    return user
}

export function useGetCurrentUser(){
    return useQuery({
        queryKey:[QUERY_USER_KEY],
        queryFn:()=> getCurrentUser(),
    })
}
//Mutation
export function useLogin(){
    const {mutate:loginMutation,isError,mutateAsync:loginAsyncMutation,isPending} = useMutation({
        mutationFn: (formValues)=>{
            
            return postLogin(formValues)
        },
        onError:(error)=>{
            console.log(error)
            throw error
        }
    })
    return {loginMutation,loginAsyncMutation,isPending}
}

export function useSignUp(){
    const {mutate:signUpMutation,isError,mutateAsync:signUpAsyncMutation,isPending} = useMutation({
        mutationFn: (formValues)=>{
            return postRegisterUser(formValues)
        },
        onError:(error)=>{
            console.log('Query Error')
            return error
        }
    })
    return {signUpMutation,signUpAsyncMutation,isPending}
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