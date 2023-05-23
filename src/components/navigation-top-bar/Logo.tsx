import React from 'react';
import StoreIcon from '@mui/icons-material/Store';
import {Box, Typography} from "@mui/material";

const Logo = ({xs, md, fg}: {xs: string, md: string, fg: number}) => {
    return (
        <Box sx={{flexGrow: fg, display: {xs: xs, md: md}, alignItems: 'center' }}>
            <StoreIcon fontSize={'large'}/>
            <Typography
                variant="h6"
                component={'a'}
                href="/"
                sx={{
                    textDecoration: 'none',
                    margin: '0 5px'
                }}
            >
                AppStore
            </Typography>
        </Box>
    );
};

export default Logo;