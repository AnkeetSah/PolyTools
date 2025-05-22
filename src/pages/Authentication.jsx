import React, { useState } from 'react';

const Authentication = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <main className="flex flex-col items-center  h-full py-3  bg-gray-100 min-h-screen">
     <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-[95dvh] w-[90vw] lg:w-[70dvw] border border-purple-400 p-4 rounded-2xl shadow-lg bg-white">

        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 h-auto lg:h-full p-2">

          <h1 className="text-xl font-bold text-black mb-0.5">
            {isSignup ? 'Create Your Account 🚀' : 'Welcome to Ultimate 👋'}
          </h1>
          <p className="text-sm text-gray-500 mb-1.5">
            {isSignup
              ? 'Join us and unlock powerful tools — just one step away!'
              : 'No more switching tabs — just solutions. Sign in and start using Ultimate Utils.'}
          </p>

          <form className="mt-2">
            {isSignup && (
              <div className="flex flex-col gap-1 mt-1">
                <label htmlFor="name" className="text-sm text-gray-800 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-xl outline-none p-2"
                />
              </div>
            )}

            <div className="flex flex-col gap-1 mt-2">
              <label htmlFor="email" className="text-sm text-gray-800 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-xl outline-none p-2"
              />
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <label htmlFor="password" className="text-sm text-gray-800 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded-xl outline-none p-2"
              />
            </div>

            {!isSignup && (
              <div className="text-right mt-1 text-blue-900 text-sm">
                <span className="cursor-pointer font-semibold">Forgot Password?</span>
              </div>
            )}

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white cursor-pointer rounded-md p-2 mt-3 w-full"
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <hr className="w-full border-gray-400" />
            <span className="text-sm text-gray-500">or</span>
            <hr className="w-full border-gray-400" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col items-center justify-center gap-2 mt-3">
            <button className="bg-gray-200 hover:bg-white w-full text-[15px] p-2 border border-gray-300 rounded-xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
              <img
                className="w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google Icon"
              />
              Sign in With Google
            </button>

            <button className="bg-gray-200 hover:bg-white w-full text-[15px] p-2 border border-gray-300 rounded-xl flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
              <img
                className="w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                alt="GitHub Icon"
              />
              Sign in With GitHub
            </button>
          </div>

          {/* Toggle between Sign In / Sign Up */}
          <h3 className="mt-3 text-center text-gray-900 text-sm">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              className="text-blue-900 font-semibold cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Sign In' : 'Sign Up'}
            </span>
          </h3>
        </div>

        {/* Right Side: Illustration */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto-2">

          <img
            className="h-full rounded-2xl w-full object-cover"
            src="https://images.pexels.com/photos/14774682/pexels-photo-14774682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hero Illustration"
          />
        </div>
      </div>
    </main>
  );
};

export default Authentication;
