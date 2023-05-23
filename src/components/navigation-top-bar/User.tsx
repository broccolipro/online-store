import React, {useState} from 'react';
import {Avatar, Box, IconButton, Tooltip, Menu} from "@mui/material";

const User = () => {

    const [anchor,  setAnchor] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget)
    }

    return (
        <Box sx={{flexGrow: 0}} >
            <Tooltip title={'Open settings'} >
                <IconButton onClick={handleOpenUserMenu} >
                    <Avatar alt={'Nothing here'} src={''} />
                </IconButton>
            </Tooltip>
            
            <Menu
                id={'menu'}
                anchorEl={anchor}
                open={Boolean(anchor)}
                keepMounted
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                sx={{}}>


            </Menu>
        </Box>
    );
};

export default User;