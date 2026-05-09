"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (data) => {
        console.log(data, "data");


        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res, error);

        if (error) {
            alert(error.message);
        }


        if (res) {
            alert("Signin successful");
        }
    };


    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
            <div className="p-4 rounded-xl bg-white">
                <h2 className="font-bold text-3xl text-center mb-6">
                    Login your account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>


                    {/* Email field */}
                    <div className="form-control mb-6">
                        <label className="label mb-2">
                            <span className="label-text font-bold ">Email address</span>
                        </label>

                        <input
                            type="email"
                            className="text-gray-500 text-sm  w-full px-3 py-2 border border-gray-500  rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Enter your email address"
                            {...register("email", {
                                required: "Email field is required",
                            })}
                        />
                        
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password field */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>

                        <div className="relative">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                className="text-gray-500 text-sm mb-2 w-full px-3 py-2 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter your password"
                                // hook up with react hook form
                                {...register("password", {
                                    required: "Password field is required",
                                })}
                            />
                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    {/* login button */}
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>

                {/* Don't have an account? */}
                <p className="mt-4">
                    Don&apos;t have an account?{" "}
                    <Link href={"/register"} className="text-blue-500">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;