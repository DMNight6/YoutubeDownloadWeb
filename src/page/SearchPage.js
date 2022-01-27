import React from 'react';
import saveAs from 'react-file-download';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import CardRender from '../component/CardRender/CardRender';


const handleDownload = (url, name, format) => {
    axios.get(`http://localhost:3001/download?link=${url}&format=${format}`, {responseType: 'arraybuffer', baseURL: 'http://localhost:3001'})
        .then(async res => {
            await saveAs(res.data, `${name}${format}`);
        });
}

const SearchPage = () => {
    const [Data, setData] = React.useState([]);
    React.useEffect(() => {
        let id = new URLSearchParams(window.location.search).get('id');
        if (!id) return (window.location.href = "/");
        if (!Data.length) {
            axios.get(`http://localhost:3001/param?queryText=${id}`)
                .then((res) => setData(res.data))
                .catch((e) => setData([]))
        }
        return () => {}
    }, [Data]);


    if (!Data.length) return (
        <Container sx={{ display: 'flex', width: '100%'}}>
            <></>
        </Container>
    ) // Render if text doesn't exist
    
    return (
        <Container sx={{ display: 'flex', width: '100%'}}>
            <Grid container justify="center" spacing={4}>
                {Data.map(data => (
                    <Grid key={data.id} item xs={6} sm={4} md={5} lg={6}>
                        <CardRender product={data} download={handleDownload} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    ) // Render if text has item.

}

export default SearchPage // Exports for element use.