import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import featured from '../../../images/others/featured.png';

const Featured = () => {
    return (
        
            
            <Grid container spacing={2} >
            <Grid item xs={12} md={6} sx={{mt: 20}}>
                <Typography variant="h2">
                    Featured Product
                </Typography>
                <Typography sx={{mt: 5}} variant="h4">
                    Large Stowaway in Cream
                </Typography>
                <Typography variant="h5">
                    $542.99

                </Typography>
                <Button variant="outlined" color="warning" sx={{p: 3, mt: 10}}>Add to Cart</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={featured} alt="" />
            </Grid>

        </Grid>
    
            
    );
};

export default Featured;