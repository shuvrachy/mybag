import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://sheltered-gorge-39495.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            alert('Admin Added');
            e.target.reset();
        })
        e.preventDefault();
    }
    return (
        
        <div>
            <Container>
            <h2>Review Page</h2>
            <Grid item xs={12} md={6} sx={{mt: 8}}>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                sx={{width: '75%', m: 1}}
                onBlur={handleOnBlur} 
                name="email" 
                type="email" 
                placeholder="put an email id"
                variant="filled"
                />
                <Grid item xs={12} md={12}>
                    <Button variant="contained" color="success" type="submit">Make Admin</Button>
                </Grid>
                  
            
            </form>
            
            </Grid>
            </Container>
        </div>
    );
};

export default MakeAdmin;