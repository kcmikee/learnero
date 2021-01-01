import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box'
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import img1 from '../../img/footer1.jpg'
import img2 from '../../img/footer2.jpeg'

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  column:{
      flexDirection: 'row',
      justifyContent:'center'
  }
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} style={{width:'90%',justifyContent: 'space-evenly',margin:'auto',}}>
        <Grid item xs={12} sm={12} lg={3}>
          <Typography variant='h5' style={{color:'#fff',paddingBottom:10}}>About</Typography>
          <Typography variant='caption' style={{color:'#fff'}}>
            Learnero is an online global platform that connects learners and
            instructors in a wide range of extracurricular activities. We aim to
            bring back fun and be a passionate escape from your usual routine.
            Learn at any time, any place at your own pace!
          </Typography><br/><br/>
          <Box display={{ xs: 'inline', sm: 'inline', md: 'inline' }} flexDirection='row'>
            <Link to='/' className='link3'><FacebookIcon className='linkimg'/></Link>
            <Link to='/' className='link3'><InstagramIcon className='linkimg'/></Link>
            <Link to='/' className='link3'> <LinkedInIcon className='linkimg'/> </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={2} className={classes.column}>
            <Typography variant='h5' style={{color:'#fff',paddingBottom:10}}>Contact</Typography>
            <Typography variant='caption'><Link to='/' className='link4'>learneroit@gmail.com</Link></Typography> <br/>
            <Typography variant='caption'><Link to='/' className='link4'>support@learnero.co</Link></Typography><br/>
            <Typography variant='caption'><Link to='/' className='link4'>instructor@learnero.co</Link></Typography><br/>
            <Typography variant='caption'><Link to='/' className='link4'>career@learnero.co</Link></Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
            <Typography variant='h5' style={{color:'#fff',paddingBottom:10}}>Quick Links</Typography>
            <Typography variant='caption'><Link to='/' className='link5'>learneroit@gmail.com</Link></Typography> <br/>
            <Typography variant='caption'><Link to='/' className='link5'>support@learnero.co</Link></Typography><br/>
            <Typography variant='caption'><Link to='/' className='link5'>instructor@learnero.co</Link></Typography><br/>
            <Typography variant='caption'><Link to='/' className='link5'>career@learnero.co</Link></Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
            <Typography variant='h5' style={{color:'#fff',paddingBottom:10}}>Blog</Typography>
              <Link className='link6' style={{display:'flex',}}>
                <div>
                    <img src={img1} alt=""/>
                </div>
                <div style={{marginTop: -19, marginLeft: 12,}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, assumenda?</p>
                    <div>__ November 24, 2020</div>
                </div>
              </Link>
              <Link className='link6' style={{display:'flex',marginTop:20}}>
                <div>
                    <img src={img2} alt=""/>
                </div>
                <div style={{marginTop: -19, marginLeft: 12,}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, assumenda?</p>
                    <div>__ November 24, 2020</div>
                </div>
              </Link>
        </Grid>
      </Grid>
    </div>
  );
}
