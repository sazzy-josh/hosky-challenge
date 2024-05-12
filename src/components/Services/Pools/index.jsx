// import React from "react";
import PoolImg from "../../../assets/images/Pools.png";
import Button from "../../Button";
import CardWrapper from "../../CardWrapper";

const Pools = () => {
  return (
    <div className='flex flex-col sm:justify-center xl:flex-row xl:gap-x-5 w-full mb-6'>
      <div className='w-full xl:w-4/12 mb-4 xl:mb-0'>
        <CardWrapper size='3xl'>
          <div className='mb-2 xl:mb-7'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              Pools
            </h4>

            <p className='text-base leading-[18.70px]'>
              Elevate your outdoor living experience with our comprehensive pool
              services, including:
            </p>
          </div>

          <div className='mb-2 xl:mb-7'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              Full Installation
            </h4>

            <p className='text-base leading-[18.70px]'>
              We specialize in creating and installing stunning pools that
              perfectly complement your landscape and personal style.
            </p>
          </div>

          <div className='mb-6 xl:mb-8'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              Renovations
            </h4>

            <p className='text-base leading-[18.70px]'>
              If you have an existing pool that needs a fresh, modern look or
              functionality upgrade, our pool renovation service can revamp an
              outdated style.
            </p>
          </div>

          <div className='mb-6'>
            <Button actionBtnText='LEARN MORE' />
          </div>
        </CardWrapper>
      </div>

      <div className='w-full xl:w-8/12 flex justify-center'>
        <img
          className='h-[350px] xl:h-[555px] object-cover rounded-3xl'
          src={PoolImg}
          alt='pool'
        />
      </div>
    </div>
  );
};

export default Pools;
