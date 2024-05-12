// eslint-disable-next-line no-unused-vars
import React from "react";
import SnowImg from "../../../assets/images/SnowRemoval.png";
import Button from "../../Button";
import CardWrapper from "../../CardWrapper";

const SnowRemoval = () => {
  return (
    <div className='flex flex-col-reverse sm:justify-center xl:flex-row xl:gap-x-5 w-full mb-6'>
      <div className='w-full xl:w-8/12 flex justify-center'>
        <img
          className='h-[350px] xl:h-[478px] object-cover rounded-3xl'
          src={SnowImg}
          alt='pool'
        />
      </div>

      <div className='w-full xl:w-4/12 mb-4 xl:mb-0'>
        <CardWrapper size='3xl'>
          <div className='mb-6 xl:mb-7'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              Snow Removal
            </h4>

            <p className='text-base leading-[18.70px] mb-2'>
              Our efficient snow removal services are exclusively tailored to
              meet the needs of commercial properties. We ensure that your
              business remains accessible and safe during even the harshest
              winter weather conditions.
            </p>

            <p className='text-base leading-[18.70px]'>
              Please note that we do not provide snow removal for residential
              properties.
            </p>
          </div>

          <div className='mb-6'>
            <Button actionBtnText='LEARN MORE' />
          </div>
        </CardWrapper>
      </div>
    </div>
  );
};

export default SnowRemoval;
