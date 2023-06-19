import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Google, Facebook, Linkedin } from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-xl">
        <h2 className="text-2xl text-left text-gray-600 font-semibold mb-6">
          SIGN UP
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl text-left mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="userName"
              value={data.userName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl text-left mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-xl text-left mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="text-gray-500 text-lg absolute bottom-0 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-rose-500 hover:bg-rose-600 w-full text-white font-bold py-2 px-4 rounded-lg shadow-xl"
              type="button"
            >
              SIGN UP
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

          <Link
            to="/login"
            className="inline-block align-baseline text-lg text-gray-700"
          >
            Already a user? <span className="underline">LOGIN</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
