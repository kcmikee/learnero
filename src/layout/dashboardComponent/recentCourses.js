import { Grid, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../img/py.jpg";
import img2 from "../../img/php.jpeg";
import img3 from "../../img/music6.jpg";
import img4 from "../../img/learnero.jpeg";
import img5 from "../../img/phoyo.jpeg";
import img6 from "../../img/photo-1512686096451-a15c19314d59.jpeg";

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
        <p className="noticeText2">Recent Courses</p>
      </div>
      <div className="noticeBg2"></div>
      <Grid
        container
        spacing={3}
        style={{ justifyContent: "center", marginTop: 20 }}
      >
        <Grid
          item
          lg={1.5}
          style={{ backgroundColor: "azure", borderRadius: 20 }}
        >
          <Link style={{ color: "grey", textDecoration: "none" }}>
            All Categories
          </Link>
        </Grid>
        <Grid item lg={1.5}>
          <Link className="courseText">Development</Link>
        </Grid>
        <Grid item lg={1.5}>
          <Link className="courseText">Exercise</Link>
        </Grid>
        <Grid item lg={1.5}>
          <Link className="courseText">Material Design</Link>
        </Grid>
        <Grid item lg={1.5}>
          <Link className="courseText">Music</Link>
        </Grid>
        <Grid item lg={1.5}>
          <Link className="courseText">Photography</Link>
        </Grid>
        <Grid item lg={1.5}>
          <Link className="courseText">Software Development</Link>
        </Grid>
        <Grid item lg={1.5}>
          <Link className="courseText">Temporary</Link>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: 20, justifyContent: "center" }}>
        <Grid
          item
          sm={5}
          md={5}
          lg={3}
          style={{ backgroundColor: "#fff", margin: 20 }}
        >
          <div className="courseContainer">
            <img src={img1} alt="" className="courseImg" />
          </div>
          <span className="courseSpan">Data Science</span>
          <p className="coursePara">
            Python for Data Science and Machine Learning Bootcamp
          </p>
          <hr />
          <div className="courseRow">
            <p className="coursePara">4 Star</p>
            <p className="coursePara">$60</p>
          </div>
        </Grid>
        <Grid
          item
          sm={5}
          md={5}
          lg={3}
          style={{ backgroundColor: "#fff", margin: 20 }}
        >
          <div className="courseContainer">
            <img src={img2} alt="" className="courseImg" />
          </div>
          <span className="courseSpan">Data Science</span>
          <p className="coursePara">
            Python for Data Science and Machine Learning Bootcamp
          </p>
          <hr />
          <div className="courseRow">
            <p className="coursePara">4.5 Star</p>
            <p className="coursePara">$60</p>
          </div>
        </Grid>
        <Grid
          item
          sm={5}
          md={5}
          lg={3}
          style={{ backgroundColor: "#fff", margin: 20 }}
        >
          <div className="courseContainer">
            <img src={img3} alt="" className="courseImg" />
          </div>
          <span className="courseSpan">Data Science</span>
          <p className="coursePara">
            Python for Data Science and Machine Learning Bootcamp
          </p>
          <hr />
          <div className="courseRow">
            <p className="coursePara">3 Star</p>
            <p className="coursePara">$60</p>
          </div>
        </Grid>
        <Grid
          item
          sm={5}
          md={5}
          lg={3}
          style={{ backgroundColor: "#fff", margin: 20 }}
        >
          <div className="courseContainer">
            <img src={img4} alt="" className="courseImg" />
          </div>
          <span className="courseSpan">Data Science</span>
          <p className="coursePara">
            Python for Data Science and Machine Learning Bootcamp
          </p>
          <hr />
          <div className="courseRow">
            <p className="coursePara">4 Star</p>
            <p className="coursePara">$60</p>
          </div>
        </Grid>
        <Grid
          item
          sm={5}
          md={5}
          lg={3}
          style={{ backgroundColor: "#fff", margin: 20 }}
        >
          <div className="courseContainer">
            <img src={img5} alt="" className="courseImg" />
          </div>
          <span className="courseSpan">Data Science</span>
          <p className="coursePara">
            Python for Data Science and Machine Learning Bootcamp
          </p>
          <hr />
          <div className="courseRow">
            <p className="coursePara">5 Star</p>
            <p className="coursePara">$60</p>
          </div>
        </Grid>
        <Grid
          item
          sm={5}
          md={5}
          lg={3}
          style={{ backgroundColor: "#fff", margin: 20 }}
        >
          <div className="courseContainer">
            <img src={img6} alt="" className="courseImg" />
          </div>
          <span className="courseSpan">Data Science</span>
          <p className="coursePara">
            Python for Data Science and Machine Learning Bootcamp
          </p>
          <hr />
          <div className="courseRow">
            <p className="coursePara">4 Star</p>
            <p className="coursePara">$60</p>
          </div>
        </Grid>
      </Grid>
      <Button
        size="large"
        style={{
          color: "azure",
          backgroundColor: "purple",
          width: "15%",
          alignSelf: "center",
        }}
      >
        Show All
      </Button>
    </div>
  );
}

export default recentCourses;
