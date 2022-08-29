import React,{useState} from "react"
import{Grid,Button,Card,CardContent} from "@mui/material"
export const Articlegallary=()=>{
const[artical,setArtical]=useState("Chair");
    return(
        <div className="ssub">
            <h1 className="heading">Article Gallary</h1>
<Grid container spacing={3}>
<Grid item xs={6}>
<Card>
    <CardContent className="txt2">
        {artical}
    </CardContent>
</Card>
</Grid>
<Grid item xs={6}>
<Card>
    <CardContent className="txt">
        <img className="img" src={`Artical/${artical}.jpg`} alt="" />
    </CardContent>
</Card>
</Grid>
<Grid item xs={4}>
<Button variant="contained"
fullWidth color="success"
onClick={()=>setArtical("Chair")}
>Chair</Button>
</Grid>
<Grid item xs={4}>
<Button variant="contained" 
fullWidth color="success"
onClick={()=>setArtical("AC")}
>AC</Button>
</Grid>
<Grid item xs={4}>
<Button variant="contained"
fullWidth color="success"
onClick={()=>setArtical("Cooler")}
>Cooler</Button>
</Grid>
<Grid item xs={4}>
<Button variant="contained"fullWidth
color="warning" onClick={()=>setArtical("Fan")}
>Fan</Button>
</Grid>
<Grid item xs={4}>
<Button variant="contained"fullWidth
color="warning" onClick={()=>setArtical("Table")}
>Table</Button>
</Grid>
<Grid item xs={4}>
<Button variant="contained"fullWidth
color="warning" onClick={()=>setArtical("Tv")}
>Tv</Button>
</Grid>
</Grid>
        </div>
    )
}