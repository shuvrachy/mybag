import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
const Product = (props) => {
    const { _id, name, img, price} = props.product; 
    return (
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style = {{width: "auto", margin: "0 auto"}}
          image={img}
          alt="Paella dish"
        />
          <CardContent>
           
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            
            <Typography variant="h4" color="text.warning">
              ${price}
          
            </Typography>
            <NavLink style={{textDecoration: 'none'}} to={`/items/${_id}`}>
                        <Button variant="contained" color="success">Order Now</Button>
                    </NavLink>
          </CardContent>
        
        </Card>
      </Grid>
    );
};

export default Product;