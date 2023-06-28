import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogin from "../components/atoms/ButtonLogin";

export let user = {};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);


  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

     const response = await fetch('http://localhost:6700/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      setMessage('Credenziali non valide!');
    } else{
     user = await response.json();
     localStorage.setItem('user', JSON.stringify(user));
    console.log('LOGIN FATTO', user);
      navigate("/devyour");
    }
    
  };
  useEffect(() => {
    setIsFormValid(
  
        email !== "" &&
        password !== ""
    );
  }, [ email, password]);
  return (
    
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
        <div className="flex justify-center items-center m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5">
          <Link to="/">
            <img src="log.png" alt="logo" className="w-[1000px]"/>{" "}
          </Link>
        </div>
        
        <div className="w-full sm:w-3/5">
          <div className="p-8">
            <h1 className="flex justify-center items-center text-3xl font-black text-grey" >
              <img src="DevYour.png" alt="logo" />
            </h1>
            <p className="mt-2 mb-5 text-base leading-tight text-grey"></p>
            <p className="text-red text-2xl font-semibold">{message}</p>
            <form className="mt-8" >

              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="email"
                  value={email}
                  placeholder=""
                  onChange={(e)=> setEmail(e.target.value)}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
                />
              <label htmlFor="name" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Enter your Email</label>
              </div>

              <div className="relative mt-2 w-full">
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder=""
                  onChange={(e)=> setPassword(e.target.value)}
                  
                  className="border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0"
                />
              <label htmlFor="password" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Enter your Password</label>
              </div>

              <Link to="/devyour">
                <ButtonLogin value="Login" disabled={!isFormValid} onClick={handleLogin}/>
                </Link>

            </form>
            
            <div className="mt-4 text-center">
              <p className="flex justify-center items-center gap-2 text-sm text-grey">
                <span>Create an account?</span>
                <span><Link to="/register" className="font-bold text-blue no-underline hover:text-pink">Sign up</Link></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;