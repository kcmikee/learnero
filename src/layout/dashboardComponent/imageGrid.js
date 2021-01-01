import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import grid1 from "../../img/grid1.jpeg";
import grid2 from "../../img/grid2.jpg";
import grid3 from "../../img/grid3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: "#151515",
  },
  paper: {
    color: "purple",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <div style={{ width: "100%",overflow:'hidden' }}>
            <img src={grid1} className='gridImg' />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "95%",
              margin: "auto",
            }}
          >
            <p className={classes.paper}>art</p>
            <p className={classes.paper}>coursea</p>
          </div>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={5} spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={12} pt={10}>
            <div style={{ width: "100%",overflow:'hidden' }}>
              <img src={grid2} className='gridImg2' />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "95%",
                margin: "auto",
              }}
            >
              <p className={classes.paper}>art</p>
              <p className={classes.paper}>coursea</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <div style={{ width: "100%",overflow:'hidden' }}>
              <img src={grid3} className='gridImg2' />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "95%",
                margin: "auto",
              }}
            >
              <p className={classes.paper}>art</p>
              <p className={classes.paper}>coursea</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
