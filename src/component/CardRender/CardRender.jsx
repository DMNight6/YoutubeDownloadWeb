import React, { useState } from 'react';
import { Typography, CardActions, IconButton, Card, CardContent, CardMedia, NativeSelect, Box } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const CardRender = ({product, download}) => { // I dunno what name I want to give so I'll call it product although it's data from backend
    const [Format, setFormat] = useState('.mp3');

    const handleButton = async () => await download(product.videoURL, product.name, Format);

    return (
        <Card sx={{ display: 'flex'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto'}}>
                    <Typography component='div' variant='body2'>
                        {product.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component='div'>
                        Duration • {product.duration}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                    <CardActions>
                        <NativeSelect id='format' onChange={e => setFormat(e.target.value)}>
                            <option value='.mp3'>MP3</option>
                            <option value='.mp4'>MP4</option>
                        </NativeSelect>
                        <IconButton onClick={handleButton}>
                            <FileDownloadIcon />
                        </IconButton>
                    </CardActions>
                </Box>
            </Box>
            <CardMedia sx={{ width: 151, backgroundSize: 'contain' }} image={product.thumbnail} />
        </Card>
    )
}

export default CardRender;
