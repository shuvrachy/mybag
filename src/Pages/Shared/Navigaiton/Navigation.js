import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import useAuth from '../../../hooks/useAuth';

export default function Navigation() {
  const {user, logout} = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor: 'white'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img  src={logo} alt="" />
          </Typography>
          <NavLink to="/home"><Button color="inherit">Home</Button></NavLink>
          <NavLink to="/products"><Button color="inherit">Products</Button></NavLink>
          {/* <NavLink to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
          <NavLink to="/login"><Button color="inherit">Login</Button></NavLink> */}
          {
                user?.email ?
                <Box>
                  <NavLink style={{textDecoration: 'none'}} to="/dashboard"><Button variant="text" color="primary">Dashboard</Button></NavLink> 
                  <Button onClick={logout} color="error">Logout</Button>
                </Box>
                
                :
                <NavLink style={{textDecoration: 'none'}} to="/login"><Button color="inherit">Login</Button></NavLink> 
            }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
