import React,{useState} from 'react';
import{Grid,Button,Card,CardContent}from"@mui/material"

export const Animal = () => {
    const[animal,setAnimal]=useState("Monkey");

    return (
        <div className='ssub'>
           <h1 className='heading'>Animal Home</h1>
           <Grid container spacing={3}>
<Grid item xs={12}>
    <Card>
        <CardContent className='txt'>
            {animal}
        </CardContent>
    </Card>
</Grid>
<Grid item xs={4}>
    <Button variant='contained' 
    onClick={()=> setAnimal("CAT")}
    fullWidth color='warning'>Cat</Button>
</Grid>
<Grid item xs={4}>
<Button variant='contained'
onClick={()=> setAnimal ("TIGER")}
fullWidth color='warning'>TIGER</Button>
</Grid>
<Grid item xs={4}>
    <Button variant='contained'
    onClick={()=> setAnimal ("ZEBRA")}
    fullWidth color='warning'> ZEBRA</Button>
</Grid>
<Grid item xs={3}>
    <Button variant='contained'
    onClick={()=>setAnimal("GOAT")}
    fullWidth color='success'>GOAT </Button>
</Grid>
<Grid item xs={3}>
    <Button variant='contained'
     onClick={()=>setAnimal("LEPARD")}
    fullWidth color='success'>LEPARD</Button>
</Grid>
<Grid item xs={3}>
    <Button variant='contained'
     onClick={()=>setAnimal("RAT")}
    fullWidth color='success'>RAT</Button>
</Grid>
<Grid item xs={3}>
    <Button variant='contained'
     onClick={()=>setAnimal("BEAR")}
    fullWidth color='success'>BEAR</Button>
</Grid>
           </Grid>

        </div>
    );
};

export default Animal;