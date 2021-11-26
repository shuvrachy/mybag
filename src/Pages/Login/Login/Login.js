import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


import { NavLink, useLocation, useHistory } from 'react-router-dom';

import { Alert, Button, CircularProgress, Container, Grid } from '@mui/material';
import login from '../../../images/others/addproduct2.svg';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {signInWithGoogle, loginUser, isLoading, authError, user} = useAuth();
    //redirect hook
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
        console.log('hitting login')
    }

    const handleGoogleSignIN = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 8}}>
                <Typography variant="h4" gutterBottcomponent="div">Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: '75%', m: 1}}
                name="email"
                onChange={handleOnChange}
                id="standard-basic" 
                label="Your Email" 
                variant="standard" 
                />
                <TextField 
                sx={{width: '75%', m: 1}}
                name="password"
                id="standard-basic" 
                label="Your Password"
                onChange={handleOnChange}
                type="password" 
                variant="standard" 
                />
                <NavLink style={{textDecoration: 'none'}} to="/register">
                    <Button variant="text">New user? Please Register</Button>
                    
                </NavLink>
                
                    <Button type="submit" variant="contained" sx={{width: '75%'}}>Login</Button>
                
              </form>
              {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">logged in successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                <p>--------------------------------</p>
                <Button onClick={handleGoogleSignIN} variant="contained">Google Login</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{width: '100%'}} alt="" />
                </Grid>
       
            </Grid>
        </Container>
    );
};

export default Login;