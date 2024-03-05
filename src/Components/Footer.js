import { Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Paper sx={{backgroundColor:'burlywood', borderRadius:0 }}>
    <Grid container>
        <Grid item xs={1.5}>
            <div style={{padding:15}}>
            <Typography>ABOUT</Typography>
            <div>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>About Us</Typography>
                <Typography  style={{fontSize:14,fontWeight:'bold'}}>Contact Us</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Careers</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Corporate Information</Typography>
            </div>
            </div>
            </Grid>
            <Grid item xs={1.5}>
        <div style={{padding:15}}>
            <Typography>ORDER</Typography>
            <div>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Payment</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Shipping</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Return</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>FAQ</Typography>
            </div>
            </div>
</Grid>
<Grid item xs={1.5}>
        <div style={{padding:15}}>
            <Typography>HELP</Typography>
            <div>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Payment</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Shipping</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Return</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>FAQ</Typography>
            </div>
            </div>
</Grid>
<Grid item xs={1.5}>
        <div style={{padding:15}}>
            <Typography>HELP</Typography>
            <div>
                <Typography  style={{fontSize:14,fontWeight:'bold'}}>Payment</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Shipping</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Return</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>FAQ</Typography>
            </div>
            </div>
</Grid>
<Divider orientation='vertical' variant='middle' flexItem/>
<Grid item xs={3}>
        <div style={{padding:15}}>
            <Typography>Mail Us:</Typography>
            <div>
                <Typography  style={{fontSize:14,fontWeight:'bold'}}>#456 24th main road, Jiska Ghar, xyznagar -777777</Typography>
            </div>
            </div>
</Grid>
<Grid item xs={2}>
        <div style={{padding:15}}>
            <Typography>Regestered Office Address:</Typography>
            <div>
                <Typography  style={{fontSize:14,fontWeight:'bold'}}>#77/2 67th main road, 789th Cross 2nd stage, xypdistic -89000</Typography>
                <Typography style={{fontSize:14,fontWeight:'bold'}}>Mobile: 012345678</Typography>
            </div>
            </div>
</Grid>
    </Grid>
    </Paper>
  )
}
