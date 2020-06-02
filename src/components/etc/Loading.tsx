import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <CircularProgress
      disableShrink
      style={{ marginTop: "20%", marginLeft: "50%" }}
    />
  );
};

export default Loading;
