import React, { useState, useEffect } from 'react';
import Logo from '../Assets/Logo.png';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LoginSignupPopup from './LoginSignupPopup';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [email, setEmail] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Load email from localStorage on page load
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail || '');
  }, []);

  // Function to handle login and update email state
  const handleLogin = (email) => {
    setEmail(email); // Update email state immediately
    localStorage.setItem("email", email); // Save email to localStorage
    setIsPopupOpen(false); // Close the login/signup popup
  };

  const menuOptions = [
    { text: "List your practice ", icon: <HomeIcon /> },
    { text: "For Employers ", icon: <InfoIcon /> },
    { text: "Courses ", icon: <CommentRoundedIcon /> },
    { text: "Books ", icon: <PhoneRoundedIcon /> },
    { text: "Speakers ", icon: <ShoppingCartRoundedIcon /> },
    { text: "Doctors ", icon: <PhoneRoundedIcon /> },
    { text: "Login/Signup", icon: <PhoneRoundedIcon /> },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Get Weather</a>
        <a href="">Precipitation</a>
        <a href="">Wind Speed</a>
        <a href="">Humidity</a>
        <a href="">Air Quality</a>
        <a href="">Temperature</a>
        <button className="primary-button" onClick={() => setIsPopupOpen(true)}>
          {email || "Login/Signup"}
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
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
      {isPopupOpen && (
        <LoginSignupPopup
          onClose={() => setIsPopupOpen(false)}
          onLogin={handleLogin} // Pass the handleLogin function
        />
      )}
    </nav>
  );
};

export default Navbar;
