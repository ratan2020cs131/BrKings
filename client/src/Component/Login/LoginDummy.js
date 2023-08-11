import React from 'react'
import Stack from '@mui/material/Stack';
import Styles from "../Global.module.css";
import TextField from '@mui/material/TextField';
import Logo from '../../Images/BrownieKing.png';
import Cookie from '../../Images/brauni-ai (1) 1.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

const Login = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#b45502',
      },
    },
  });

  return (
    <>
      <div className={Styles.loginPopup}>
        <Stack direction="row" className={Styles.card}>
          <Stack direction="column" spacing={3} className={Styles.cred}>
            <TextField className={Styles.inputField} id="outlined-basic" label="Email" size='small' color='primary' variant="standard" />
            <TextField
              className={Styles.inputField}
              id="outlined-password-input"
              label="Password"
              size='small'
              type="password"
              autoComplete="current-password"
            />
            <Button variant="contained" disableElevation>
              Sign iN
            </Button>
          </Stack>
          <div>
            <img
            className={Styles.cookie}
            src={Cookie}
            alt='Cookoie'
            />
          </div>
        </Stack>
      </div>
    </>
  )
}

export default Login