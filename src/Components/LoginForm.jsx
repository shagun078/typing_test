import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';
import { useAlert } from '../Context/AlertContext';
import { themeOptions } from '../Utils/theme';
import { useTheme } from '../Context/ThemeContext';
import errorMapping from '../Utils/errorMapping';

const LoginForm = ({handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAlert} = useAlert();
    const {theme} = useTheme();
    const handleSubmit = ()=>{
        if(!email || !password){
            setAlert({
                open: true,
                type: 'warning',
                message: 'fill all details'
            });
            return;
        }

        auth.signInWithEmailAndPassword(email,password).then((response)=>{
            setAlert({
                open: true,
                type: 'success',
                message: "logged in"
            });
            handleClose();  
        }).catch((err)=>{
            console.log("error", err);
            setAlert({
                open: true,
                type: 'error',
                message: errorMapping[err.code] || "Some error occured"
            });
        });

    }
  return (
   <Box
  p={3}
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",   // center children horizontally
    width: "100%",
    maxWidth: 350,           // <-- limit width
    backgroundColor: `${theme.background}33`, // same color with ~80% opacity
    backdropFilter: "blur(6px)",          // frosted effect
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    mx: "auto"               // <-- center horizontally

  }}
>
  <TextField
    fullWidth
    type="email"
    variant="outlined"
    label="Enter Email"
    InputLabelProps={{
      style: { color: theme.title }
    }}
    InputProps={{
      style: { color: theme.title }
    }}
    onChange={(e) => setEmail(e.target.value)}
  />
  <TextField
    fullWidth
    type="password"
    variant="outlined"
    label="Enter Password"
    InputLabelProps={{
      style: { color: theme.title }
    }}
    InputProps={{
      style: { color: theme.title }
    }}
    onChange={(e) => setPassword(e.target.value)}
  />
  <Button
    fullWidth
    variant="contained"
    size="large"
    sx={{
      backgroundColor: theme.title,
      color: theme.background,
      "&:hover": { opacity: 0.9 }
    }}
    onClick={handleSubmit}
  >
    LOGIN
  </Button>
</Box>

  )
}

export default LoginForm