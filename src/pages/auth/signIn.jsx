import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Google, Facebook, Linkedin } from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-xl">
        <h2 className="text-2xl text-left text-gray-600 font-semibold mb-6">
          SIGN IN
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-xl text-left mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="userName"
              value={data.userName}
              onChange={handleChange}
              className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-xl text-left mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="text-gray-500 text-lg absolute bottom-0 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-rose-500 hover:bg-rose-600 w-full text-white font-bold py-2 px-4 rounded-lg shadow-xl"
            >
              SIGN IN
            </button>
          </div>
          <div className="flex items-center mt-5">
            <hr className="border-t-2 border-gray-300 w-full" />
            <div className="w-[4rem] h-7 border-2 rounded border-gray-300">
              OR
            </div>
            <hr className="border-t-2 border-gray-300 w-full" />
          </div>
          <div className="flex items-center justify-center gap-5 mt-5 mb-5">
            <div className="w-10 h-10 rounded-full border-4 border-red-500 flex items-center justify-center">
              <img src={Google} alt="Google" className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full border-4 border-blue-500 flex items-center justify-center">
              <img src={Facebook} alt="Google" className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 rounded-full border-4 border-blue-500 flex items-center justify-center">
              <img src={Linkedin} alt="Google" className="w-5 h-5" />
            </div>
          </div>
          <Link to="/Authentication/signup" className="inline-block align-baseline text-lg text-gray-700">
            Don't have an account? <span className="underline">REGISTER</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;