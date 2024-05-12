// import React from 'react'
// import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <section className='bg-primaryColor py-2 xl:py-4'>
        <div className='max-w-[1283px] mx-auto px-4 xl:px-0 '>
          <div className='flex flex-col xl:flex-row'>
            <div className='w-full xl:w-4/12'>A</div>
            <div className='w-full xl:w-4/12'>B</div>
            <div className='w-full xl:w-4/12'>C</div>
          </div>
        </div>
      </section>

      <section>© 2023, RC Stone Inc., All Rights Reserved.</section>
    </footer>
  );
};

export default Footer;
