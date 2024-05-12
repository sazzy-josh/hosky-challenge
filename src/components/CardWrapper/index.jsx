// import React from "react";
import PropTypes from "prop-types";

const CardWrapper = ({children}) => {
  return (
    <div
      className={`bg-white px-6 xl:px-12 py-8 xl:py-12 rounded-3xl h-full flex flex-col justify-center`}
    >
      {children}
    </div>
  );
};

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardWrapper;
