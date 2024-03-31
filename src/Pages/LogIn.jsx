import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="">
            <div className="container mx-auto p-4">
            <form className="mt-10 rounded-xl p-10 text-center bg-white md:w-2/3 xl:w-1/3 w-full mx-auto shadow-xl">
                <h1 className="text-4xl font-black">Welcome</h1>
                <h1 className="bg-black text-white mt-8 w-2/12 mx-auto py-3 font-bold text-5xl rounded-xl">A</h1>
                <input className="w-full pb-6 border-b-2 border-black border-opacity-50 outline-none text-xl" type="email" placeholder="Your Email"/><br />
                <input className="w-full pb-6 border-b-2 border-black border-opacity-50 outline-none text-xl mt-8"type="text" placeholder="Your Password"/><br />
                <input className="border w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full p-4 text-white text-2xl mt-16" type="submit" value="Login"/>
                <p className="mt-24">Do not have an account? <Link className="font-bold">sign up</Link></p>
            </form>
        </div>
        </div>
    );
};

export default LogIn;