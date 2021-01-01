import { Grid, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../img/Frame-12-449x371.png";
import img2 from "../../img/Get-Started-_-178x30.png";

function Instructor() {
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
        <p className="noticeText2">Become an Instructor</p>
      </div>
      <div className="noticeBg2"></div>

      <Grid
        container
        style={{
          marginTop: 40,
          justifyContent: "space-evenly",
          backgroundColor: "#151515",
        }}
      >
        <Grid
          item
          sm={12}
          md={12}
          lg={5}
          style={{ backgroundColor: "#151515" }}
        >
          <div className="courseContainer2">
            <img src={img1} alt="" className="courseImg1" />
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          md={12}
          lg={5}
          style={{ backgroundColor: "#151515" }}
        >
          <h3 className="noticeText3">
            Be a part of our community of Profession teachers!
          </h3>
          <p className='inText'>
            Interact with teachers from the same field, gain an opportunity to
            expand your reach of students, join a diverse community of people
            from all over the world, share your skills with everyone, make an
            additional income & so much more!
          </p>
          <div className="inImg">
            <Link>
                <img src={img2} alt="" className="courseImg1" />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Instructor;
