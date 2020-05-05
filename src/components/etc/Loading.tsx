import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { loadingStyles } from "../../css/useStyles";

const Loading = () => {
  const LoadingStyle = loadingStyles();
  return (
    <div>
      <Backdrop className={LoadingStyle.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loading;
