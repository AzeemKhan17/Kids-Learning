import React,{useState} from 'react';
import{Grid,Button,Card,CardContent}from'@mui/material'


export const Articles = () => {
    const[articles,setArticles]=useState("Television")
    return (
        <div className='ssub'>
            <h1 className='heading'>Articles Home</h1>
<Grid container spacing={3}>
<Grid item xs={12}>
    <Card>
        <CardContent className='txt'>
            {articles}
        </CardContent>
    </Card>
</Grid>
<Grid item xs={4}>
    <Button variant='contained'
    onClick={()=>setArticles("FAN")}
    fullWidth color='primary'>Fan</Button>
</Grid>
<Grid item xs={4}>
    <Button variant='contained'
    onClick={()=>setArticles("CHAIR")}
    fullWidth color='primary'>Chair</Button>
</Grid>
<Grid item xs={4} >
    <Button variant='contained'
    onClick={()=>setArticles("BOARD")}
    fullWidth color='primary'>Board</Button>
    
</Grid>
<Grid item xs={2}>
<Button variant='contained'
onClick={()=>setArticles("TV")}
fullWidth color='error'>TV</Button>
</Grid>
<Grid item xs={2}>
    <Button variant='contained'
    onClick={()=>setArticles("LIGHT")}
    fullWidth color='error'>Light</Button>
</Grid>
<Grid item xs={2}>
    <Button variant='contained'
    onClick={()=>setArticles("AIR CONDITIONER")}
    fullWidth color='error'>Air Conditioner</Button>
</Grid>
<Grid item xs={2}>
<Button variant='contained'
onClick={()=>setArticles("TUBELIGHT")}
fullWidth color='error'>tubeLight</Button>
</Grid>
<Grid item xs={2}>
    <Button variant='contained'
    onClick={()=>setArticles("PEN")}
    fullWidth color='error'>Pen</Button>
</Grid>
<Grid item xs={2}>
    <Button variant='contained'
    onClick={()=>setArticles("LAPTOP")} 
    fullWidth color='error'>Laptop</Button>
</Grid>
</Grid>
        </div>
    );
};

export default Articles;