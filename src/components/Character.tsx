import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Skeleton from "@material-ui/lab/Skeleton";
import { useHistory } from "react-router-dom";
import { characterStyles } from "../css/useStyles";

const Character = () => {
  const characterStyle = characterStyles();
  const history = useHistory();
  const characterCard = (order: number, charName: string) => (
    <Grid item xs={4}>
      <Card className={characterStyle.root}>
        <CardContent>
          <Typography
            className={characterStyle.title}
            color="textSecondary"
            gutterBottom
          >
            {order}번 캐릭터
          </Typography>
          <Typography variant="h5" component="h2">
            {charName}
          </Typography>
          <Typography variant="body2" component="p">
            능력치
            <br />
            캐릭터 정보
          </Typography>
        </CardContent>
        <Button
          color="primary"
          size="large"
          onClick={() => history.push("/game")}
        >
          게임 시작
        </Button>
      </Card>
    </Grid>
  );
  const skeletonCard = () => (
    <Grid item xs={4}>
      <Card className={characterStyle.root}>
        <div>
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="rect" animation="wave" width={400} height={100} />
        </div>
        <Button color="primary" size="large">
          캐릭터 만들기
        </Button>
      </Card>
    </Grid>
  );

  /* 렌더링 */
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h5">캐릭터</Typography>
          <Button color="inherit" style={{ justifyContent: "right" }}>
            로그아웃
          </Button>
        </Toolbar>
      </AppBar>
      <br />
      <Grid container spacing={3}>
        {characterCard(1, "Patric")}
        {characterCard(2, "Junior")}
        {characterCard(3, "Gyuminia")}
        {skeletonCard()}
      </Grid>
    </div>
  );
};

export default Character;
