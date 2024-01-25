import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
// import { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
import { Box, Grid, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import loginn from "/loginn.png"
import "../../App.css"
import { SignIn } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';

export default function LogIn() {
  const [email,setemail] = useState("")
  const [password, setpassword] = useState("")
  // const [name, setname] = useState("")

   const navigate = useNavigate()
     

 async function loginhandler(e){
  e.preventDefault()
//   console.log(email, password);
   const loogin= await SignIn({email, password})
   if(loogin){
  navigate("/")

   }
} 


 return (
     <>
     <div className='signer container m-auto'>
     <Typography variant="h4" component="" className='text-center'>
           Login
     </Typography> 
     <Grid container className='p-md-0 justify-content-center align-items-center'>
       <Grid item lg={6} className="order-last">
     <div className="">
   {/* <img src="" alt="" /> */}
   <img src={loginn} className="img-thumbnail  imges" alt="..." width={500} />
    </div>
    </Grid>

    <Grid item lg={6} className="md:pt-36">
   <Box sx={{ '& > :not(style)': { m: 1 }  }} className="pt-md-5">
     <Form className=''  onSubmit={loginhandler}>
     <Box sx={{ display: 'flex', alignItems: 'flex-end' , justifyContent:"center"}}>
       <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
       <TextField id="" label="Enter your Email" className="xl:w-[50%]" variant="standard" type={email} value={email}  onChange={(e)=>{
           setemail(e.target.value)
       }}/>
     </Box>

     <Box sx={{ display: 'flex', alignItems: 'flex-end' , mt: 2 ,justifyContent:"center" }} >
      <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
       <TextField id="input-with-sx" label="Enter Password" className='xl:w-[50%]'  variant="standard" value={password} onChange={(e)=>{
           setpassword(e.target.value)
        }} type="password"/>
        </Box>
       
      {/* <Button variant="primary" type="submit" className='me-3'>
      Submit
     </Button> */}
<div className="wrap mt-4 md:mt-8 flex" style={{justifyContent:"center"}}>
 
 <button type="submit btn" className="buttond">Submit</button>
</div>
<h6 className='mt-2 text-center'>Or</h6>
<h6  className="text-center text-blue-800 mt-2  "><Link to={"/register"}>Register Asap!</Link></h6>

     </Form>
   </Box>
   </Grid>
   </Grid>
   </div>
   </>
 );
}


