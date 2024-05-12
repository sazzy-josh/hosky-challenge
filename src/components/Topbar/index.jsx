// import React from "react";
import {contactDetails} from "../../utilities/constants";

const TopBar = () => {
  return (
    <section className='bg-primaryColor py-2 xl:py-4'>
      <div className='flex flex-col md:flex-row justify-end gap-x-3 max-w-[1283px] mx-auto px-4 xl:px-0 '>
        {contactDetails?.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex items-center ${
                idx !== contactDetails.length - 1 ? "mb-1 lg:mb-0" : " "
              }`}
            >
              <img
                src={item.icon}
                alt={item.altText}
                className='mr-2 w-4 h-4 lg:w-6 lg:h-6'
              />
              <a href='#' className='text-whiteText text-sm lg:text-base'>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopBar;
