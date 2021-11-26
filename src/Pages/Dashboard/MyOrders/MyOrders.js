import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch('https://sheltered-gorge-39495.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setAllOrder(data))
      }, []);

      // handler for delete order button
    const handleDeleteOrder = id => {
        axios.delete(`https://sheltered-gorge-39495.herokuapp.com/orders/${id}`, id)
        .then(res => {
          const proceed = window.confirm('Are you sure you want to Delete');
              if(proceed) {
              
              const remaining = allOrder.filter(order => order._id !== id);
              setAllOrder(remaining);
              alert(' order deleted');
            }
        })
      }

      const matchedEmail = allOrder.filter(email => email.email === user.email);
    return (
        <div>
            <h2>My Orders</h2>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">User Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {matchedEmail.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
<TableCell align="right">
  <Button onClick={()=>handleDeleteOrder(row._id)}><DeleteIcon /></Button>
</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
        </div>
    );
};

export default MyOrders;