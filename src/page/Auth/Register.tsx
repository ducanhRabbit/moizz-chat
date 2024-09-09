import RegisterForm from '@/components/Auth/RegisterForm';
import { Link } from 'react-router-dom';

function Register() {
  console.log("Regis render")
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
          <h2 className="text-4xl font-bold mb-1">Register</h2>
          <div className="flex text-sm gap-1">
            <div>Already have account?</div>

            <Link className="underline text-link" to={"/auth/login"}>Log in</Link>
          </div>
        </div>
        <RegisterForm/>
      </div>
    </div>
  );
}

export default Register