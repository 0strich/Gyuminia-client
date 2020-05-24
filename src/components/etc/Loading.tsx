import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    // <Grid container spacing={3}>
    //   <Grid item xs={12}>
    <CircularProgress
      disableShrink
      style={{ marginTop: "20%", marginLeft: "50%" }}
    />
    //   </Grid>
    // </Grid>
  );
};

export default Loading;
