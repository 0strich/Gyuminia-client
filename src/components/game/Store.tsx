import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useWeapons from "../../hooks/useWeapons";
import { storeStyles } from "../../css/useStyles";
import { useHistory } from "react-router-dom";

type Row = {
  id: string;
  item: string;
  attack: string;
  defense: string;
  cost: string;
};

const Store = () => {
  const storeStyle = storeStyles();
  const { weapons, getWeapons } = useWeapons();
  const rows = weapons;
  const history = useHistory();

  useEffect(() => {
    getWeapons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 렌더링 */
  return (
    <TableContainer component={Paper}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.goBack()}
      >
        돌아가기
      </Button>
      <Table className={storeStyle.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4} style={{ fontSize: 25 }}>
              Weapons
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Item</TableCell>
            <TableCell align="center">Attack</TableCell>
            <TableCell align="center">Defense</TableCell>
            <TableCell align="center">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows[0]
            ? rows.map((row: any) => (
                <TableRow key={row.item}>
                  <TableCell align="center">{row.item}</TableCell>
                  <TableCell align="center">{row.attack}</TableCell>
                  <TableCell align="center">{row.defense}</TableCell>
                  <TableCell align="center">{row.cost}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Store;
