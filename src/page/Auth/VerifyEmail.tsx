import VerifyForm from "@/components/Auth/VerifyForm";
import { useAppSelector } from "@/redux/hooks";"react-redux";

function VerifyEmail() {
  const {verifying} = useAppSelector(state => state.auth)
  console.log(verifying)
  return (
    <div className="flex justify-center items-center z-10 relative h-full ">
      <div className="p-3 min-w-[400px] bg-avo-yellow/70 backdrop-brightness-[1.2] backdrop-blur-[4px] rounded-2xl">
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <img
              className=" w-[80px] h-[80px] object-cover"
              src="../src/assets/img/logo.png"
            ></img>
          </div>
          <div className="text-3xl font-bold leading-5 italic">Moizz</div>
        </div>
        <div className="text-center">
            <h2 className="">A verification code have been sent to your email:</h2>
            <h4 className="font-bold">
                {verifying}
            </h4>
        </div>
        {/* Verification Form */}
        <VerifyForm/>

      </div>
    </div>
  );
}

export default VerifyEmail;
