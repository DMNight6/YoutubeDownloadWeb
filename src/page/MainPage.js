import { Container, Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const MainPage = () => {
    return (
        <Container sx={{ display: 'flex', width: '100%' , position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -750%)', alignItems: 'center', justifyContent: 'center'}}>
            <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',width: 400, boxShadow: 3, backgroundColor: 'rgb(255,255,255)'}} component='form' action='search/data'>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder='URL or Search Parameters' name='id'/>
                <IconButton type="submit" sx={{ p: '10px'}}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Container>
        
    )
}

export default MainPage
