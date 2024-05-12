// import React from "react";
import PropertyManagentImg from "../../../assets/images/PropertyMaintenance.png";
import Button from "../../Button";
import CardWrapper from "../../CardWrapper";

const PropertyManagement = () => {
  return (
    <div className='flex flex-col-reverse sm:justify-center xl:flex-row xl:gap-x-5 w-full mb-6'>
      <div className='w-full xl:w-8/12 flex justify-center'>
        <img
          className='h-[350px] xl:h-[478px] object-contain'
          src={PropertyManagentImg}
          alt='pool'
        />
      </div>

      <div className='w-full xl:w-4/12 mb-4 xl:mb-0'>
        <CardWrapper size='3xl'>
          <div className='mb-6 xl:mb-7'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              Property Maintenance
            </h4>

            <p className='text-base leading-[18.70px] mb-2'>
              We understand that maintaining your outdoor space is essential for
              its long-term beauty. Our property maintenance services cover
              everything from regular upkeep to seasonal care, ensuring your
              landscape always looks its best.
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

export default PropertyManagement;
