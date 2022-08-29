import React,{useState} from 'react';
import{Grid,Card,CardContent,Button} from"@mui/material"

export const AnimalPic = () => {
    const[animal,setAnimal]=useState("Elephant")
    return (
        <div className='ssub'>
            <h1 className='heading'>Animal Gallery</h1>
<Grid container spacing={3}>
    <Grid item xs={6}>
<Card>
    <CardContent className='txt2'>{animal}</CardContent>
</Card>
    </Grid>
    <Grid item xs={6}>
        <Card>
            <CardContent className='txt'>
                <img className='img' src={`Images/${animal}.jpg`} alt="" width="250px" height="250px"/>
            </CardContent>
        </Card>
    </Grid>
    <Grid item xs={4}>
<Button variant='contained'
onClick={()=> setAnimal("Cat")}
fullWidth color='success'>Cat</Button>
    </Grid>
    <Grid item xs={4}>
<Button variant='contained' color='success'fullWidth onClick={()=>setAnimal("Cheetah")}>Cheetah</Button>
    </Grid>
    <Grid item xs={4}>
        <Button variant='contained'
        onClick={()=>setAnimal("Tiger")}
        color='success' fullWidth
        >Tiger</Button>
    </Grid>
    <Grid item xs={4}>
        <Button variant='contained'
        onClick={()=>setAnimal("Elephant")}
        fullWidth color='primary'>Elephant</Button>
    </Grid>
    <Grid item xs={4}>
        <Button variant='contained' color='primary'fullWidth
        onClick={()=>setAnimal("Zebra")}
        >Zebra</Button>
    </Grid>
    <Grid item xs={4}>
        <Button variant='contained' color='primary'
        fullWidth onClick={()=>setAnimal("Cub")}
        >Cub</Button>
    </Grid>
</Grid>
        </div>
    );
};

export default AnimalPic;