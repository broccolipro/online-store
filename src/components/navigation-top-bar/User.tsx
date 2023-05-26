import React, { useState } from 'react';
import { Avatar, Box, IconButton, Tooltip, Menu, MenuItem, Typography } from "@mui/material";

const User = () => {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchor(null)
    }

    const settings = ['Profile', 'Logout']

    return (
        <Box sx={{ flexGrow: 0, order: 2, display: 'flex', alignItems: 'center' }} >

            <Typography>
                Sign in
            </Typography>

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

                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}

            </Menu>
        </Box>
    );
};

export default User;