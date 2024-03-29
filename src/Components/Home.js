import React from 'react'
import { Box, Card,IconButton, Typography } from '@mui/material';
import { ArrowForwardIos, KeyboardArrowUp } from '@mui/icons-material';
import List from '../Common/List';
import { items } from '../Products/Items';
import { Fashion } from '../Products/Fashion';
import { Furnitures } from '../Products/Furnitures';
import { Electronics } from '../Products/Electronics';
import { ProdList } from '../Products/ProdList';
import { BeautyProdList } from '../Products/BeautyProdList';
import GridList from '../Common/GridList';
import MenuListWithSubMenu from '../Common/MenuListWithSubMenu';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openFurnitures, setOpenFurnitures] = React.useState(false);
  const [openFashion, setOpenFashion] = React.useState(false);
  const [openElectronics, setOpenElectronics] = React.useState(false);
  
    const isSpecialCategory = ['Furnitures', 'Fashion', 'Electronics'];
    const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "60px" }}>
      {/* Start of card 1 */}

      <Card
        sx={{ display: 'flex', justifyContent: 'space-evenly', margin: 3, flexDirection: 'row', borderRadius: 0 }}>
        {items.map((item) => (
          <div style={{ position: 'relative', width: '100%',cursor:'pointer'  }} key={item.id} onClick={()=>navigate(item.website)}>
            <Box
              onMouseEnter={(event) => {
                if (item.text === 'Fashion') {
                  setAnchorEl(event.currentTarget);
                  setOpenFashion(true);
                  setOpenFurnitures(false);
                  setOpenElectronics(false);
                } else if (item.text === 'Electronics') {
                  setAnchorEl(event.currentTarget);
                  setOpenFashion(false);
                  setOpenFurnitures(false);
                  setOpenElectronics(true);
                }
                else if (item.text === 'Furnitures') {
                  setAnchorEl(event.currentTarget);
                  setOpenFashion(false);
                  setOpenFurnitures(true);
                  setOpenElectronics(false);
                }

              }}
              key={item.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <img src={item.image} alt={item.text} width={50} height={50} />
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Typography fontSize={18}>{item.text}</Typography>
                <span>{isSpecialCategory.includes(item.text) && <KeyboardArrowUp />}</span>
              </div>

            </Box>

          </div>
        ))}
        {openFashion && <MenuListWithSubMenu menuLists={Fashion} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />}
        {openElectronics && <MenuListWithSubMenu menuLists={Electronics} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />}
        {openFurnitures && <MenuListWithSubMenu menuLists={Furnitures} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />}

      </Card>

{/* End of card 1 */}   
{/* Start of card 2 */}
<div style={{ display: 'grid', gridTemplateColumns: '4fr 1fr', gap: 2 }}>
  <Card style={{ margin: 20,paddingBottom:10,borderRadius:0}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', fontWeight: 'bold' }}>
    <Typography variant='h6' marginLeft={1} fontWeight="bold">Best Of Electronics</Typography>
    <IconButton style={{ borderRadius: "50%", backgroundColor: "darkblue", color: 'white', width: '25px', height: '25px' }}>
      <ArrowForwardIos style={{ fontSize: '15px' }} />
    </IconButton>
  </div>
  <List ProdList={ProdList} slide={5}/>
</Card>
  <Card style={{ margin: 20,borderRadius:0 }}>
    <Typography>Ads</Typography>
  </Card>
</div>
{/* End of card 2 */}
{/* Start of card 3 */}
<div>
  <Card style={{ margin: 20,paddingBottom:10,borderRadius:0}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', fontWeight: 'bold' }}>
    <Typography variant='h6' marginLeft={1} fontWeight="bold">Beauty, Food, Toys & more</Typography>
    <IconButton style={{ borderRadius: "50%", backgroundColor: "darkblue", color: 'white', width: '25px', height: '25px' }}>
      <ArrowForwardIos style={{ fontSize: '15px' }} />
    </IconButton>
  </div>
  <List ProdList={BeautyProdList} slide={6}/>
</Card>
</div>
{/* End of card 3 */}
{/* Start of card 4 */}
<div style={{ display: 'grid', gridTemplateColumns:'1fr 1fr 1fr' }}>
  <Card style={{ margin: 20,paddingBottom:10,borderRadius:0}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', fontWeight: 'bold' }}>
    <Typography variant='h6' marginLeft={1} fontWeight="bold">Best Of Electronics</Typography>
    <IconButton style={{ borderRadius: "50%", backgroundColor: "darkblue", color: 'white', width: '25px', height: '25px' }}>
      <ArrowForwardIos style={{ fontSize: '15px' }} />
    </IconButton>
  </div>
  <GridList ProdList={ProdList} />
</Card>
<Card style={{ margin: 20,paddingBottom:10,borderRadius:0}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', fontWeight: 'bold' }}>
    <Typography variant='h6' marginLeft={1} fontWeight="bold">Best Of Electronics</Typography>
    <IconButton style={{ borderRadius: "50%", backgroundColor: "darkblue", color: 'white', width: '25px', height: '25px' }}>
      <ArrowForwardIos style={{ fontSize: '15px' }} />
    </IconButton>
  </div>
  <GridList ProdList={ProdList} />
</Card>
<Card style={{ margin: 20,paddingBottom:10,borderRadius:0}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', fontWeight: 'bold' }}>
    <Typography variant='h6' marginLeft={1} fontWeight="bold">Best Of Electronics</Typography>
    <IconButton style={{ borderRadius: "50%", backgroundColor: "darkblue", color: 'white', width: '25px', height: '25px' }}>
      <ArrowForwardIos style={{ fontSize: '15px' }} />
    </IconButton>
  </div>
  <GridList ProdList={ProdList} />
</Card>
</div>
{/* end of card 4 */}
{/* Start of card 5 */}
<div>
  <Card style={{ margin: 20,paddingBottom:10,borderRadius:0}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', fontWeight: 'bold' }}>
    <Typography variant='h6' marginLeft={1} fontWeight="bold">Beauty, Food, Toys & more</Typography>
    <IconButton style={{ borderRadius: "50%", backgroundColor: "darkblue", color: 'white', width: '25px', height: '25px' }}>
      <ArrowForwardIos style={{ fontSize: '15px' }} />
    </IconButton>
  </div>
  <List ProdList={BeautyProdList} slide={6}/>
</Card>
</div>
{/* End of card 5 */}
{/* Start of card 6 */}
<div style={{ display: 'grid', gridTemplateColumns:'1fr 1fr 1fr' }}>
  <Card style={{ margin: 20,paddingBottom:10,borderRadius:0}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', fontWeight: 'bold' }}>
    <Typography variant='h6' marginLeft={1} fontWeight="bold">Best Of Electronics</Typography>
    <IconButton style={{ borderRadius: "50%", backgroundColor: "darkblue", color: 'white', width: '25px', height: '25px' }}>
      <ArrowForwardIos style={{ fontSize: '15px' }} />
    </IconButton>
  </div>
  <GridList ProdList={ProdList} />
</Card>
<Card style={{ margin: 20,paddingBottom:10,borderRadius:0}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', fontWeight: 'bold' }}>
    <Typography variant='h6' marginLeft={1} fontWeight="bold">Best Of Electronics</Typography>
    <IconButton style={{ borderRadius: "50%", backgroundColor: "darkblue", color: 'white', width: '25px', height: '25px' }}>
      <ArrowForwardIos style={{ fontSize: '15px' }} />
    </IconButton>
  </div>
  <GridList ProdList={ProdList} />
</Card>
<Card style={{ margin: 20,borderRadius:0 }}>
    <Typography>Ads</Typography>
  </Card>
</div>
{/* end of card 6 */}
      </div>
    );
  }