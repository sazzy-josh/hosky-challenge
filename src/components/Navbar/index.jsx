// import React from 'react'
import {navItems} from "../../utilities/constants";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <section className='max-w-[1283px] mx-auto'>
      {/* DESKTOP NAVIGATION */}
      <div className='w-full items-center py-5 xl:py-7 hidden xl:flex'>
        <header className='flex justify-between w-6/12'>
          {navItems.map((item, idx) => {
            return (
              <a
                href='#'
                key={idx}
                className={`${
                  item.isActive ? "font-bold text-primaryColor" : "text-grey"
                } text-base hover:font-bold text-primaryColor`}
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
