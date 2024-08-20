import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

export default function Sidebar() {

    const{dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
            <img src={Logo} alt=""/>
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logoTitle">Collin It Solution</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration:"none"}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/customers" style={{textDecoration:"none"}}>
                <li>
                    <GroupIcon className='icon'/>
                    <span>Customers</span>
                </li>
                </Link>
                <Link to="/services" style={{textDecoration:"none"}}>
                <li>
                    <Inventory2Icon className='icon'/>
                    <span>Services</span>
                </li>
                </Link>
                <li>
                    <NoteAltIcon className='icon'/>
                    <span>Appointments</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <InsertChartIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notification</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                    <ExitToAppIcon className='icon'/>
                    <span>Log Out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}
