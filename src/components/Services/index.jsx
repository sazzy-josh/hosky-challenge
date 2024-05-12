// import React from "react";
import LeftArrow from "../../assets/svg/left-arrow.svg";
import GeneralContracting from "./GeneralContracting";
import InterLocking from "./Interlocking";
import Landscaping from "./Landscaping";
import Pools from "./Pools";
import PropertyManagement from "./PropertyManagement";
import SnowRemoval from "./SnowRemoval";

const ServicesLayout = () => {
  return (
    <section className='bg-[#EBEDEC]'>
      <div className='max-w-[1283px] mx-auto px-4 xl:px-0'>
        <div className='flex justify-between text-base pt-4 xl:pt-8'>
          <div className='flex items-center '>
            <img
              src={LeftArrow}
              className='w-4 h-4 xl:w-6 xl:h-6'
              alt='arrow'
            />
            <p className='ml-2 text-[#373632]'>Return</p>
          </div>

          <p className='text-[#565450]'>Home / Services</p>
        </div>

        <h3 className='text-darkText text-xl xl:text-2xl pt-5 xl:pt-9 font-medium'>
          Services
        </h3>

        <div className='py-8 xl:py-16'>
          <h2 className='text-darkText font-bold text-3xl xl:text-4xl mb-4 leading-[35px] xl:leading-[46px]'>
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

        {/* LANDSCAPING SERVICES*/}
        <Landscaping />
        {/* SNOW REMOVAL SERVICES*/}
        <SnowRemoval />
        {/* POOL SERVICES*/}
        <Pools />
        {/* PROPERTY MANAGEMENT SERVICES*/}
        <PropertyManagement />
        {/* INTERLOCKING SERVICES*/}
        <InterLocking />
        {/* GENERAL CONTRACTING SERVICES*/}
        <GeneralContracting />
      </div>
    </section>
  );
};

export default ServicesLayout;
