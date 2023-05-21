import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { HeaderLoginButton, HeaderToolbar, MarginDiv} from "@/components/HeaderStyles";

const Header: React.FC = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" elevation={0}>
                <HeaderToolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuOutlinedIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" color={'secondary'} sx={{flexGrow: 1, fontWeight: 400}}>
                        Translate
                    </Typography>
                    <HeaderLoginButton>Login</HeaderLoginButton>
                </HeaderToolbar>
            </AppBar>
            <MarginDiv/>
        </Box>

    );
};

export default Header;
