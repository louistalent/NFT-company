import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(number, user, level, id, score) {
  return { number, user, level, id, score };
}

const rows = [
  createData("1", "Mydas", 6, 4823924, 40843),
  createData("2", "Mydas", 9, 4823924, 40843),
  createData("3", "Mydas", 16, 4823924, 40843),
  createData("4", "Mydas", 3, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),
  createData("5", "Mydas", 16, 4823924, 40843),createData("5", "Mydas", 16, 4823924, 40843),createData("5", "Mydas", 16, 4823924, 40843),
  
];

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="right">{row.user}</TableCell>
                <TableCell align="right">{row.level}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
