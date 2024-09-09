import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdOutlineMailOutline, MdOutlineLockPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
function LoginForm() {
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
  const onSubmit = (data) => {
    console.log(data);
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
              <FormMessage className="text-xs"/>
              </div>
            </FormItem>
          )}
        />
      </Form>
      <div className="text-right text-sm mb-2">
        <Link className="hover:underline text-link" to={"#"}>
          Forget password?
        </Link>
      </div>

      <Button onClick={handleSubmit(onSubmit)} className="w-full">
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
