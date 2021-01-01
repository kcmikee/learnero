import { Grid, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../img/price1.png";
import img2 from "../../img/price2.png";
import img3 from "../../img/price3.png";

function recentCourses() {
  return (
    <div
      style={{
        backgroundColor: "#151515",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 20,
      }}
    >
      <div className="notice">
        <p className="noticeText2">Pricing</p>
      </div>
      <div className="noticeBg2"></div>

      <Grid container style={{ marginTop: 30, justifyContent: "center" }}>
        <Grid
          item
          sm={12}
          md={12}
          lg={3}
          style={{ backgroundColor: "#fff", }}
        >
          <div className="courseContainer1">
            <img src={img1} alt="" className="courseImg1" />
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          md={12}
          lg={3}
          style={{ backgroundColor: "#fff",}}
        >
          <div className="courseContainer1">
            <img src={img2} alt="" className="courseImg1" />
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          md={12}
          lg={3}
          style={{ backgroundColor: "#fff",  }}
        >
          <div className="courseContainer1">
            <img src={img3} alt="" className="courseImg1" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default recentCourses;
