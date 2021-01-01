import { Box,Grid } from "@material-ui/core";
import React from "react";
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavouriteIcon from '@material-ui/icons/Favorite'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import img1 from '../img/logo.jpg'
import "../auth.css";

// const logo = require("https://secureservercdn.net/72.167.241.46/znf.a99.myftpupload.com/wp-content/uploads/2020/10/learnero-1.png")

function Navbar() {
  return (
    <Grid container className="wrapper">
      <Grid item lg={3} style={{marginLeft:20}}> 
      <div className='logo'>
      <img src={img1} alt="" className="courseImg1" />
      <Box item display={{ xs: 'inline', sm: 'inline', md: 'none',lg:'none' }} style={{marginLeft:100}}>
        <Link to='/' className='link'> <MenuIcon/> </Link>
      </Box>
          </div> 
          
          </Grid>
      <Grid item lg={6}>
      <Box item display={{ xs: 'none', sm: 'none', md: 'inline' }} flexDirection='row' className='box'>
        <Link to='/' className='link'>COURSES</Link>
        <Link to='/' className='link'>ABOUT US</Link>
        <Link to='/' className='link'>MEET THE TEAM</Link>
        <Link to='/' className='link'>BLOG</Link>
        <Link to='/' className='link'>CONTACT US</Link>
        <Link to='/' className='link'><FavouriteIcon style={{color:'grey'}}/></Link>
        <Link to='/' className='link'><SearchIcon/></Link>
      </Box>
      </Grid>
      <Grid item lg={2} >
        <Box display={{ xs: 'none', sm: 'none', md: 'inline' }}>
            <Link to='/' className='link'><FacebookIcon/></Link>
            <Link to='/' className='link'><InstagramIcon/></Link>
            <Link to='/' className='link'> <LinkedInIcon/> </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Navbar;
