import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupIcon from '@mui/icons-material/Group';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Widget({type}) {

let data;

const amount= 100
const diff = 20

switch(type){
    case "user":
        data={
            title:"CUSTOMERS",
            isMoney:false,
            link:"See all customers",
            icon:(
                <GroupIcon 
                className='icon'
                 style={{color:'crimson',
                 backgroundColor:"rgba(255,0,0,0.2)"
                 }}/>
            )
        };
        break;
        case "appointments":
        data={
            title:"APPOINTMENTS",
            isMoney:false,
            link:"See all appointments",
            icon:(
                <NoteAltIcon 
                className='icon'
                style={{color:'goldenrod',
                backgroundColor:"rgba(218,165,32,0.2)"
                }}
                />
            )
        };
        break;
        case "earning":
        data={
            title:"EARNINGS",
            isMoney:true,
            link:"View net earnings",
            icon:(
                <CurrencyRupeeIcon 
                className='icon'
                style={{color:'green',
                 backgroundColor:"rgba(0,128,0,0.2)"
                 }}
                />
            )
        };
        break;
        case "balance":
        data={
            title:"BALANCE",
            isMoney:true,
            link:"See details",
            icon:(
                <AccountBalanceWalletIcon 
                className='icon'
                style={{color:'purple',
                 backgroundColor:"rgba(128,0,128,0.2)"
                 }}
                />
            )
        };
        break;
        default:
            break;
}


  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "₹"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}%
        </div>
            {data.icon}
        </div>
    </div>
  )
}
