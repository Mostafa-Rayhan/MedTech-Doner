// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import logo3 from "../../assets/images/logo3.png";
import { useState } from 'react';
import Members from './Members';
import Admins from './Admins';
import BlogsAdmin from './BlogsAdmin';
import { Avatar } from '@mui/material';
import avatarImg from "../../assets/images/banner1.jpg";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Requested from './Requested';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BookIcon from '@mui/icons-material/Book';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';


const drawerWidth = 240;



const AdminDashboard = (props) => {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tabSelect, setTabSelect]=useState("Members")
  const [user,setUser]=useState()

  React.useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("bloodUserData"));
    if(data){
      setUser(data)
    }
  },[])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const selectMenu=(text)=>{
    setTabSelect(text)
  }

  console.log("usr", user );

  const nameModify=(fName)=>{
    console.log("fna", fName);
    if(fName){
      const firstThreeChars = fName.slice(0, 2);
      return firstThreeChars.toUpperCase()

    }
    return ""

  }

  const drawer = (
    <div>
      {/* <Toolbar  /> */}
      <Toolbar style={{backgroundColor:"#EA062B "}}>
      <Divider />
        {/* <img src={logo3} alt="" /> */}
        <div style={{ display: "flex", textAlign:"left", alignItems:"center"   }}>
                {/* <Avatar
                  alt="<NAME>"
                  sx={{ width: 34, height: 34 }}
                  src={avatarImg}
                /> */}
                 <Avatar sx={{ bgcolor: "white", color:"#EA062B" }}>
                        {nameModify(user?.email)}
                      </Avatar>
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                <div style={{ marginLeft: "1vw" }}>
                  <Typography
                    variant="body"
                    display="block"
                    style={{ fontWeight: "700", color:"white"  }}
                  >
                    {user?.email }

                  </Typography>

                </div>
              </div>

      </Toolbar>
      <Divider />
      <List >
        {['Members', 'Admins', 'Blogs'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={()=>selectMenu(text)}>
            <ListItemButton>
              <ListItemIcon>
                {index ==0 && <AccountBoxIcon />}
                {index ==1 && <SupervisorAccountIcon />}
                {index ==2 && <BookIcon />}
                {index ==3 && <RequestQuoteIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const getTab=()=>{
    // console.log("ttt", tabSelect);
    switch (tabSelect) {

      case "Members":
       return  <Members />
      case "Admins":
      return  <Admins />
      case "Blogs":
        return <BlogsAdmin />
      // case "Requested Services":
      //   return <Requested /> 

      default:
        <Members />
    }


  }




  return (
    <div>
      {/* <Navbar></Navbar> */}

      <Box sx={{ display: 'flex'}}>
      <CssBaseline />
       <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor:"#EA062B"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{fontStyle:"uppercase", fontWeight:"bold"}}>
            Admin Dashboard
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
        style={{marginTop:"60px" }}
      >
        {/* <Toolbar /> */}
       {getTab()}

      </Box>
    </Box>

    {/* <Footer> </Footer> */}

    </div>
  );
};

export default AdminDashboard;



AdminDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
