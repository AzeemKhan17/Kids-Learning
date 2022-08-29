import React,{useState} from "react"
import{Grid,Card,CardContent,Button} from"@mui/material"
export const FruitGallary=()=>{
    const[fruit,setFruit]=useState("Apple")
    return(

        <div className="ssub">
            <h1 className="heading">Fruit Gallary</h1>
            <Grid container spacing={3}>
<Grid item xs={6}>
    <Card>
        
        <CardContent  className="txt2">{fruit}</CardContent>
    </Card>
    </Grid>
    <Grid item xs={6}>
        <Card>
            <CardContent className="txt">
                <img className="img" src={`Fruite/${fruit}.jpg`} alt="" />
            </CardContent>
        </Card>
    
</Grid>
<Grid item xs={3} >
<Button variant="contained"fullWidth
color="error" 
onClick={()=>setFruit("Banana")}
>Banana</Button>
</Grid>
<Grid item xs={3}>
<Button variant="contained" fullWidth
color="error" onClick={()=>setFruit("kivi")}
>kivi</Button>
</Grid>
<Grid item xs={3}>
<Button variant="contained" fullWidth
color="error" onClick={()=>setFruit("Mango")}
>Mango</Button>
</Grid>
<Grid item xs={3}>
    <Button variant="contained"fullWidth
    color="error" onClick={()=>setFruit("Orange")}
    >Orange</Button>
</Grid>
            </Grid>
        </div>
    )
}