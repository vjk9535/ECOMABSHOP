import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import ListWoCards from '../Common/ListWoCards'
import { MobileBrands } from '../Products/Brands/MobileBrands'

export default function Mobiles() {
  return (
    <div >
        <Card style={{height:'100px', display:'flex',justifyContent:'center',marginTop:15,marginLeft:15,marginRight:15,borderRadius:0}}>
            <Typography style={{fontSize:30, padding:20}}>Shop By Brands</Typography>
        </Card>
        {MobileBrands.map((mob,index) =>(
            <>
            <Card style={{display:'flex',justifyContent:'space-between',marginLeft:15,marginRight:15,marginTop:1,marginBottom:1, padding:10,borderRadius:0}}>
            <Typography style={{alignSelf:'center', fontSize:18,fontWeight:'bolder'}}>{mob.brand} smartphones</Typography>
            <Button variant='contained'>View All</Button>
        </Card>
        <Card style={{marginLeft:15,marginRight:15,marginTop:0.5,padding:5,borderRadius:0}}>
            <ListWoCards ProdList={mob.list} slide={5}/>
        </Card>
        </>
        ))}
        </div>
  )
}
