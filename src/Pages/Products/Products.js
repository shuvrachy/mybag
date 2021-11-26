import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import useData from '../../hooks/useData';
import Product from './Product';


const Products = () => {
    const [products] = useData();
    return (
        <Container>
            <Typography sx={{ m: 4, fontWeight: 500 }} color="success.main" variant="h4" component="div">
                Our Products
            </Typography>
            
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        
                    >

                    </Product>)
                }

            </Grid>
      </Container>
    );
};

export default Products;