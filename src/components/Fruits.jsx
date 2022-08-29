import React,{useState} from 'react';
import{Grid,Button,Card,CardContent} from '@mui/material'

export const Fruits = () => {
    const[fruits,setFruits]=useState("Watermelon");
    return (
        <div className='ssub'>
            <h1 className='heading'>Fruits Home</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent className='txt'>
                            {fruits}
                            </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
<Button variant='contained'
onClick={()=>setFruits("ORANGE")}
fullWidth color='warning'>Orange</Button>
                </Grid>
                <Grid item xs={4}>
<Button variant='contained'
onClick={()=>setFruits ("MANGO")}
fullWidth color='warning'>Mango</Button>
                </Grid>
                <Grid item xs={4}>
<Button variant='contained' 
onClick={()=>setFruits ("GRAPS")}
fullWidth color='warning'>Graps</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained'
                    onClick={()=> setFruits("KIWI")} fullWidth color='success'>Kiwi</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained'
                    onClick={()=> setFruits("BANANA")} fullWidth color='success'>Banana</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained'
                    onClick={()=> setFruits("LICHI")} fullWidth color='success'>Lichi</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained'
                    onClick={()=> setFruits("DATES")} fullWidth color='success'>Dates</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained'
                    onClick={()=> setFruits("CHEEKU")} fullWidth color='success'>Cheeku</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained'
                    onClick={()=> setFruits("CHERRY")} fullWidth color='success'>Cherry</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Fruits;