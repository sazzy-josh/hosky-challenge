// import React from "react";
import Slider from "react-slick";
import {settings, sliderImages} from "../../utilities/constants";

const SlideShow = () => {
  return (
    <section className='bg-bgColor pb-10'>
      <div className='max-w-[1283px] mx-auto px-4 xl:px-0 py-12 '>
        <Slider {...settings}>
          {sliderImages.map((img, idx) => {
            return (
              <>
                <div className='px-2 overflow-hidden' key={idx}>
                  <img
                    src={img}
                    alt={img}
                    className='h-[400px] rounded-2xl object-cover'
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SlideShow;
