import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

export default function Home() {
  return (
    
    <div className='home'>
       <Sidebar/>
       <div className="homeContainer">
       <Navbar/>
        <div className="widgets">
         <Widget type="user"/>
         <Widget type="appointments"/>
         <Widget type="earning"/>
         <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title={"Last 6 months (Revenue)"}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Appointments</div>
          <Table/>
        </div>
        </div>
    </div>
   
   
  )
}
