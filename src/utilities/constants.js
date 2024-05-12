import sendSvg from "../assets/svg/send.svg";
import phone from "../assets/svg/phone.svg";
import instagram from "../assets/svg/instagram.svg";
import slideImg1 from "../assets/images/slideImg6.png";
import slideImg2 from "../assets/images/slideImg2.png";
import slideImg3 from "../assets/images/slideImg3.png";
import slideImg4 from "../assets/images/Pools.png";
import slideImg5 from "../assets/images/PropertyMaintenance.png";

export const contactDetails = [
  {
    icon: sendSvg,
    text: "rcstone2@icloud.com",
    altText: "sendIcon",
  },
  {
    icon: phone,
    text: "(437) 703-0737",
    altText: "phoneIcon",
  },
  {
    icon: instagram,
    text: "@rcstone2",
    altText: "instagramIcon",
  },
];

export const navItems = [
  {text: "HOME", isActive: false},
  {text: "ABOUT US", isActive: true},
  {text: "SERVICES", isActive: false},
  {text: "CONTACT", isActive: false},
  {text: "PROJECTS", isActive: false},
];

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const sliderImages = [
  slideImg1,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
];
