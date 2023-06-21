import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../components/atoms/InputField";
import ButtonLogin from "../components/atoms/ButtonLogin";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  /* const [isRequestComplete, setIsRequestComplete] = useState(false); */


  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:6700/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, username, email, password }),
    });

    const data = await response.text();
    console.log(data);

    
    navigate("/login"); 
  };
  useEffect(() => {
    setIsFormValid(
      firstName !== "" &&
        lastName !== "" &&
        username !== "" &&
        email !== "" &&
        password !== ""
    );
  }, [firstName, lastName, username, email, password]);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
        <div className="flex justify-center items-center m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5">
          <Link to="/">
            <img src="log.png" alt="logo" className="w-[1000px]" />
          </Link>
        </div>
        <div className="w-full sm:w-3/5">
          <div className="p-8">
            <h1 className="text-3xl font-black text-grey">Create Account</h1>
            <p className="mt-2 mb-5 text-base leading-tight text-grey"></p>
            <form className="mt-8">
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="name"
                  value={firstName}
                  placeholder=""
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="name"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  Enter your First Name
                </label>
              </div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder=""
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="lastName"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  Enter your Last Name
                </label>
              </div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder=""
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="username"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  Enter your Username
                </label>
              </div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="email"
                  value={email}
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="email"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  Enter your Email
                </label>
              </div>
              <div className="relative mt-2 w-full">
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="password"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  Enter your Password
                </label>
              </div>

              <Link to="/login">
                <ButtonLogin
                  value="Register Now"
                  disabled={!isFormValid}
                  onClick={handleRegister}
                />
              </Link>
            </form>
            <div className="mt-4 text-center">
              <p className="flex justify-center items-center gap-2 text-sm text-grey">
                <span>Have an account?</span>
                <span><Link to="/login" className="font-bold text-blue no-underline hover:text-pink">Sign in</Link></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
