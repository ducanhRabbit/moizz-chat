import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdOutlineMailOutline, MdOutlineLockPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
function LoginForm() {
  return (
    <div className="pb-4">
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
            <FaRegEye size={20}/>
        </div>
      </div>
      <div className="text-right text-sm mb-2">
        <Link className="hover:underline text-link" to={"#"}>
        Forget password?
        </Link>
      </div>

      <Button className="w-full">Login</Button>
    </div>
  );
}

export default LoginForm;
