import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGoogle, faInstagram, faSkype } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  return (
    <div>
      <span className='a0'>Abu Hurairah</span>
      <span className='a1'>
        <span className='a2'><FontAwesomeIcon icon={faYoutube} /></span>
        <span className='a2'><FontAwesomeIcon icon={faGoogle} /> </span>
        <span className='a2'><FontAwesomeIcon icon={faInstagram} /> </span>
        <span className='a2'><FontAwesomeIcon icon={faSkype} /> </span>
      </span>
    </div>
  );
};

export default Nav;
