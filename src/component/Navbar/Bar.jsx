import React from 'react'
import { Box, AppBar, Typography, Toolbar } from '@mui/material'
import logo from '../../assets/logo.png'

const Bar = () => {
    return (
        <Box>
            <AppBar position='sticky' sx={{ boxShadow: 3, background: 'black' }}>
                <Toolbar>
                    <img src={logo} alt='logo' style={{width: '25px', height: '25px', marginRight: '2px', paddingBlockStart: '1px'}} /> 
                    <Typography variant='h6'>
                        YoutubeDownload
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Bar
