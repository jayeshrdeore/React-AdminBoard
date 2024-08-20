import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function List() {

    const rows = [
        {
            id:1143155,
            product:"Hair Cut",
            img:"https://images.unsplash.com/photo-1630563232703-bdd4e2c11e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8&w=1000&q=80",
            customer:"Rahul Sharma",
            date:"12 April",
            billAmount:"400",
            method:"Cash",
            status:"Approved"
        },
        {
            id:1143156,
            product:"Facial",
            img:"https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80",
            customer:"Nikita Rathi",
            date:"11 April",
            billAmount:"800",
            method:"Card",
            status:"Approved"
        },
        {
            id:1143157,
            product:"Hair Wash",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeM-glPMZ0h9NBLpAHeT2fLM7jKHohJQKBvw&usqp=CAU",
            customer:"Tanmay Rathod",
            date:"9 April",
            billAmount:"300",
            method:"Cash",
            status:"Approved"
        },
        {
            id:1143158,
            product:"Make Over",
            img:"https://latestforyouth.com/wp-content/uploads/2022/04/Indian-Girl-Images-042201.jpg",
            customer:"Aditi Mishra",
            date:"5 April",
            billAmount:"1200",
            method:"Card",
            status:"Pending"
        },
    ]



  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Customer Id</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Bill Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
            <TableCell className='tableCell' > {row.id}</TableCell>
            <TableCell className='tableCell' > 
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image' />
                    {row.customer}
                </div>
            </TableCell>
              <TableCell className='tableCell'>{row.product}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.billAmount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
