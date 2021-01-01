import React from 'react'
import bac from '../../img/header-image.png'
import "../../auth.css";
import { Grid } from '@material-ui/core';

function bg() {
    return (
        <Grid sm={12} lg={12} className='bg'>
            <img src={bac} className='bannerimg'/>
        </Grid>
    )
}

export default bg
