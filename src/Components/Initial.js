import * as React from 'react';
import { Box,AppBar, Typography, IconButton, Toolbar, InputBase, MenuItem, Divider, Button, Card, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import { Close, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
function Initial() {
  const [showCard, setShowCard] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  const [hoveringButton, setHoveringButton] = React.useState(false);
  const [hoveringMenu, setHoveringMenu] = React.useState(false);
  const [windowDimensions, setWindowDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  React.useEffect(()=>{
    const handleResize = () => {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    };
  },[])
  const handleSignInClick=()=> {
    setShowCard(!showCard);
    console.log('handleSignInClick called')
    setFlag(false);
  }

  const handleClose=()=> {
    setShowCard(false);
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '48ch',
        '&:focus': {
          width: '48ch',
        },
      },
    },
  }));

  const renderMenu = (
    <Card
      className='MenuDisplay' 
      style={{
        display:flag ? 'block':'none',
        position: 'absolute',
        top:' 40px',
        right: 0,
        backgroundColor: "#f1f1f1",
        minWidth:'200px'
      }}
      onMouseLeave={() => {
        setHoveringMenu(false);
        if (!hoveringButton) {
          setFlag(false);
        }
      }}
      onMouseEnter={()=>{setFlag(true);setHoveringMenu(true)}}   
    >
      {/* <Link href='#' underline='none' style={{ display: 'flex', justifyContent: 'center' }} onClick={()=>{handleSignInClick();handleMenuClose()}}><LoginIcon />SignIn</Link> */}
  <Typography style={{ flexGrow: 1, paddingLeft: '10px'}}>New Customer ?<Button>Sign Up</Button></Typography>
  <MenuItemWithIcon onClick={()=>{}} icon={<AccountCircle />} text="Profile" />
  <MenuItemWithIcon onClick={()=>{}} icon={<ShoppingBasketIcon />} text="Orders" />
  <MenuItemWithIcon onClick={()=>{}} icon={<FavoriteIcon />} text="Wishlist" />
  <MenuItemWithIcon onClick={()=>{}} icon={<LogoutIcon />} text="Log Out" />
    </Card>
  );
  function MenuItemWithIcon({ onClick, icon, text }) {
    return (
      <>
        <Divider />
        <MenuItem onClick={onClick}>
         {icon}
         <span style={{marginLeft: '8px'}}>{text}</span>
        </MenuItem>
      </>
    );
  }
  function SignInCard() {
    return (
      
      <Card sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
        <div style={{display:'flex',justifyContent:'right',margin:5}}>
        <IconButton onClick={handleClose}><Close sx={{color:'white'}}/></IconButton>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
        <Paper elevation={12}>
        <Box sx={{display: 'flex','& > :not(style)': {m: 1,},width:'900px',height:'400px'}}>
        <div style={{width:'40%',backgroundColor:'ButtonFace'}}>
          <Typography variant="h6" gutterBottom>
          </Typography>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%'}}>
        <TextField  name="phone" label="Phone Number" variant="outlined"  style={{margin:'2%'}}/>
        <Button style={{margin:'2%'}}>Otp</Button>
        </div>
        <Divider orientation='vertical' flexItem>Or</Divider>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%'}}>
        <TextField name="emailid" label="Email ID" variant="outlined"  style={{margin:'2%'}}/>
        <TextField name="password" label="Password" variant="outlined"  style={{margin:'2%'}}/>
        <Button style={{margin:'2%'}}>Sign In</Button>
        </div>
        </Box>
        </Paper>
        </div>
      </Card>
    );
  }
  return (
    <>
      {windowDimensions.width >= 500 ?
    <Box sx={{ flexGrow:1}}>
      <AppBar position='fixed'>
        <Toolbar>
        <Typography variant='h6' component="div" sx={{flexGrow:1}}> 
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>AbShopKaro</Link>
        </Typography>
        <Search style={{width:"40%"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            id='search'
              placeholder="Search for Product, Brands and More "
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{flexGrow:1}}/>
          <Box sx={{ display:'flex'}} >
          <div className='container'>
          <Button
          size="large"
          className="loginbutton"
          edge="end"
          aria-label="account of current user"
          aria-owns="primary-search-account-menu"
          aria-haspopup="true"
          onMouseEnter={() =>{setFlag(true);setHoveringButton(true)}}
          onMouseLeave={()=>{setHoveringButton(false);
            if (!hoveringMenu) {
              setFlag(false);
            }}}
        onMouseDown={handleSignInClick}
              style={{cursor:'pointer'}}
              color="inherit">
            <AccountCircle />&nbsp;
            <Typography style={{textTransform:'initial'}}>Login</Typography>
          </Button>
          {renderMenu}
          </div>
          <Button variant='text'>
              <ShoppingCart style={{color:'white'}}/>&nbsp;
              <Typography style={{color:'white',textTransform:'initial'}}>Cart</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {showCard && <SignInCard />}
    </Box> :
    <div>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between', fontSize:18}}>
            <div>
            <Button variant='text'>
            <MenuIcon fontSize='medium' />
            </Button>
            <Link to={'/'} style={{textDecoration:'none', fontStyle:'italic',fontWeight:'bold'}}>AbShopKaro</Link>
            </div>
            <div>
            <Button variant='text'>
            <AccountCircle fontSize='medium'/>&nbsp;
            <Typography style={{textTransform:'initial'}}>Login</Typography>
            </Button>
            <Button variant='text'>
              <ShoppingCart fontSize='medium'/>
            </Button>
            </div>
      </Box>
      <Box>
      <div style={{display:'flex',justifyContent:'center'}}>
       <Search style={{width:"100%",backgroundColor:'lightskyblue'}}>
       <SearchIconWrapper>
         <SearchIcon />
       </SearchIconWrapper>
       <StyledInputBase
       id='search'
         placeholder="Search for Product, Brands and More "
         inputProps={{ 'aria-label': 'search' }}
         fullWidth
       />
     </Search>
     </div>
     </Box>
     </div>
    }
    </>
  );
}

export default Initial;
