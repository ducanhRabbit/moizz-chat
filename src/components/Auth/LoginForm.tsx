import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdOutlineMailOutline, MdOutlineLockPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useLogin } from "@/api/queries";
import { useAppDispatch } from "@/redux/hooks";
import { login, updateVerifyingEmail } from "@/redux/slices/authReducer";
import LoadingSpinner from "../common/LoadingSpinner";
import axiosInstance from "@/axios/axios";
import { CgClose } from "react-icons/cg";
function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loginAsyncMutation, isPending } = useLogin();
  const [errorForm, setErrorForm] = useState();
  const defaultValues = {
    email: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email adress"),
    password: Yup.string().required("Password is required"),
  });
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const { control, handleSubmit } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data) => {
    try {
      setErrorForm(null);
      const res = await loginAsyncMutation({ data });
      localStorage.setItem("accessToken", res.data.token);
      const currentUser = await axiosInstance.get("/user/currentUser");
      console.log(currentUser.data);
      if (!currentUser.data.data.verified) {
        localStorage.setItem("verifying", currentUser.data.data.email);
        dispatch(updateVerifyingEmail(currentUser.data.data.email));
        return navigate("/auth/verify-email");
      }
      dispatch(login(res.data))
      navigate("/",{
        replace:true
      })
    } catch (err) {
      setErrorForm(err.message);
    }
  };
  console.log("render");
  return (
    <div className="pb-4">
      <Form {...methods}>
        <FormField
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <div className="mb-4">
                <div className="relative ">
                  <label
                    htmlFor={"email"}
                    className="absolute top-1/2 -translate-y-1/2 px-2"
                  >
                    <MdOutlineMailOutline size={20} />
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value}
                      className="pl-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
                      placeholder="Email"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-xs" />
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
                      {...field}
                      value={field.value}
                      className="px-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
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
                <FormMessage className="text-xs" />
              </div>
            </FormItem>
          )}
        />
      </Form>
      {errorForm && (
        <div className="flex gap-1 p-2 items-center text-sm text-destructive-foreground bg-destructive rounded-lg">
          <CgClose size={16} />
          <p>{errorForm}</p>
        </div>
      )}
      <div className="text-right text-sm mb-2">
        <Link className="hover:underline text-link" to={"#"}>
          Forget password?
        </Link>
      </div>

      <Button
        onClick={handleSubmit(onSubmit)}
        disabled={isPending}
        className="w-full flex justify-center disabled:bg-secondary opacity-80"
      >
        {isPending ? (
          <LoadingSpinner className="h-6 w-6 border-4 border-t-link " />
        ) : (
          "Login"
        )}
      </Button>
    </div>
  );
}

export default LoginForm;
