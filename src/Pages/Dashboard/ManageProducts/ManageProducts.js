import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
      fetch('https://sheltered-gorge-39495.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setAllProducts(data))
    }, []);

    // handler for delete order button
    const handleDeleteOrder = id => {
      axios.delete(`https://sheltered-gorge-39495.herokuapp.com/products/${id}`, id)
      .then(res => {
        const proceed = window.confirm('Are you sure you want to Delete');
            if(proceed) {
            
            const remaining = allProducts.filter(order => order._id !== id);
            setAllProducts(remaining);
            alert(' product deleted');
          }
      })
    }
    
    return (
        <div>
            <h2>Manage All Products</h2>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Description</TableCell>
            
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {allProducts.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.desc}</TableCell>
              
<TableCell align="right">
  <Button onClick={()=>handleDeleteOrder(row._id)}><DeleteIcon/></Button>
</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
        </div>
    );
};

export default ManageProducts;