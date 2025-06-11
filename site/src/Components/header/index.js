import React from 'react';
import CountryDropdown from './CountryDropdown'; // Ensure correct path to CountryDropdown.js

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='top-strip bg-blue'>
        <div className='container'>
          <p className='mt-0 mb-0 text-center'>
            Due to ....... <b>COVID</b>...
          </p>
        </div>
      </div>

      <div className='header'>
        <div className='container'>
          <div className='row'>
            <div className='logoWrapper d-flex align-items-center col-sm-2'>
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <div className='align-items-center sm-10 part2 d-flex'>
              <CountryDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
