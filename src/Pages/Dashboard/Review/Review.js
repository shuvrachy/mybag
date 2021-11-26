import { Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const [review, setReview] = useState('');
    const {user} = useAuth()

    const handleOnBlur = e => {
        
        setReview(e.target.value);
    }
    const handleReviewSubmit = e => {
        //collect data
        const reviews = {review};
                       
        

        
            //send to the server

      fetch('https://sheltered-gorge-39495.herokuapp.com/review', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(reviews)
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('review submitted successfully');
          e.target.reset();
        }
      });
        e.preventDefault();
        
    }
    return (
        
           <>
            <Container>
            <h2>Review Page</h2>
            <Grid item xs={12} md={6} sx={{mt: 8}}>
            <form onSubmit={handleReviewSubmit}>
                <textarea onBlur={handleOnBlur} rows="10" cols="50" name="review" type="text" placeholder="write your review">
                </textarea>

                <Grid item xs={12} md={12}>
                    <Button variant="contained" type="submit">Submit</Button>
                </Grid>
                  
            
            </form>
            
            </Grid>
            </Container>
            
            
            </>
 
    
    );
};

export default Review;