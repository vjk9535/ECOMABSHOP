import { KeyboardArrowRight } from '@mui/icons-material';
import { Card, MenuItem, MenuList, Typography } from '@mui/material';
import React, { useState } from 'react'

export default function MenuListWithSubMenu({menuLists,anchorEl,setAnchorEl}) {
    const [selectedCategory,setSelectedCategory]=useState("");
    const [subMenuPosition,setSubMenuPosition]=useState({ top:0, left:0});

  return (
    <div onMouseLeave={()=>{setAnchorEl(null);
      setSelectedCategory("");}}>
      { anchorEl &&
    <Card
    style={{
      position: 'absolute',
      top: anchorEl.getBoundingClientRect().bottom,
      left: anchorEl.getBoundingClientRect().left,
      width:'250px',
      zIndex: 1,
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
    }}
  >
{menuLists.map((list) =>(
      <MenuItem key={list.id} onMouseEnter={(event)=>{
        const rect = event.currentTarget.getBoundingClientRect();
        setSubMenuPosition({ top: 176,left:rect.left + rect.width});
        console.log(list.text);
        if(list.subMenuItems === null) {
          setSelectedCategory(null);
        } else {
          setSelectedCategory(list.text);
        }
            }} 
           
      style={{flex:1,justifyContent:'space-between',width:'100%',marginRight:0}}
     ><Typography fontSize={12} fontWeight={selectedCategory === list.text ? 'bold':''}>{list.text}</Typography>{selectedCategory === list.text ?<KeyboardArrowRight />:''}</MenuItem>
      ))}
    </Card>
}
   {selectedCategory && <Card 
      //  onMouseLeave={() => closeMenu()} 
    style={{position:'absolute',
    display: anchorEl ? 'block' : 'none',
        left:subMenuPosition.left,
    top:subMenuPosition.top,
    width:'250px',
    // height:'auto',
     zIndex:1,
     borderTopLeftRadius:0,
     borderBottomLeftRadius:0
     }}>
    <MenuList><Typography fontWeight={'bold'} fontSize={12} marginLeft={2}>More in {selectedCategory}</Typography></MenuList>
    {menuLists.find((subMenu) => subMenu.text === selectedCategory)?.subMenuItems.map((item,index)=>(
      <MenuItem key={index}>
          <Typography fontSize={12}>{item}</Typography>
        </MenuItem>
    ))}
    </Card> 
    }
    </div>
  )
}
