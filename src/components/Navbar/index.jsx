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

      {/* MOBILE NAVIGATION */}
      {/* <>
        <div className='flex items-center justify-between xl:hidden py-4 px-4 xl:px-0'>
          <img
            src={Logo}
            alt='company_logo'
            className='mr-auto'
            width={40}
            height={40}
          />

          <img
            src={MenuIcon}
            alt='menuIcon'
            className='ml-auto'
            width={45}
            height={45}
          />
        </div>
      </> */}
    </section>
  );
};

export default Navbar;
