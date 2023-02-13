import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { individualPublisherData } from "../redux/action";
import { useNavigate } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  const [auditData, setAuditData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getAuditData = () => {
    axios
      .get("https://expeauditreport.onrender.com/api/auditReport")
      .then((res) => setAuditData(res?.data?.auditReportData));
  };

  useEffect(() => {
    getAuditData();
  }, []);

  const handleEdit = (item) => {
    dispatch(individualPublisherData(item));
    navigate("/auditform");
  };

  const handleDelete = (id) => {
    // const filteredData = data.filter(
    //   (el) =>
    //     el.auditName.split(" ").join("").toLowerCase() !==
    //     auditname.split(" ").join("").toLowerCase()
    // );
    // setData(filteredData);

    axios
      .delete(
        `https://expeauditreport.onrender.com/api/auditReport/delete/${id}`
      )
      .then((res) => {
        console.log(res);
        if (res?.data?.success) {
          alert(res?.data?.message);
          getAuditData();
        }
        if (!res?.data?.success) {
          alert(res?.data?.message);
        }
      });
  };

  const handleAdd = () => {
    navigate("/auditform");
  };
  return (
    <>
      <div
        style={{
          textAlign: "end",
          width: "90%",
          margin: "auto",
          marginTop: "2em",
        }}
        onClick={handleAdd}
      >
        <AddBoxIcon sx={{ fontSize: "50px", marginRight: "1%" }} />
      </div>
      <TableContainer
        sx={{ width: "90%", margin: "auto", marginTop: "2em" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Token Type</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auditData?.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.companyName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.date ? row?.date : "---"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.tokenType}
                </StyledTableCell>
                <StyledTableCell align="right">{row?.address}</StyledTableCell>
                <StyledTableCell align="right">
                  <span onClick={() => handleEdit(row)}>
                    <EditIcon />
                  </span>
                  <span onClick={() => handleDelete(row?._id)}>
                    <DeleteIcon />
                  </span>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
