import React from 'react'
import budgetTracker from "../../public/assets/portfolio/budgetTracker.jpg";
import searchBooks from "../../public/assets/portfolio/searchBooks.jpg";
import techBlog from "../../public/assets/portfolio/techBlog.jpg";

import Image from "next/image";
import Link from "next/link";

const OnePortfolio = () => {
    const portfolios = [
        {
          id: 1,
          title: "budget tracker",
          imageSrc: budgetTracker,
          url: "budget-tracker",
        },
        {
          id: 2,
          title: "google search book",
          imageSrc: searchBooks,
          url: "google-book-search",
        },
        {
          id: 3,
          title: "tech blog",
          imageSrc: techBlog,
          url: "tech-blog",
        },
      ];
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto text-center pt-24 p-4 md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-110"
                />

                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OnePortfolio