import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [isHide, setIsHide] = useState(false);
  console.log(isHide);
  const eye = <span className="material-symbols-outlined">visibility</span>;
  const hidenEye =<span className="material-symbols-outlined">visibility_off</span>;
  return (
    <div className="">
      <div className="container mx-auto p-4">
        <form className="mt-10 rounded-xl p-10 text-center bg-white md:w-2/3 xl:w-1/3 w-full mx-auto shadow-xl">
          <h1 className="text-4xl font-black">Welcome</h1>
          <h1 className="bg-black text-white mt-8 w-2/12 mx-auto py-3 font-bold text-5xl rounded-xl">
            A
          </h1>
          <input
            className="w-full pb-6 border-b-2 border-black border-opacity-50 outline-none text-xl mt-8"
            type="email"
            placeholder="Your Name "
            name="name"
          />
          <br />
          <input
            className="w-full pb-6 border-b-2 border-black border-opacity-50 outline-none text-xl mt-8"
            type="email"
            placeholder="Your Email "
            name="email"
          />
          <br />
          <div className="relative">
          <input
            className="w-full pb-6 border-b-2 pr-12 border-black border-opacity-50 outline-none text-xl mt-8"
            type={isHide ? "text" : "password"}
            placeholder="Your Password"
            name="password"
          />
          <br />
          <p
            onClick={() => {
              setIsHide(!isHide);
            }}
            className=" p-3 top-5 absolute right-0"
          >
            {isHide ? hidenEye : eye}
          </p>
          </div>
          <input
            className="border w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full p-4 text-white text-2xl mt-16"
            type="submit"
            value="Sign Up"
          />
          <p className="mt-24">
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
