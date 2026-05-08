import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import { notFound } from "next/navigation";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsRes");

  const categories = await getCategories();
  const isValidCategory = categories.news_category.some(cat => cat.category_id === id);

  if (!isValidCategory) {
    notFound();
  }

  const news = await getNewsByCategoryId(id);

  if (news.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className=" col-span-6">
        <h2 className="font-bold text-lg">News by category</h2>
        <div className="space-y-4 mt-6">
          {/* News cards  */}
          {news.map((n) => {
            return <NewsCard key={n._id} news={n}></NewsCard>;
          })}
        </div>
      </div>

      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
