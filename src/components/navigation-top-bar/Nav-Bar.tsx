import React from 'react';
import {Box, AppBar, styled, Toolbar, Typography} from "@mui/material";
import Links from "./Links";
import Logo from "./Logo";
import User from "./User";


const NavBar = () => {
    return (
        <AppBar sx={{background: 'white', position: 'fixed'}}>
            <Toolbar>
                <Logo xs={'none'} md={'flex'} fg={0}/>
                <Links/>
                <Logo xs={'flex'} md={'none'} fg={1}/>
                <User/>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;