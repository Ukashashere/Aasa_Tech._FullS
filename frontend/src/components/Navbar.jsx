/* hit ctrl+K then M, then type react, it enables react intillicence*/   /* OR we could've renamed the file to .jsx*/
/* rafce */      

import React, { useState } from 'react'; /* to use useState hook, important to import this*/
import Logo from '../Assets/Logo.png';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);  /**/ /* this is useState Hook. useState(false): This hook is used to declare a state variable and its setter function. Here, useState is initialized with false. openMenu: This is the state variable that will hold the current state value */
  const menuOptions = [     /* menuOptions: This is an array of objects representing the options in the menu.*/
    {
      text: "List your practice ",
      icon: <HomeIcon />,
    },
    {
      text: "For Employers ",
      icon: <InfoIcon />,
    },
    {
      text: "Courses ",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Books ",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Speakers ",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "Doctors ",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Login/Signup",
      icon: <PhoneRoundedIcon />,
    },
  ];  
  return (
  <nav>                                     {/*These things are the HTML part*/}
    <div className='nav-logo-container'>
      <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container" >
      <a href="">List your practice</a>  {/*maybe you able to click and hover over these because there is 'href' element attached to it */}
      <a href="">For Employers</a>
      <a href="">Courses</a>
      <a href="">Books</a>
      <a href="">Speakers</a>
      <a href="">Doctors</a>
      <button className="primary-button">Login/Signup</button>
    </div>
    <div className='navbar-menu-container' >   {/**/}
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
    anchor='right'>
      <Box
        sx={{ width: 250}}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
      >
        <List>
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>                                                                                       
          ))}
        </List>  
      </Box>
    </Drawer>
  </nav>
  );
};                                                                                                                            

export default Navbar;  