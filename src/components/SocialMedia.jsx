import React,{useState} from 'react';
import{Grid,Button,Card,CardContent}from'@mui/material'

export const SocialMedia = () => {
const[socmedia,setSocmedia]=useState("SocialMedia")
    return (
        <div className='ssub'>
            <h1 className='heading'>Social Media</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
<Card>
    <CardContent className='txt2'>{socmedia}</CardContent>
</Card>
                </Grid>
                <Grid item xs={6}>
<Card>
    <CardContent className='txt'>
<img className='img' src={`SocialMedia/${socmedia}.jpg`} alt="" />
    </CardContent>
</Card>
                </Grid>
<Grid item xs={3}>
<Button variant='contained'
 color='primary' 
 onClick={()=>setSocmedia("Facebook")}
 fullWidth>Facebook</Button>
</Grid>
<Grid item xs={3}>
<Button variant='contained'
 color='primary'
 onClick={()=>setSocmedia("Instagram")}
 fullWidth>Instagram</Button>
</Grid>
<Grid item xs={3}>
<Button variant='contained'
onClick={()=>setSocmedia("Snapchat")}
 color='primary' fullWidth>Snapchat</Button>
</Grid>
<Grid item xs={3}>
<Button variant='contained'
onClick={()=>setSocmedia("WhatsApp")}
 color='primary' fullWidth>WhatsApp</Button>
</Grid>
<Grid item xs={3}>
<Button variant='contained'
onClick={()=>setSocmedia("Telegram")}
 color='success' fullWidth>Telegram</Button>
</Grid>
<Grid item xs={3}>
<Button variant='contained'
onClick={()=>setSocmedia("Twitter")}

 color='success' fullWidth>Twitter</Button>
</Grid>
<Grid item xs={3}>
<Button variant='contained'
onClick={()=>setSocmedia("Youtube")}

 color='success' fullWidth>Youtube</Button>
</Grid>
<Grid item xs={3}>
<Button variant='contained'
onClick={()=>setSocmedia("Email")}

 color='success' fullWidth>Email</Button>
</Grid>

            </Grid>

        </div>
    );
};

export default SocialMedia;