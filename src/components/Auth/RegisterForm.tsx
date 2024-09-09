import React, { useState } from "react";
import { MdOutlineLockPerson, MdOutlineMailOutline } from "react-icons/md";
import { Input } from "../ui/input";
import { FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "@/axios/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { RegisterThunk, RegisterUser, updateVerifyingEmail } from "@/redux/slices/authReducer";
import { useAppDispatch } from "@/redux/hooks";
import { useSignUp } from "@/api/queries";

interface InputError extends Error {
  field: string
}

function RegisterForm() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("First name required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required").min(6,"Password must be 6-12 characters").max(12,"Password must be 6-12 characters"),
    confirmPassword: Yup.string().required("Confirmpassword is required").oneOf([Yup.ref('password')],"Password not match"),
  });
  const {signUpAsyncMutation} = useSignUp()

  const defaultValues = {
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  }
  const methods = useForm({
    resolver:yupResolver(RegisterSchema),
    defaultValues
  });

  const { control, handleSubmit,setError } = methods;
  const onSubmit = async(data)=>{
      try{
        console.log(data)
        await signUpAsyncMutation(data)
        localStorage.setItem('verifying',data.email)
        dispatch(updateVerifyingEmail(data.email))
        navigate('/auth/verify-email')
        toast.success("Register")
      }catch(err){
        const ResInputError = err as InputError
        if(ResInputError.field === "email"){
          setError('email',{
            message: 'Email is already in use'
          })
        }
        
      }
  }
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="pb-4">
      <Form {...methods}>
        <FormField
          control={control}
          name="username"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <div className="mb-4">
              <div className="relative">
                <label
                  htmlFor={"username"}
                  className="absolute top-1/2 -translate-y-1/2 px-2"
                >
                  <FaRegUser size={20} />
                </label>
                <FormControl>
                  <Input
                    id="username"
                    className="pl-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="text-xs"/>
              </div>

            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <div className="mb-4">
              <div className="relative">
                <label
                  htmlFor={"email"}
                  className="absolute top-1/2 -translate-y-1/2 px-2"
                >
                  <MdOutlineMailOutline size={20} />
                </label>
                <FormControl>
                  <Input
                    id="email"
                    className="pl-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="text-xs"/>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <div className="mb-4">
              <div className="relative">
                <label
                  htmlFor={"password"}
                  className="absolute top-1/2 -translate-y-1/2 px-2"
                >
                  <MdOutlineLockPerson size={20} />
                </label>
                <FormControl>
                  <Input
                    id="password"
                    className="px-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                  />
                </FormControl>
                <div
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="cursor-pointer show-pass px-2 absolute top-1/2 -translate-y-1/2 right-0"
                >
                  {showPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </div>
              </div>
              <FormMessage className="text-xs"/>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="confirmPassword"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <div className="mb-4">
              <div className="relative">
                <label
                  htmlFor={"confirmPassword"}
                  className="absolute top-1/2 -translate-y-1/2 px-2"
                >
                  <MdOutlineLockPerson size={20} />
                </label>
                <FormControl>
                  <Input
                    id="confirmPassword"
                    className="px-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
                    placeholder="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    {...field}
                  />
                </FormControl>
                <div
                  onClick={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                  className="cursor-pointer show-pass px-2 absolute top-1/2 -translate-y-1/2 right-0"
                >
                  {showConfirmPassword ? (
                    <FaRegEye size={20} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </div>
              </div>
              <FormMessage className="text-xs"/>
              </div>
            </FormItem>
          )}
        />
        <Button onClick={handleSubmit(onSubmit)} className="w-full text-base">Create account</Button>
      </Form>
      <div className="policy text-xs mt-2 text-center">
        By signing up, I agree to{" "}
        <Link className="underline text-link" to={"#"}>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link className="underline text-link" to={"#"}>
          Privacy Policy.
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
