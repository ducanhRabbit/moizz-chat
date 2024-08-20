import LoginForm from "@/components/Auth/LoginForm";
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
function Login() {
  return (
    <div className="flex justify-center items-center z-10 relative h-full ">
      <div className="p-3 min-w-[400px] bg-avo-yellow/70 backdrop-brightness-[1.2] backdrop-blur-[4px] rounded-2xl">
        <div className="text-center mb-4">
          <div className="flex justify-center">
            <img
              className=" w-[80px] h-[80px] object-cover"
              src="../src/assets/img/logo.png"
            ></img>
          </div>
          <div className="text-3xl font-bold leading-5 italic">Moizz</div>
        </div>
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-1">Login</h2>
          <div className="flex text-sm gap-1">
            <div>New user?</div>

            <Link className="underline text-link" to={"#"}>Create an account</Link>
          </div>
        </div>
        <LoginForm/>
        <div className="divider flex items-center">
          <Divider className="bg-transparent border-t-2 border-dashed border-secondary/80 mt-1"/>
          <div className="px-3 italic">
            Or
          </div>
          <Divider className="bg-transparent border-t-2 border-dashed border-secondary/80 mt-1"/>
        </div>
        <div className="pt-4 flex justify-center gap-2">
          <Button className="px-2 rounded-full bg-avo-yellow/30 hover:bg-avo-yellow/100 border-none outline-0" variant={"outline"}>
            <FaXTwitter size={24}/>
          </Button>
          <Button className="px-2 rounded-full bg-avo-yellow/30 hover:bg-avo-yellow/100 border-none outline-0" variant={"outline"}>
            <FcGoogle size={24}/>
          </Button>
          <Button className="px-2 text-[#3b5998] rounded-full bg-avo-yellow/30 hover:bg-avo-yellow/100 border-none outline-0" variant={"outline"}>
            <FaFacebookF size={24}/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
