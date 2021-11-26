import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import addproduct from '../../../images/others/2.svg'

const AddProduct = () => {
    const [productData, setProductData] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = {...productData};
        newProductData[field] = value;
        setProductData(newProductData);
        console.log(field,value);
    }

    const handleAddProduct = e => {
        //collect data
        const products = {
            ...productData,

        }
            //send to the server

      fetch('https://sheltered-gorge-39495.herokuapp.com/products', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(products)
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('item added successfully');
          e.target.reset();
        }
      });
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add products</h2>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                
               <form onSubmit={handleAddProduct}>
                <TextField 
                sx={{width: '75%', m: 1}}
                name="name"
                type="text"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="product-name" 
                variant="outlined"
                required 
                />
                
                <TextField 
                sx={{width: '75%', m: 1}}
                name="desc"
                type="text"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="Description" 
                variant="outlined"
                required 
                />
                
                <TextField
                
                sx={{width: '75%', m: 1}}
                name="price"
                type="number"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="Price" 
                variant="outlined"
                required 
                />
                <TextField 
                sx={{width: '75%', m: 1}}
                name="img"
                type="text"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="put image link" 
                variant="outlined" 
                required
                />
                
                
                
                    <Button type="submit" variant="contained" sx={{width: '75%'}}>Add Product</Button>
                

                
                
                </form>
                
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={addproduct} style={{width: '100%'}} alt="" />
                </Grid>
       
            </Grid>
        </Container>
        </div>
    );
};

export default AddProduct;