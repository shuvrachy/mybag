import { Grid, Typography } from '@mui/material';
import { borderBottom, Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ShowReview = (props) => {
    const {user} = useAuth();
    const {review} = props.review
    
    return (
        
        <Box sx={{ flexGrow: 1 }}>
            
            
            <Grid container>
               {/*  <Grid item xs={3} md={2} sx={{my: 2}}>
                    <img style={{width:'100px', height: '100px', borderRadius: 50}} src={user.photoURL} alt="" />
                </Grid> */}
                <Grid item xs={9} md={12} sx={{p: 2, borderBottom: '1px solid red'}} >
                    <Typography align="center" >
                        {review}
                    </Typography>
                </Grid>
                
            </Grid>
          </Box>

        
    );
};

export default ShowReview;