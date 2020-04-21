import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default,
      },
    },
  })
)(TableRow);

// 추후 실제 데이터 가공
const createData = (
  rank: number,
  character: string,
  level: number,
  hp: number,
  attack: number,
  score: number,
  last_access: string
) => {
  return { rank, character, level, hp, attack, score, last_access };
};

const rows = [
  createData(1, "patric", 10, 100, 20, 10000, "test"),
  createData(2, "junior", 9, 90, 10, 9000, "test2"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    justifyContent: "center",
  },
});

// Ranking 컴포넌트
const Ranking = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h5">캐릭터 랭킹</Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>순위</StyledTableCell>
              <StyledTableCell align="right">캐릭터</StyledTableCell>
              <StyledTableCell align="right">레벨</StyledTableCell>
              <StyledTableCell align="right">HP</StyledTableCell>
              <StyledTableCell align="right">공격력</StyledTableCell>
              <StyledTableCell align="right">점수</StyledTableCell>
              <StyledTableCell align="right">마지막 접속</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.rank}>
                <StyledTableCell component="th" scope="row">
                  {row.rank}
                </StyledTableCell>
                <StyledTableCell align="right">{row.character}</StyledTableCell>
                <StyledTableCell align="right">{row.level}</StyledTableCell>
                <StyledTableCell align="right">{row.hp}</StyledTableCell>
                <StyledTableCell align="right">{row.attack}</StyledTableCell>
                <StyledTableCell align="right">{row.score}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.last_access}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={() => history.push("/auth/login")}
      >
        돌아가기
      </Button>
    </div>
  );
};

export default Ranking;
