import React, { useState } from 'react'

import { logo, sun } from '../assets';
import {navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`}>
      {!isActive 
        ? (<img src={imgUrl} alt="fund_logo" className='w-1/2 h-1/2' />)
        : (<img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />)
      } 
  </div>
)

const Sidebar = () => {
  // const navigate = useNavigate();

  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className='flex justify-between item-scenter flex-col sticky top-5 h-[93vh]'>
      <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
    </div>
  )
}

export default Sidebar;