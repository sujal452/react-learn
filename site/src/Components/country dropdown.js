import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const CountryDropdown = () => {
  return (
    <>
      <button className="countrydrop">
        <div className="d-flex flex-col info">
          <span>Your Location:</span>
          <span>India</span>
          <span className="ML0"><FaAngleDown /></span>
        </div>
      </button>
    </>
  );
};

export default CountryDropdown;
