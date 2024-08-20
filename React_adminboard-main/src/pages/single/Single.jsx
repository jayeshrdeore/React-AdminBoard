import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

export default function Single() {
  return (
    <div className='single'>
       <Sidebar/>
       <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img className='itemImg' src="https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg" alt="" srcset="" />
              <div className="details">
                <h1 className="itemTitle">Aditi Sharma</h1>
                <div className="detailItem">
                  <span className="itemKey">Email :</span>
                  <span className="itemValue">aditisharma@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemValue">+91 8080120538</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemValue">Aura City, Sikhrapur, Pune</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country :</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="Customer Appointments (Previous)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Appointments</h1>
          <List/>
        </div>
        </div> 
     </div>
  )
}
