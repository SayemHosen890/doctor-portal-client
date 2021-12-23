// import { Button, Container, Grid, TextField, Typography, Alert, CircularProgress } from '@mui/material';
// import React, { useState } from 'react';
// import { NavLink, useLocation, useHistory } from 'react-router-dom';
// import image from '../../../images/login.png';
// import useAuth from '../../../hooks/useAuth';

// const Login = () => {

//     const [loginData, setLoginData] = useState({})
//     const { user, loginUser, loading, authError, signInWithGoogle } = useAuth();

//     const location = useLocation();
//     const history = useHistory();

//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData)
//     }

//     const handleSubmit = e => {
//         loginUser(loginData.email, loginData.password, location, history);
//         e.preventDefault();
//     }

//     const handleGoogleSignIn = () => {
//         signInWithGoogle(location, history)
//     }

//     return (
//         <Container>
//             <Grid container spacing={2}>
//                 <Grid item sx={{ mt: 8 }} xs={12} md={6}>
//                     <Typography variant="body1" gutterBottom>Login</Typography>
//                     <form onSubmit={handleSubmit}>
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Email"
//                             name='email'
//                             onBlur={handleOnChange}
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Password"
//                             type="password"
//                             name='password'
//                             onBlur={handleOnChange}
//                             variant="standard" />
//                         <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button>
//                         <NavLink
//                             style={{ textDecoration: 'none' }}
//                             to="/register"
//                         >
//                             <Button variant="text">New User ? Please Register</Button>
//                         </NavLink>
//                         {loading && <CircularProgress />}
//                         {user?.email && <Alert severity="success">Login SuccessFully!</Alert>}
//                         {authError && <Alert severity="error">{authError}</Alert>}
//                     </form>
//                     <hr></hr>
//                     <Button onClick={handleGoogleSignIn} variant="contained">Google SignIn</Button>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <img style={{ width: '100%' }} src={image} alt="" />
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default Login;