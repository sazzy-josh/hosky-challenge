// import React from "react"

import GeneralContractingImg from "../../../assets/images/GeneralContracting.png";
import Button from "../../Button";
import CardWrapper from "../../CardWrapper";

const GeneralContracting = () => {
  return (
    <div className='flex flex-col-reverse sm:justify-center xl:flex-row xl:gap-x-5 w-full'>
      <div className='w-full xl:w-8/12 flex justify-center'>
        <img
          className='h-[350px] xl:h-[478px] object-contain'
          src={GeneralContractingImg}
          alt='pool'
        />
      </div>

      <div className='w-full xl:w-4/12 mb-4 xl:mb-0'>
        <CardWrapper size='3xl'>
          <div className='mb-6 xl:mb-7'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              General Contracting
            </h4>

            <p className='text-base leading-[18.70px] mb-2'>
              From planning to execution, we manage every aspect of your project
              with precision to help ensure a seamless experience
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

export default GeneralContracting;
