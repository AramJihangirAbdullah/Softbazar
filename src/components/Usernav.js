import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Cookies from 'js-cookie'

const Usernav = ({logimg}) => {
  let {whoami,user,logoutUser} = useContext(AuthContext)//?
  console.log( whoami(Cookies.get('barear_token')) );
  
  console.log("hsha",user);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // let {logoutUser} = useContext(AuthContext) 
  return (
    <>
    <Button aria-describedby={id}  onClick={handleClick}>
      {user?<Avatar sx={{ bgcolor: "var(--orange)" }}>{user.charAt(0).toUpperCase()}</Avatar>:<img src={logimg} alt="login" width="35" style={{marginTop:"5px"}} />}
    </Button>
    <Popover 
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
    }}
    transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
    }}
    PaperProps={{
      style: { width: '300px' },
    }}
    >
      {user? 
      <Box>
      <Typography sx={{ p: 1 , textAlign:"center" }}>Hello {user}</Typography>
      <Divider />
      <Typography sx={{p: 1 , textAlign:"center"}}>My Account</Typography>
      <Typography sx={{p: 1 , textAlign:"center"}}>Orders</Typography>
      <Typography sx={{p: 1 , textAlign:"center"}}>Wish List</Typography>
      <Typography sx={{p: 1 , textAlign:"center"}}><Link to="admin-panel">Admin Panel</Link></Typography>
      <Typography onClick={logoutUser} sx={{p: 1 , textAlign:"center"}}>Sign Out</Typography>
      </Box>
      : (<Typography sx={{p: 1 , textAlign:"center"}}>You are not <Link to="login">log in</Link>/<Link to="sign-up">sign up</Link></Typography>)
      }
    </Popover>
  </>
  )
}

export default Usernav