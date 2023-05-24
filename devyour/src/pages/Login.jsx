import React from "react";
import { Link } from "react-router-dom";
import InputField from "../components/atoms/InputField";

function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
        <div
          className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            {" "}
            <img src="log.png" alt="logo" style={{ width: "1000px" }} />{" "}
          </Link>
        </div>
        <div className="w-full sm:w-3/5">
          <div className="p-8">
            <h1
              className="text-3xl font-black text-slate-700"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="DevYour.png" alt="logo" />
            </h1>
            <p className="mt-2 mb-5 text-base leading-tight text-grey"></p>
            <form className="mt-8">
              <div className="relative mt-2 w-full">
                <InputField
                  type="text"
                  id="email"
                  value=""
                  placeholder=" "
                  labelText="Enter your Email"
                  input="primaryInputVariant"
                  label="primaryLabelVariant"
                />
              </div>
              <div className="relative mt-2 w-full">
                <InputField
                  type="password"
                  id="password"
                  value=""
                  placeholder=" "
                  labelText="Enter your Password"
                  input="primaryInputVariant"
                  label="primaryLabelVariant"
                />
              </div>
              
            
                <InputField input="secondaryInputVariant" type="submit" value="Login"/>
              
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-grey">
                Create an account?{" "}
                <Link to="/register">
                  {" "}
                  <a
                    href="#"
                    className="font-bold text-blue no-underline hover:text-pink"
                  >
                    Sign up
                  </a>{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
