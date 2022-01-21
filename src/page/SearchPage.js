import React from 'react';
import saveAs from 'react-file-download';
import { Container, Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import CardRender from '../component/CardRender/CardRender';

async function GetVideo(text) {
    return await (await axios.get('http://localhost:3001/param?queryText='+text)).data
}

const handleDownload = (url, name, format) => {
    axios.get(`http://localhost:3001/download?link=${url}&format=${format}`, {responseType: 'arraybuffer', baseURL: 'http://localhost:3001'})
        .then(async res => {
            await saveAs(res.data, `${name}${format}`);
        });
}


const SearchPage = () => {
    const [searchParams] = useSearchParams(); // Use search params 
    const [Data, setData] = React.useState(undefined);
    let text = searchParams.get('id'); // Get URL param named id

    React.useEffect(() => {
        GetVideo(text).then((data) => setData(data.map(data => {
            return (
                <Grid key={data.videoURL} item xs={6} sm={4} md={5} lg={6}>
                    <CardRender product={data} download={handleDownload} />
                </Grid>
            )
        })))
    }, [text, setData]);

    if (text) return (
        <Container sx={{ display: 'flex', width: '100%'}}>
            <Grid container justify="center" spacing={4}>
                {Data}
            </Grid>
        </Container>
    ) // Render if text has item.
    else return (
        <Container sx={{ display: 'flex', width: '100%'}}>
            <h1>Text cannot be empty blyat!</h1>
        </Container>
    ) // Render if text doesn't exist
}

export default SearchPage // Exports for element use.
