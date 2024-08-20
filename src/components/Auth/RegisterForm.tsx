import React from "react";
import { MdOutlineLockPerson, MdOutlineMailOutline } from "react-icons/md";
import { Input } from "../ui/input";
import { FaRegEye, FaRegUser } from "react-icons/fa";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="pb-4">
      <div className="relative mb-4">
        <label
          htmlFor="search1"
          className="absolute top-1/2 -translate-y-1/2 px-2"
        >
          <FaRegUser size={20} />
        </label>
        <Input
          id="search1"
          className="pl-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
          placeholder="Username"
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="search1"
          className="absolute top-1/2 -translate-y-1/2 px-2"
        >
          <MdOutlineMailOutline size={20} />
        </label>
        <Input
          id="search1"
          className="pl-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
          placeholder="Email"
        />
      </div>

      <div className="relative mb-4">
        <label
          htmlFor="search1"
          className="absolute top-1/2 -translate-y-1/2 px-2"
        >
          <MdOutlineLockPerson size={20} />
        </label>
        <Input
          id="password"
          className="pl-8 pr-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
          placeholder="Password"
          type="password"
        />
        <div className="show-pass px-2 absolute top-1/2 -translate-y-1/2 right-0">
          <FaRegEye size={20} />
        </div>
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="search1"
          className="absolute top-1/2 -translate-y-1/2 px-2"
        >
          <MdOutlineLockPerson size={20} />
        </label>
        <Input
          id="password"
          className="pl-8 pr-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
          placeholder="Password"
          type="password"
        />
        <div className="show-pass px-2 absolute top-1/2 -translate-y-1/2 right-0">
          <FaRegEye size={20} />
        </div>
      </div>
      <Button className="w-full text-base">Create account</Button>
      <div className="policy text-xs mt-2 text-center">
        By signing up, I agree to <Link className="underline text-link" to={"#"}>Terms of Service</Link> and <Link className="underline text-link" to={"#"}>Privacy Policy.</Link>
      </div>
    </div>
  );
}

export default RegisterForm;
