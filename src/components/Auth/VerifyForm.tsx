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
import useCountDown from "@/custom/hooks/useCountDown";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useResendOTP, useVerifyOTP } from "@/api/queries";

function VerifyForm() {
  const {verifying} = useAppSelector(state => state.auth)
  const {resendOTPMutation} = useResendOTP()
  const {verifyOTPMutation,verifyOTPAsyncMutation}= useVerifyOTP()
  const handleResendOTP = ()=>{
    if(verifying){
      resendOTPMutation(verifying)
      startCountDown(2)
    }
  }

  const verifySchema = Yup.object().shape({
    otp: Yup.string().min(6, "OTP must be 6 digits"),
  });

  const method = useForm({
    resolver: yupResolver(verifySchema),
  });
  const onSubmit = async (data:string) => {
    try {
      await verifyOTPAsyncMutation({
        email: verifying,
        otp: data.otp
      })
      
    } catch (err) {
      setError("otp",{
        message:"OTP is incorrect"
      })
    }
  };
  const { control, handleSubmit,setError } = method;
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
            <div onClick={handleResendOTP} className="font-bold hover:underline cursor-pointer text-link">
              Resend
            </div>
          ) : (
            <div  className="cursor-pointer font-bold text-muted-foreground/50">
              {timeLeft}
            </div>
          )}
        </div>
        <div className="flex justify-center mt-6">
          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full"
            type="submit"
          >
            Verify
          </Button>
        </div>
      </Form>
    </>
  );
}

export default VerifyForm;
