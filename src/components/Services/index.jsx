// import React from "react";
import LeftArrow from "../../assets/svg/left-arrow.svg";

const ServicesLayout = () => {
  return (
    <section className='bg-[#F9F9F9] '>
      <div className='max-w-[1283px] mx-auto'>
        <div className='flex justify-between text-base pt-8'>
          <div className='flex items-center '>
            <img src={LeftArrow} width={24} height={24} alt='arrow' />
            <p className='ml-2 text-[#373632]'>Return</p>
          </div>

          <p className='text-[#565450]'>Home / Services</p>
        </div>

        <h3 className='text-darkText text-2xl pt-9 font-medium'>Services</h3>

        <div className='py-16'>
          <h2 className='text-darkText font-bold text-4xl mb-4 leading-[46px]'>
            Explore Our Diverse{" "}
            <span className='text-primaryColor'>Outdoor Services</span>
          </h2>

          <p className='text-darkText text-base'>
            At RC Stone Inc., we take pride in offering a spectrum of services
            designed to cater to all your outdoor needs. From innovative
            landscaping to meticulous snow removal, seamless pool installations,
            and expert contracting – our services redefine what&apos;s possible
            for your outdoor spaces. Dive into our offerings and let us bring
            your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesLayout;
