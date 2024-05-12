// import React from "react";
import LandScapingImg from "../../../assets/images/Landscaping.png";
import Button from "../../Button";
import CardWrapper from "../../CardWrapper";

const Landscaping = () => {
  return (
    <div className='flex flex-col sm:justify-center xl:flex-row xl:gap-x-5 w-full mb-6'>
      <div className='w-full xl:w-4/12 mb-4 xl:mb-0'>
        <CardWrapper size='2xl'>
          <div className='mb-2 xl:mb-5'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              <p className='hidden xl:block'>
                Landscaping <br /> & Hardscaping{" "}
              </p>
              <p className='block xl:hidden'>Landscaping & Hardscaping </p>
            </h4>

            <p className='text-base leading-[18.70px]'>
              Our landscaping and hardscaping services encompass a range of
              options to enhance the beauty and functionality of your outdoor
              space, including:
            </p>
          </div>

          <div className='mb-2 xl:mb-5'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              Turf Installation
            </h4>

            <p className='text-base leading-[18.70px]'>
              Achieve the green lawn you've always desired with our expert turf
              installation
            </p>
          </div>

          <div className='mb-6 xl:mb-5'>
            <h4 className='font-medium text-darkText text-xl xl:text-2xl leading-[20px] lg:leading-[28px] mb-3'>
              SOD Installation
            </h4>

            <p className='text-base leading-[18.70px]'>
              When you need quick and reliable results, our sod installation
              service is the perfect choice. We'll provide you with an instant,
              healthy lawn that's ready to enjoy
            </p>
          </div>

          <div>
            <Button actionBtnText='LEARN MORE' />
          </div>
        </CardWrapper>
      </div>

      <div className='w-full xl:w-8/12 flex justify-center'>
        <img
          className='h-[350px] xl:h-[555px] object-cover rounded-3xl'
          src={LandScapingImg}
          alt='landscaping'
        />
      </div>
    </div>
  );
};

export default Landscaping;
