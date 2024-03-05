import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { SubItems } from '../Products/SubItems'
export default function ItemsMenuBar() {
  return (
    <div style={{ paddingTop: "70px" }}>
    <Card
      sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', borderRadius: 0 }}>
      {SubItems.map((item) => (
        <div style={{ position: 'relative', width: '100%',cursor:'pointer'  }} key={item.id}>
          <Box key={item.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Typography fontSize={15} fontWeight={'bold'} padding={0.5}>{item.text}</Typography>
            </div>
          </Box>
        </div>
      ))}
    </Card>
    </div>
  )
}
