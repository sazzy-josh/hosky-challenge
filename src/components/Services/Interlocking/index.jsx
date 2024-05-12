// import React from 'react'
import Interlocking from "../../../assets/images/Interlocking.png";
import Button from "../../Button";
import CardWrapper from "../../CardWrapper";

const InterLocking = () => {
  return (
    <div className='flex flex-col sm:justify-center xl:flex-row xl:gap-x-5 w-full mb-6'>
      <div className='w-full h-full xl:w-4/12 mb-4 xl:mb-0'>
        <CardWrapper size='2xl'>
          <div className='py-10 xl:py-20'>
            <div className='mb-6 xl:mb-12'>
              <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
                Interlocking
              </h4>

              <p className='text-base leading-[18.70px]'>
                Our landscaping and hardscaping services encompass a range of
                options to enhance the beauty and functionality of your outdoor
                space, including:
              </p>
            </div>

            <Button actionBtnText='LEARN MORE' />
          </div>
        </CardWrapper>
      </div>

      <div className='w-full xl:w-8/12 flex justify-center'>
        <img
          className='h-[350px] xl:h-[478px] object-cover rounded-3xl'
          src={Interlocking}
          alt='interlocking'
        />
      </div>
    </div>
  );
};

export default InterLocking;
