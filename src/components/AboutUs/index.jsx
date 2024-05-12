// import React from "react";

import Button from "../Button";

const AboutUs = () => {
  return (
    <section className='bg-bgColor'>
      <div className='max-w-[1283px] mx-auto px-4 xl:px-0 py-10 xl:py-20 text-center'>
        <div className='max-w-[804px] mx-auto'>
          <h3 className='text-3xl xl:text-4xl font-medium mb-4 xl:mb-8'>
            Your perfect lawn is{" "}
            <span className='text-primaryColor font-bold'>
              awaiting for you
            </span>
          </h3>
        </div>
        <div className='max-w-[650px] mx-auto'>
          <p className='text-md xl:text-xl text-darkText mb-4 xl:mb-8 font-normal'>
            With RC Stone Inc., you'll find tailored solutions for all your
            outdoor needs, whether it's ensuring your commercial property
            remains accessible during winter, creating the pool of your dreams,
            or enhancing the appeal of your outdoor space through landscaping
            and hardscaping. We have the expertise and dedication to exceed your
            expectations
          </p>

          <p className='text-md xl:text-xl text-darkText mb-4 xl:mb-8'>
            We invite you to explore our portfolio, read our client
            testimonials, and get inspired by our past projects. At RC Stone
            Inc., we believe that every landscape has a story to tell, and we're
            here to help you write yours. Let's embark on a journey to transform
            your outdoor space into a masterpiece that reflects your unique
            style and personality.
          </p>

          <Button actionBtnText='CONTACT US' />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
