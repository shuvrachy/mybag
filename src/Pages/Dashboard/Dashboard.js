import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import  {Button} from '@mui/material';

import DashboardHome from './DashboardHome/DashboardHome';
import Pay from './Pay/Pay';
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';
import AddProduct from './AddProduct/AddProduct';
import AllOrders from './AllOrders/AllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Navigation from '../Shared/Navigaiton/Navigation';
import useAuth from '../../hooks/useAuth';



const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin, logout} = useAuth();

  let { path, url } = useRouteMatch();

  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to={`${url}`}><Button color= "inherit">Dashboard</Button></Link><br/>
      <Link to={`${url}/pay`}><Button color= "inherit">Pay</Button></Link><br/>
      <Link to={`${url}/myOrders`}><Button color= "inherit">My Orders</Button></Link><br/>
      <Link to={`${url}/review`}><Button color= "inherit">Review</Button></Link><br/>
      
       
      {/* Admin route start here */}
      {admin && <Box>
        <Link to={`${url}/allOrders`}><Button color= "inherit"> Manage All Orders</Button></Link><br/>
     <Link to={`${url}/addProduct`}><Button color= "inherit">Add a Product</Button></Link><br/>
      <Link to={`${url}/manageProducts`}><Button color= "inherit">Manage Products</Button></Link><br/>
      <Link to={`${url}/makeAdmin`}><Button color= "inherit">Make Admin</Button></Link>
      
        
    </Box>}
    <Button onClick={logout} color= "error" variant="contained">Logout</Button>
     
     {/*  <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider /> */}
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Navigation></Navigation>
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: 10, bgcolor: 'text.disabled'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/myOrders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>

        {/* admin dashboard starts here */}
        <Route path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/allOrders`}>
          <AllOrders></AllOrders>
        </Route>
        <Route path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
    </Switch>
        
        
      </Box>
    </Box>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;