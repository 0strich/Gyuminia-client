import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
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
import { rankingStyles } from "../../css/useStyles";
import Loading from "../../components/etc/Loading";

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

const createData = (
  rank: number,
  characterName: string,
  level: number,
  hp: number,
  attack: number,
  rankScore: number,
  last_access: string
) => {
  return { rank, characterName, level, hp, attack, rankScore, last_access };
};

type Props = { charInfo: any };

// RankForm 컴포넌트
const RankForm = ({ charInfo }: Props) => {
  const rankinnStyle = rankingStyles();
  const history = useHistory();
  const rows = Array.prototype.slice.call(charInfo);

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h5">캐릭터 랭킹</Typography>
        </Toolbar>
      </AppBar>
      <br />
      <TableContainer component={Paper}>
        <Table className={rankinnStyle.table} aria-label="customized table">
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
            {charInfo[0] ? (
              rows.map((row: any) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {/* {row.rank} */}
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.characterName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.level}</StyledTableCell>
                  <StyledTableCell align="right">{row.hp}</StyledTableCell>
                  <StyledTableCell align="right">{row.attack}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.rankScore}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.last_access}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <Loading />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={() => history.goBack()}
      >
        돌아가기
      </Button>
    </div>
  );
};

export default RankForm;
