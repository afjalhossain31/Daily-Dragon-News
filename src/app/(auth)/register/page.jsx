"use client";
import { authClient } from "../../../lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    console.log(data, "data");
    const { email, name, photo, password } = data;
    console.log(name, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      // image: photo, // temporarily disabled
      callbackURL: "/",
    });

    console.log(res, error);
    if (error) {
      alert(error.message);
      return;
    }

    if (res) {
      // After successful sign up, sign in the user
      const { data: signInRes, error: signInError } = await authClient.signIn.email({
        email: email,
        password: password,
        callbackURL: "/",
      });

      if (signInError) {
        alert("Signup successful, but sign in failed: " + signInError.message);
      } else {
        alert("Signup and sign in successful");
      }
    }
  };

  return (

    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-xl bg-white shadow-md max-w-md w-full">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          {/* Name field (no fieldset border, only input border, gray text & placeholder) */}
          <fieldset className="p-1">
            <legend className="text-sm font-semibold text-gray-700 px-2 mb-1">
              Name 
            </legend>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm text-gray-500 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name field is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </fieldset>

          {/* Photo URL (no outer border, only input border, gray placeholder) */}
          <fieldset className="p-1">
            <legend className="text-sm font-semibold text-gray-700 px-2 mb-1">
              Photo URL
            </legend>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter photo URL"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>
            )}
          </fieldset>

          {/* Email (no outer border, only input border, gray placeholder) */}
          <fieldset className="p-1">
            <legend className="text-sm font-semibold text-gray-700 px-2 mb-1">
              Email
            </legend>
            <input
              type="email"
              className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </fieldset>

          {/* Password (no outer border, only input border, gray placeholder, icon centered right) */}
          <fieldset className="p-1 relative">
            <legend className="text-sm font-semibold text-gray-700 px-2 mb-1">
              Password
            </legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </fieldset>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-slate-800 text-white rounded font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>


  );
};

export default RegisterPage;