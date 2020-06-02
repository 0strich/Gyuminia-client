import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { contentStyles } from "../../css/useStyles";

type Props = { username: string };

const Content = ({ username }: Props) => {
  const contentStyle = contentStyles();
  const history = useHistory();

  return (
    <div>
      <div className={contentStyle.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Welcome To Gyuminia
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            반갑습니다 {username} 님!! <br />
            규미니아 포트폴리오 입니다!
          </Typography>
          <div className={contentStyle.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => history.push("/character")}
                >
                  게임 시작
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => history.push("/rank")}
                >
                  랭킹 보기
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Content;
