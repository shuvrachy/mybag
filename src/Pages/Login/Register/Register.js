import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import register from '../../../images/others/2.svg'

const Register = () => {
    const {user, registerUser, isLoading, authError} = useAuth()
    const [loginData, setLoginData] = useState({});

    
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleRegisterSubmit = e => {
        if(loginData.password !== loginData.password2) {
            alert('password did not matched');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    
    return (
    
        
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 8}}>
                <Typography variant="h4" >Register</Typography>
               {!isLoading && <form onSubmit={handleRegisterSubmit}>
                <TextField
                sx={{width: '75%', m: 1}}
                name="name"
                type="text"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="Your Name" 
                variant="standard" 
                />
                <TextField 
                sx={{width: '75%', m: 1}}
                name="email"
                type="email"
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="Your Email" 
                variant="standard" 
                />
                <TextField 
                sx={{width: '75%', m: 1}}
                name="password"
                id="standard-basic" 
                label="Your Password"
                onBlur={handleOnBlur}
                type="password" 
                variant="standard" 
                />
                <TextField 
                sx={{width: '75%', m: 1}}
                name="password2"
                id="standard-basic" 
                label="Retype Your Password"
                onBlur={handleOnBlur}
                type="password" 
                variant="standard" 
                />
                
                
                    <Button type="submit" variant="contained" sx={{width: '75%'}}>Register</Button>
                

                <NavLink style={{textDecoration: 'none'}} to="/login">
                    <Button variant="text">Already registered? Please Login</Button>
                </NavLink>
                
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6} sx={{mt: 8}}>
                    <img src={register} style={{width: '100%'}} alt="" />
                </Grid>
       
            </Grid>
        </Container>
    
    );
};

export default Register;