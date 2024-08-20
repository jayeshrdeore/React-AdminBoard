import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Datatable() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn =[
    {field:'action',headerName:'Action',width:150,
    renderCell:(params) => {
    return(
      <div className='cellAction'>
        <Link to="/customers/test" style={{textDecoration:"none"}}>
        <div className="viewButton">View</div>
        </Link>
        <div 
          className="deleteButton"  
          onClick={() => handleDelete(params.row.id)}>
            Delete</div>
      </div>
    )
  }}]

return (
    <div className='datatable'>
      <div className="datatableTitle">
         Add New Customers
        <Link to="/customers/new" className='link'>
          Add New
        </Link>
      </div>
        
      <DataGrid
      className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
   
    </div>
  )
}
