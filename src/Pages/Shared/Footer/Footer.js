import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import footerLogo from '../../../images/logo/footer-logo.png';

import { Box } from '@mui/system';


const Footer = () => {
    return (
        
        <Box style={{height: '300px', marginTop: '30px', backgroundColor: 'black'}}>

        
            <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Typography style={{color: 'white'}}>Copyright © 2021 mybag.com</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                
                <img src={footerLogo} alt="" />
              
            </Grid>
          </Grid>
        </Box> 
            
            

        
        
    );
};

export default Footer;