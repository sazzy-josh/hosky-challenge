// import React from "react";
import ArrowDown from "../../assets/svg/arrow-down.svg";
import {useEffect, useRef} from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import Check from "../../assets/svg/check.svg";

const DropDown = ({
  dropdownItems,
  width,
  bgColor,
  closeOnClick = false,
  selectedItem,
  handleSelectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = (item) => {
    handleSelectedItem(item);
    if (closeOnClick) {
      setIsOpen(false);
    }
  };

  const showDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        className='flex justify-center items-center font-medium w-auto rounded-md border text-xs xl:text-base border-primaryColor px-3 py-1 md:py-3'
        onClick={showDropdown}
        style={{
          width,
          backgroundColor: bgColor,
        }}
      >
        {selectedItem.text}{" "}
        <img
          src={ArrowDown}
          alt='arrow down'
          className={`w-6 h-6 ml-auto duration-200 ease-linear ${
            isOpen ? " rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`absolute mt-2  w-auto bg-white border-primaryColor rounded shadow-lg z-10 transition duration-200 ease-linear ${
          isOpen ? "translate-y-0" : "-translate-y-2"
        }`}
        style={{
          width,
          backgroundColor: bgColor,
        }}
      >
        {isOpen ? (
          <div className='p-2  top-0'>
            {dropdownItems?.map((item, idx) => (
              <div key={idx}>
                <button
                  className={`flex items-center px-4 py-2 hover:bg-blue-100 text-gray w-full text-xs xl:text-base ${
                    selectedItem.value === item.value
                      ? "bg-blue-100 text-black"
                      : ""
                  }`}
                  onClick={() => handleClick(item)}
                >
                  <div className='w-1/12'>
                    {selectedItem.value === item.value ? (
                      <img src={Check} alt='check' className='w-4 h-4' />
                    ) : null}
                  </div>
                  <p
                    className={`ml-3 w-11/12 text-left ${
                      selectedItem.value === item.value ? "font-medium" : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </button>
                {dropdownItems.length - 1 !== idx ? <hr /> : null}
              </div>
            ))}{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

DropDown.propTypes = {
  dropdownItems: PropTypes.array.isRequired,
  width: PropTypes.string,
  bgColor: PropTypes.string,
  closeOnClick: PropTypes.bool,
  selectedItem: PropTypes.object,
  handleSelectedItem: PropTypes.func,
};

export default DropDown;
