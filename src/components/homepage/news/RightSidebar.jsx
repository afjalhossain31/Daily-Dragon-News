import React from "react";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import swimming from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playground from "@/assets/playground.png";

const RightSidebar = () => {
  return (
    <div className="ml-4">

      <h2 className="font-bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-2">

        <button className="btn text-blue-500 flex items-center justify-center gap-2 border border-blue-500 rounded">
          <FaGoogle />Login with google
        </button>

        <button className="btn text-gray-500 flex items-center justify-center gap-2 border border-gray-500 rounded"><FaGithub />Login with github
        </button>
      </div>

      <h2 className="font-bold text-lg mb-4 mt-6">Find Us On</h2>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2 border border-blue-600 rounded p-2 cursor-pointer">
          <FaFacebook className="text-blue-600" />
          <span>Facebook</span>
        </div>
        <div className="flex items-center justify-center gap-2 border border-blue-400 rounded p-2 cursor-pointer">
          <FaTwitter className="text-blue-400" />
          <span>Twitter</span>
        </div>
        <div className="flex items-center justify-center gap-2 border border-pink-500 rounded p-2 cursor-pointer">
          <FaInstagram className="text-pink-500" />
          <span>Instagram</span>
        </div>

        {/* images swimming, class, playground */}
      </div>
      <h2 className="font-bold text-lg mb-4 mt-6">Q-Zone</h2>
      <div className="flex flex-col gap-4 bg-gray-200 p-4 rounded">
        <Image src={swimming} alt="Swimming" width={300} height={200} className="rounded" />
        <Image src={classImg} alt="Class" width={300} height={200} className="rounded" />
        <Image src={playground} alt="Playground" width={300} height={200} className="rounded" />
      </div>

    </div>
  );
};

export default RightSidebar;
