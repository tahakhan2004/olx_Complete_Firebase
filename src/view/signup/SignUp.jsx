// import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Grid, Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Register } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import AddLocationIcon from '@mui/icons-material/AddLocation';


export default function SignUp() {
   const [email,setemail] = useState("")
   const [password, setpassword] = useState("")
   const [name, setname] = useState("")
   const [address, setAddress] = useState("") 
   const [image, setImage] = useState() 


      const navigate = useNavigate()

   async function SignupHandler(e){
     e.preventDefault()
    // console.log(email, password, name);
   const regster = await Register({name, email, password, image, address})
   if(regster){
    navigate("/login")
   }
  }  

  return (
      <>
      <div className='signer1 container m-auto mt-3 mb-2'>
      <Typography variant="h4" component="" className='text-center'>
            SignUp
      </Typography> 
      <Grid container className='lg:p-12 mt-lg-3 p-md-0 justify-content-center '>
        <Grid item lg={6}>
      <div className=" ">
    {/* <img src="" alt="" /> */}
    <img src="./signuppp.png" className="img-thumbnail  imges" alt="..." width={500} />
     </div>
     </Grid>

     <Grid item lg={6} className="">
    <Box sx={{ '& > :not(style)': { m: 1 } , pt: 5 }}>
      <Form className=''  onSubmit={SignupHandler}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:3 }}>
        <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="" label="Enter UserName" className='md:w-[70%] xl:w-[50%]' variant="standard" type={"text"} value={name}  onChange={(e)=>{
            setname(e.target.value)
        }}/>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="" label="Enter your Email" className='md:w-[70%] w-[100%] xl:w-[50%]' variant="standard" type="email" value={email}  onChange={(e)=>{
            setemail(e.target.value)
        }}/>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' , mt: 3  }} >
       <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Enter Password" className='md:w-[70%] xl:w-[50%]'  variant="standard" value={password} onChange={(e)=>{
            setpassword(e.target.value)
         }} type="password"/>
         </Box>
        
         <Box sx={{ display: 'flex', alignItems: 'flex-end' , mt: 3  }} >
       <AddLocationIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Enter Your Address" className='md:w-[70%] xl:w-[50%]'  variant="standard" value={address} onChange={(e)=>{
          setAddress(e.target.value)
         }} type="text"/>
         </Box>

         <Box sx={{ display: 'flex', flexDirection:"column" , mt: 3  }} >
         <label className='ms-2 font-semibold'>Upload Profile Picture</label>

         <input
                type="file"
                onChange={(e)=>{setImage(e.target.files[0])}}
                
                style={{borderBottom:"1px solid gray"}}
                className="mt-1 block w-[56%] rounded-md py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2"
              />
         </Box>
       {/* <Button variant="primary" type="submit" className='me-3'>
       Submit
      </Button> */}
<div className="wrap mt-4 md:mt-10">
  
  <button type="submit btn" className="buttond">Submit</button>
</div>
<h6 className='ms-12 mt-2 '>Or</h6>
<Link className='ms-2 text-blue-800' to={"/login"}>Have a account</Link>

      </Form>
    </Box>
    </Grid>
    </Grid>
    </div>
    </>
  );
}