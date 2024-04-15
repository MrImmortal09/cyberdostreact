/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
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

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
          text: "Home",
        },
        {
          text: "About",
        },
        {
          text: "Testimonials",
        },
        {
          text: "Contact",
        },
        {
          text: "Cart",
        },
    ];
    return (
        <>
            <nav>
                <div className="nav-logo-container">
                    <h1>Cyberdost</h1>
                </div>

                <div className="navbar-links-container">
                    <a href="">Home</a>
                    <a href="">Forum</a>
                    <a href="">Govt Measures</a>
                    <a href="">News</a>
                    <a href="">Contact us</a>
                    <button className="primary-button">Sign-In now</button>
                </div>

                {/* <div className="navbar-menu-container">
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
                </div>

                <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
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
                    <Divider />
                    </Box>
                </Drawer> */}


            </nav>
        </>
    );
};

export default Navbar;