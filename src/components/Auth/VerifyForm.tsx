import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLogin, useResendOTP, useVerifyOTP } from "@/api/queries";
import { login, updateVerifyingEmail } from "@/redux/slices/authReducer";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import useCountDown from "@/custom/hooks/useCountDown";

function VerifyForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { verifying } = useAppSelector((state) => state.auth);
  
  const { resendOTPMutation } = useResendOTP();
  const { verifyOTPAsyncMutation } = useVerifyOTP();
  const [loading, setLoading] = useState(false);
  const { loginAsyncMutation } = useLogin();
  const handleResendOTP = () => {
    if (verifying) {
      resendOTPMutation(verifying);
      startCountDown(2);
    }
  };

  const verifySchema = Yup.object().shape({
    otp: Yup.string().min(6, "OTP must be 6 digits"),
  });

  const method = useForm({
    resolver: yupResolver(verifySchema),
  });
  const onSubmit = async (data: string) => {
    try {
      setLoading(true);
      await verifyOTPAsyncMutation({
        email: verifying,
        otp: data.otp,
      });
      const res = await loginAsyncMutation({
        data: {
          email: verifying,
        },
        option: {
          headers: {
            verifieduser: true,
          },
        },
      });
      localStorage.setItem("accessToken", res.data.token);
      localStorage.removeItem("verifying");
      dispatch(updateVerifyingEmail(""));
      dispatch(login(res.data))
      setLoading(false);
      console.log('naviagte')
      navigate("/",{
        replace:true
      });
    } catch (err) {
      setError("otp", {
        message: err.message,
      });
      setLoading(false);
    }
  };
  const { control, handleSubmit, setError } = method;
  const { timeLeft, startCountDown } = useCountDown();
  useEffect(() => {
    startCountDown(2);
  }, [verifying]);

  

  return (
    <>
      <Form {...method}>
        <FormField
          control={control}
          name="otp"
          render={({ field }) => (
            <FormItem className=" mt-4 ">
              <FormMessage className="pl-12 text-xs" />
              <FormControl className="">
                <InputOTP
                  containerClassName="justify-center mt-0"
                  maxLength={6}
                  {...field}
                >
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      className=" rounded-md bg-paper border-2 font-semibold"
                      index={0}
                    />
                    <InputOTPSlot
                      className=" rounded-md bg-paper border-2 font-semibold"
                      index={1}
                    />
                    <InputOTPSlot
                      className=" rounded-md bg-paper border-2 font-semibold"
                      index={2}
                    />
                    <InputOTPSlot
                      className=" rounded-md bg-paper border-2 font-semibold"
                      index={3}
                    />
                    <InputOTPSlot
                      className=" rounded-md bg-paper border-2 font-semibold"
                      index={4}
                    />
                    <InputOTPSlot
                      className=" rounded-md bg-paper border-2 font-semibold"
                      index={5}
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="resend flex gap-1 justify-center text-xs mt-2 ">
          <div>Didn't receive email!</div>
          {timeLeft === 0 ? (
            <div
              onClick={handleResendOTP}
              className="font-bold hover:underline cursor-pointer text-link"
            >
              Resend
            </div>
          ) : (
            <div className="cursor-pointer font-bold text-muted-foreground/50">
              {timeLeft}
            </div>
          )}
        </div>
        <div className="flex justify-center mt-6">
          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full flex justify-center disabled:bg-secondary disabled:opacity-70"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <LoadingSpinner className="h-6 w-6 border-4 border-t-link " />
            ) : (
              "Verify"
            )}
          </Button>
        </div>
      </Form>
    </>
  );
}

export default VerifyForm;
