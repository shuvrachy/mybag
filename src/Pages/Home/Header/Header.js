import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import banner from '../../../images/banner/banner-8.jpg';


const Header = () => {
    return (
    
        <Box  sx={{ flexGrow: 1 }}>
            <Grid  container spacing={2}>
                <Grid  item xs={12} sm={12} md={12}>
                   <img src={banner} alt="" /> 
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                   <Button sx={{mt: -14, mx: 'auto'}} variant="contained" color= "error" size="medium">Explore</Button>
                </Grid>
        
            </Grid>
        </Box>
        
    );
};

export default Header;