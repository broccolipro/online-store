import React, { useState } from 'react';
import { Avatar, Box, IconButton, Tooltip, Menu, MenuItem, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Link } from 'react-router-dom';
import { userSlice } from '../../redux/features/userSlice';

const User = () => {

    const user = useAppSelector(store => store.userState.user);
    const { logout } = userSlice.actions
    const dispatch = useAppDispatch()

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchor(null)
    }

    const handleLogout = () => {
        setAnchor(null);
        dispatch(logout())
    }

    return (
        <Box sx={{ flexGrow: 0, order: 2, display: 'flex', alignItems: 'center' }} >

            {
                !user &&
                <Typography>
                    <Link to={'/auth/login'} >LogIn</Link>
                </Typography>
            }

            <Tooltip title={'Open settings'} >
                <IconButton onClick={handleOpenUserMenu} >
                    <Avatar alt={'Nothing here'} src={''} />
                </IconButton>
            </Tooltip>


            <Menu
                id={'menu'}
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={handleCloseMenu}
                keepMounted
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >


                <MenuItem onClick={handleCloseMenu}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">LogOut</Typography>
                </MenuItem>


            </Menu>
        </Box>
    );
};

export default User;