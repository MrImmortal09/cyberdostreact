import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterImg from '../../assets/undraw_no_data_re_kwbl.svg';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const loginData = { username, password };

    try {
      const response = await fetch('http://127.0.0.1:8080/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      alert('Login successful!');
      //redirect to home page
      window.location.href = '/';
      // Redirect or do something upon successful login
      setMessage('Login successful!');
    } catch (error) {
      setMessage(error.message);
    }

  };
  


  return (
    <section className="text-white bg-zinc-900 h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 justify-between px-48">
      <div className="md:w-1/3 max-w-sm">
        <img
          src={RegisterImg}
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign up with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#00DF9A]"
          >
            <BiLogoFacebook
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#00DF9A]"
          >
            <AiOutlineTwitter
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-zinc-800"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 text-zinc-800"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 text-zinc-800"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 text-zinc-800"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Confirm Password"
        />
        {/* <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-[#00DF9A] hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div> */}
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-[#00DF9A] hover:bg-blue-700 px-4 py-2 uppercase rounded text-xs tracking-wider text-zinc-800"
            type="submit"
            onClick={handleLogin}
          >
            Sign Up
          </button>
          {message && <p>{message}</p>}
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#00DF9A] hover:underline hover:underline-offset-4 hover:text-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;