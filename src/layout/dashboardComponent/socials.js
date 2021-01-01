import { Grid, Button, Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Instructor() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 20,
        height:200,
        justifyContent: 'center',
        alignItems:'center'
      }}
    >
      <div className="notice3">
        <p className="noticeText2">Become an Instructor</p>
      </div>
      <div className="noticeBg3"></div>

      <Box display={{ xs: 'inline', sm: 'inline', md: 'inline' }} flexDirection='row'>
        <Link to='/' className='link3'><FacebookIcon className='linkimg'/></Link>
        <Link to='/' className='link3'><InstagramIcon className='linkimg'/></Link>
        <Link to='/' className='link3'> <LinkedInIcon className='linkimg'/> </Link>
      </Box>
    </div>
  );
}

export default Instructor;
