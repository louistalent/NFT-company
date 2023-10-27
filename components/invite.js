import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(player, user, level, id, score) {
  return { player, user, level, id, score };
}

const rows = [
  createData("bob", "8/8/22", "richard", 6, 21),
  createData("richard", "8/8/22", "richard", 6, 21),
  createData("sam", "8/8/22", "richard", 6, 21),
  createData("rick", "8/8/22", "richard", 6, 21),
  createData("adam", "8/8/22", "richard", 6, 21),
];

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>@player</TableCell>
              <TableCell align="right">Applied On</TableCell>
              <TableCell align="right">Referrer</TableCell>
              <TableCell align="right">Accept</TableCell>
              <TableCell align="right">Waitlist</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.player}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.player}
                </TableCell>
                <TableCell align="right">{row.user}</TableCell>
                <TableCell align="right">{row.level}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">
                  <div className="invite-button2">Profile</div>
                  <div className="invite-button">Accept</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
