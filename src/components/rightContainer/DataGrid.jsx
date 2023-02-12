import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardDiffucltyPaper from "./KeyboardDiffucltyPaper";
import { Button, Divider, Grid, Tab, Tabs } from "@mui/material";
import KeywordDifficultyRightPaper from "./KeywordDifficultyRightPaper";
import TabPanel from "./TabPanel";

export default function DataGridTable({ data }) {
  //state for individual record
  const [showIndividualRecord, setshowIndividualRecord] = React.useState(false);
  const [individualRecord, setIndividualRecord] = React.useState({});

  const handleIndividualRow = (data) => {
    setshowIndividualRecord(true);
    setIndividualRecord(data);
  };

  //for tabs functionality
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      {showIndividualRecord ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <KeyboardDiffucltyPaper data={individualRecord} />
          </Grid>
          <Grid item xs={12} md={6}>
            <KeywordDifficultyRightPaper data={individualRecord} />
          </Grid>
        </Grid>
      ) : null}
      <Grid
        sx={{ marginTop: "5em", width: "100%", margin: "auto" }}
        container
        spacing={2}
      >
        <Grid item xs={12} md={5}>
          <div
            style={{
              // border: "1px solid red",
              borderRadius: "10px",
              background: "#E5E4E2",
              fontWeight: "bold",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Broad Match" />
              <Divider orientation="vertical" flexItem />
              <Tab label="Related" />
              <Divider orientation="vertical" flexItem />
              <Tab label="Questions" />
            </Tabs>
          </div>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid sx={{ textAlign: "end" }} Item xs={12} md={4}>
          <Button
            sx={{
              marginTop: "1.2em",
              padding: "0.6em",
              width: "150px",
              background: "linear-gradient(to right,#673ab7,#69f0ae,#9412ea)",
            }}
            variant="contained"
          >
            Add to List
          </Button>
        </Grid>
      </Grid>

      <TabPanel value={value} index={0}>
        <TableContainer sx={{ marginTop: "3em" }} component={Paper}>
          <Table  >
            <TableHead sx={{ background: "#E5E4E2" }}>
              <TableRow>
                {data?.columnNames?.map((names) => (
                  <TableCell>{names}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.raw_broadmatch_data?.map((row) => (
                <TableRow
                  onClick={() => handleIndividualRow(row)}
                  key={row.name}
                >
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
      </TabPanel>
      <TabPanel value={value} index={2}>
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
              {data?.raw_related_data?.map((row) => (
                <TableRow
                  onClick={() => handleIndividualRow(row)}
                  key={row.name}
                >
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
      </TabPanel>
      <TabPanel value={value} index={4}>
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
              {data?.raw_question_data?.map((row) => (
                <TableRow
                  onClick={() => handleIndividualRow(row)}
                  key={row.name}
                >
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
      </TabPanel>
    </>
  );
}
