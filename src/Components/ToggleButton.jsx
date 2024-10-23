import React from 'react'
import menu from '../assets/menu.png';
const ToggleButton = ({onBtnClick}) => {
  return (
   <button onClick={() => {onBtnClick() }} className='w-[50px] h-[50px] rounded-full fixed top-5 left-5 bg-transparent border-none text-black  '><img className='w-10' src = {menu} /></button>
  )
}

export default ToggleButton
