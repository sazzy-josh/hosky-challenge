// import React from 'react'
import {NavItems} from "../../utilities/constants";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <section className='max-w-[1283px] mx-auto hidden xl:block'>
      <div className='w-full flex items-center py-5 xl:py-7'>
        <header className='flex justify-between w-6/12'>
          {NavItems.map((item, idx) => {
            return (
              <a
                href='#'
                key={idx}
                className={`${
                  item.isActive ? "font-bold text-primaryColor" : "text-grey"
                } text-base`}
              >
                {item.text}
              </a>
            );
          })}
        </header>

        <img
          src={Logo}
          alt='company_logo'
          className='ml-auto'
          width={58}
          height={58}
        />
      </div>
    </section>
  );
};

export default Navbar;
