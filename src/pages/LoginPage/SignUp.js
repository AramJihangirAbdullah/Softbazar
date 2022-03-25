import React, {useContext,useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import AuthContext from '../../contexts/AuthContext';
function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  let {signupUser} = useContext(AuthContext)
  const [emailerr, setEmailerr] = useState(true)
  const [user, setUser] = useState({name:'',email:'',password:'',"password_confirmation":'',phone:'',role:''});
    // role
    // const [role, setRole] = React.useState('customer');
    const handleChange = (e) => {
      // setRole(event.target.value);
      const name = e.target.name;
      const value = e.target.value;
      // const email = e.target.email;
      // const password = e.target.password;
      // const password_confirmation = e.target.password_confirmation;
      // const phone = e.target.phone;
      setUser({...user,[name]: value})
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(user.name && user.email && user.password && user.password_confirmation && user.phone && user.role){
      console.log("bababa");
      signupUser(user)
    }
  };
//   function emailValidation(email){
//     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if(regex.test(email.target.value) === false){
//       setEmailerr("Email is not valid"); 
//         return false;
//     }
//     return true;
// }
  // const addUser = async (data) => {
  //   fetch(`http://127.0.0.1:8000/api/register`, {
  //     method: "POST",
  //     headers: { "Accept":"application/json","Content-Type":"application/json"},
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json()).then((resp)=> console.log(resp))
  // };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // error={emailValidation(Event)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Password_confirmation"
                  type="password"
                  id="password_confirmation"
                  onChange={handleChange}
                />
              </Grid>
              {/*  */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                fullWidth
                name="role"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user.role}
                label="role"
                onChange={handleChange}
                >
                <MenuItem value={"customer"}>customer</MenuItem>
                <MenuItem value={"vendor"}>vender</MenuItem>
                </Select>
                </FormControl>
              </Grid>
              {/*  */}
              <Grid item xs={12}>
                <TextField
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}