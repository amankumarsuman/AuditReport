import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function Table({ data, handleIndividualRow }) {
  return (
    <>
      <TableContainer sx={{ marginTop: "3em" }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ background: "#E5E4E2" }}>
            <TableRow>
              {data?.columnNames?.map((names) => (
                <TableCell>{names}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.raw_broadmatch_data?.map((row) => (
              <TableRow onClick={() => handleIndividualRow(row)} key={row.name}>
                <TableCell component="th" scope="row">
                  {row[0]}
                </TableCell>
                <TableCell align="right">{row[1]}</TableCell>
                <TableCell align="right">
                  {row[2] == 0
                    ? "C"
                    : row[2] == 1
                    ? "I"
                    : row[2] == 2
                    ? "N"
                    : row[2] == 3
                    ? "T"
                    : "NOT DEFIENED"}
                </TableCell>
                <TableCell align="right">{row[3]}</TableCell>
                <TableCell align="right">{row[4]}</TableCell>
                <TableCell align="right">{row[5]}</TableCell>
                <TableCell align="right">{row[6]}</TableCell>
                <TableCell align="right">{row[7]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Table;
