import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import swimming from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playground from "@/assets/playground.png";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">All categories</h2>

      <ul className="flex flex-col gap-3 mt-6">

        {categories.news_category.map((category) => {
          return (

            <li
              key={category.category_id}
              className={`

                ${activeId === category.category_id && "bg-purple-500 text-white"}
                  rounded-md font-bold text-center text-md`}
            >
              <Link
                href={`/category/${category.category_id}`}
                
                className="block  p-2"
              >
                {" "}
                {category.category_name}
              </Link>
            </li>
          );
        })} 
      </ul>

      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4">Latest News</h2>
        <div className="space-y-4">
          <div className="card bg-base-100 shadow-sm p-4">
            <Image src={swimming} alt="Swimming" width={200} height={150} className="rounded" />
            <p className="mt-2 text-sm">Bayern slams authorities over Flight delay to club world cup then sports</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <FaCalendar />
              <span>2023-08-24</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm p-4">
            <Image src={classImg} alt="Class" width={200} height={150} className="rounded" />
            <p className="mt-2 text-sm">Class activities and educational updates from the school</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <FaCalendar />
              <span>2023-08-25</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm p-4">
            <Image src={playground} alt="Playground" width={200} height={150} className="rounded" />
            <p className="mt-2 text-sm">Playground improvements and community events</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <FaCalendar />
              <span>2023-08-26</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
