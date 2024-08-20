import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

export default function Navbar() {

  const{dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search...'/>
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon className='icon'/>
          English
          </div>
          <div className="item">
          <LightModeIcon className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
          <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
          <NotificationsNoneIcon className='icon'/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ChatBubbleOutlineIcon className='icon'/>
          <div className="counter">2</div>
          </div>
          <div className="item">
          <ListIcon className='icon'/>
          </div>
          <div className="item">
          <img 
          src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg"
          alt=""
          className='avatar'
          />
          </div>
        </div>
      </div>
    </div>
  )
}
