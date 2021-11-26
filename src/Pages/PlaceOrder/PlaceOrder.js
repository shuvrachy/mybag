import { Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const {itemId} = useParams();
    const [product, setProduct] = useState({});
    const [orderData, setOrderData] = useState({});
    const {user} = useAuth();
    // const {initialValue} = {productName:}

    useEffect(() => {
        fetch(`https://sheltered-gorge-39495.herokuapp.com/items/${itemId}`)
        .then(res => res.json())
        .then(data => setProduct(data) );
    }, [])


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = {...orderData};
        newOrderData[field] = value;
        setOrderData(newOrderData);
        console.log(field, value);
    }

    const handleAddProduct = e => {
        //collect data
        const order = {
            ...orderData,
        productName: product.name,
        email: user.email

        }
        //send to the server

      fetch('https://sheltered-gorge-39495.herokuapp.com/orders', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('order placed successfully');
          e.target.reset();
        }
      });
        e.preventDefault();
    }

   
    return (
        
        
        <Container>
             
             <Grid container spacing={2} sx={{mt: 5}}>
                 <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardMedia
                        component="img"
                        style = {{width: "auto", margin: "0 auto"}}
                        image={product?.img}
                        alt="Paella dish"
                        />
                    <CardContent>
                
                    <Typography variant="h5" component="div">
                    {product.name}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                    ${product.price}
                
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {product.desc}
                
                    </Typography>
                    {/* <Link to={`/items/${_id}`}>
                                <Button className="btn-warning">Order Now</Button>
                            </Link> */}
                </CardContent>
                
                </Card>
            </Grid>

        {/* place order form */}

        <Grid item xs={12} sm={12} md={6}>
                
               <form onSubmit={handleAddProduct}>
                <TextField
                sx={{width: '75%', m: 1}}
                
                name="productName"
                id="standard-basic" 
                value={product.name} 
                variant="outlined"
                
                 
                />
                
                <TextField 
                sx={{width: '75%', m: 1}}
                
                name="email"
                value={user.email}
                id="standard-basic" 
                variant="outlined"
                
                />
                
                <TextField
                
                sx={{width: '75%', m: 1}}
                name="qty"
                type="number"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="qty." 
                variant="outlined"
                required 
                />
                <TextField 
                sx={{width: '75%', m: 1}}
                name="phone"
                type="text"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="Phone" 
                variant="outlined" 
                required
                />
                <TextField 
                sx={{width: '75%', m: 1}}
                name="address"
                type="text"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="address" 
                variant="outlined" 
                required
                />
                
                
                
                    <Button type="submit" variant="contained" sx={{width: '75%'}}>Place Order</Button>
                

                
                
                </form>
                
                </Grid>

      </Grid>
      </Container>
      
        
    );
};

export default PlaceOrder;