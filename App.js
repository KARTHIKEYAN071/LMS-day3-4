import * as React from 'react';
// import {TextField} from '@mui/material';
// import Appbar from './Appbar';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { pink } from '@mui/material/colors';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./App.css"
import { Link } from 'react-router-dom';

export default function MyApp() {
   const handleInputChange = event => {
    var ele = document.getElementsByName('box');
    for(var i=0;i<ele.length;i++)
    {
      if(ele[i].checked)
      {
    document.getElementById("result").innerHTML = "Login As "+ ele[i].value;
      }
    
    }
    
};
  return (
    <div>
      
    <div className='body'>
    <div className='bdy'>
    <div className="menu">
                    <ul>
                        
                       <button> <li>HOME</li></button>
                       <button> <li>BOOKS</li></button>
                       <button><li>RESEARCH</li></button>
                       <button><li>TOOLS</li></button>
                       <button><li>ABOUT</li></button>
                       <button> <li>CONTACT</li></button>
                    </ul>
                </div>
                <div class="search">
                    <input className="srch" type="search" name="search" placeholder="search here..."/>
                    <button className="btnn">Search</button></div>
                    </div>
                    <div className='text'><p>Welcome To Digital <br/>Library</p>
                    <div className='picimg'>
                    </div></div>
      <div className='container'>

        <div className='pic'>
          <br/>
         <div className='h1' id='result' class="temp"> <h1>LOGIN HERE</h1></div>
          
          <div className='lab'>
            <input type="email" placeholder='Enter Email' required></input>
          </div>
          
          <div className='lab'>
            <input type="password" placeholder='Enter Password' required></input>
          </div>
         <br/>
         <div className='h2'> <h2>LOGIN AS</h2></div>
          <div className='check'>
          <div className='stf'>
          <input type='radio'value='Staff' className='null' id='staff'name='box' onChange={handleInputChange}/><label for='staff'>Staff</label>
          </div>
          <div className='std'>
          <input type='radio'value='Student' className='null' id='std' name='box'onChange={handleInputChange}/><label for='std'>Student</label>
          </div>
          <div className='admin'>
          <input type='radio' value='Admin' className='null' id='admin'name='box'onChange={handleInputChange}/><label for='admin'>Admin</label>
          </div>
          </div>
          <br/>
          <div className='btn'>
            <Link to="/Login"><button type='submit'><b>LOGIN</b></button></Link>
          </div>
        <p className='link'>New user? / <Link to="/SignUp"><button>Sign Up </button></Link><br/></p>
        {/* <div className='icon'>
      <GoogleIcon fontSize="large"color="primary" /></div>
        <div className='icon'>
     <FacebookIcon fontSize="large" color="primary"/></div>
        <div className='icon'>
     <InstagramIcon sx={{ color: pink[500] }}fontSize="large"/></div>
        <div className='icon'>
        <TwitterIcon fontSize="large" color="primary"/></div>
        <div className='icon'>
  <LinkedInIcon fontSize="large" color="primary"/></div> */}</div>

        
      </div>
    </div>
    </div>
  );
}