// import React from "react";
import {TopbarItems} from "../../utilities/constants";

const TopBar = () => {
  return (
    <section className='bg-primaryColor py-4'>
      <div className='flex justify-end gap-x-3 max-w-[1283px] mx-auto'>
        {TopbarItems?.map((item, idx) => {
          return (
            <div key={idx} className='flex items-center '>
              <img
                src={item.icon}
                alt={item.altText}
                width={24}
                height={24}
                className='mr-2'
              />
              <a href='#' className='text-whiteText text-base'>
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
