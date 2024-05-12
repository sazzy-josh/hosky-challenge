// import React from "react";
import PropTypes from "prop-types";

const Button = ({actionBtnText, handleClick}) => {
  return (
    <button
      className='rounded-full bg-primaryColor text-[#EBECED] w-auto cursor-pointer px-6 xl:px-10 py-2 xl:py-3'
      onClick={handleClick}
    >
      {actionBtnText}
    </button>
  );
};

Button.propTypes = {
  actionBtnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
