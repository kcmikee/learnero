import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";

export default function CSSGrid() {
  return (
    <div className="motivationWrapper">
      <Grid container spacing={2} style={{width:'90%', margin:'auto',justifyContent:'space-evenly'}}>
        <Grid item sm={6} md={6} lg={3}>
          <img src={img1} style={{height:'100%', width:'95%'}} />
        </Grid>
        <Grid item sm={6} md={6} lg={3}>
          <img src={img2} style={{height:'100%', width:'95%'}} />
        </Grid>
        <Grid item sm={6} md={6} lg={3}>
          <img src={img3} style={{height:'100%', width:'95%'}} />
        </Grid>
        <Grid item sm={6} md={6} lg={3}>
          <img src={img4} style={{height:'95%', width:'95%'}} />
        </Grid>
      </Grid>
    </div>
  );
}
