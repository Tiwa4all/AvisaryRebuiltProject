import React from 'react'
import {FaEllipsisV} from 'react-icons/fa'



const Menu = ({onClick}) => {
  return (
    <div>
      <FaEllipsisV className='menu-icon'onClick={onClick}/>
      {/* <FaTimes className='menu-icon close'onClick={onClick}/> */}

    </div>
  )
}

export default Menu
