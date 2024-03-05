import { Card, Typography } from '@mui/material'
import React from 'react'

export default function GridList({ProdList}) {
  return (
    <div style={{display:'grid',gridTemplateRows:'1fr 1fr',gridTemplateColumns:'1fr 1fr',gap:20,padding:'10px'}}>
        {ProdList.slice(0,4).map((prod) => (
          <Card>
            <img src={prod.image} alt={prod.text} width="100%" height="150vh" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography fontSize={15} fontStyle="normal">
                {prod.text}
              </Typography>
              <Typography fontSize={15} fontWeight="bold">
                From &#8377;{prod.price}
              </Typography>
            </div>
          </Card>
      ))}
    </div>
  )
}
